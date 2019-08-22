/*
 * @Author: luohong
 * @Date: 2019-08-21 10:01:19
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-22 16:50:41
 * @Description: 
 * @email: 3300536651@qq.com
 */

import { Component, OnInit, AfterViewInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'fc-aggrid',
    templateUrl: './fcaggrid.component.html',
    styleUrls: ['./fcaggrid.component.less']
})
export class FcaggridComponent implements OnInit, AfterViewInit {
    private gridApi;
    private gridColumnApi;
    private columnDefs;
    private defaultColDef;
    private rowSelection;
    private rowModelType;
    private getRowNodeId;
    private components;
    private rowData: [];
    constructor(public router: Router, public activedRoute: ActivatedRoute, private http: HttpClient) {
        this.columnDefs = [
            {
                headerName: "#",
                width: 50,
                cellRenderer: "rowIdRenderer"
            },
            {
                headerName: "Code",
                field: "code",
                width: 70
            },
            {
                headerName: "Name",
                field: "name",
                width: 300
            },
            {
                headerName: "Bid",
                field: "bid",
                width: 100,
                cellClass: "cell-number",
                valueFormatter: numberFormatter,
                cellRenderer: "agAnimateShowChangeCellRenderer"
            },
            {
                headerName: "Mid",
                field: "mid",
                width: 100,
                cellClass: "cell-number",
                valueFormatter: numberFormatter,
                cellRenderer: "agAnimateShowChangeCellRenderer"
            },
            {
                headerName: "Ask",
                field: "ask",
                width: 100,
                cellClass: "cell-number",
                valueFormatter: numberFormatter,
                cellRenderer: "agAnimateShowChangeCellRenderer"
            },
            {
                headerName: "Volume",
                field: "volume",
                width: 80,
                cellClass: "cell-number",
                cellRenderer: "agAnimateSlideCellRenderer"
            }
        ];
        this.defaultColDef = { resizable: true };
        this.rowSelection = "multiple";
        this.rowModelType = "viewport";
        this.getRowNodeId = function (data) {
            return data.code;
        };
        this.components = {
            rowIdRenderer: function (params) {
                return "" + params.rowIndex;
            }
        };
    }
    /**
     * 初始化指令/组件,在第一轮 ngOnChanges() 完成之后调用，只调用一次
     */
    ngOnInit(): void { }
    /**
     * 每当 Angular 初始化完组件视图及其子视图之后调用。
     */
    ngAfterViewInit(): void {

    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        this.http.get("https://rawgit.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/stocks.json").subscribe(data => {
            var mockServer = createMockServer();
            mockServer.init(data);
            var viewportDatasource = createViewportDatasource(mockServer);
            params.api.setViewportDatasource(viewportDatasource);
            setTimeout(function () {
                params.api.sizeColumnsToFit();
            }, 100);
        });
    }
}

function numberFormatter(params) {
    if (typeof params.value === "number") {
        return params.value.toFixed(2);
    } else {
        return params.value;
    }
}
function createViewportDatasource(mockServer) {
    function ViewportDatasource(mockServer) {
        this.mockServer = mockServer;
        this.connectionId = this.mockServer.connect(this.eventListener.bind(this));
    }
    ViewportDatasource.prototype.setViewportRange = function (firstRow, lastRow) {
        console.log("setViewportRange: " + firstRow + " to " + lastRow);
        this.mockServer.setViewportRange(this.connectionId, firstRow, lastRow);
    };
    ViewportDatasource.prototype.init = function (params) {
        this.params = params;
    };
    ViewportDatasource.prototype.destroy = function () {
        this.mockServer.disconnect(this.connectionId);
    };
    ViewportDatasource.prototype.eventListener = function (event) {
        switch (event.eventType) {
            case "rowCountChanged":
                this.onRowCountChanged(event);
                break;
            case "rowData":
                this.onRowData(event);
                break;
            case "dataUpdated":
                this.onDataUpdated(event);
                break;
        }
    };
    ViewportDatasource.prototype.onRowData = function (event) {
        var rowDataFromServer = event.rowDataMap;
        this.params.setRowData(rowDataFromServer);
    };
    ViewportDatasource.prototype.onDataUpdated = function (event) {
        var that = this;
        event.changes.forEach(function (change) {
            var rowNode = that.params.getRow(change.rowIndex);
            if (!rowNode || !rowNode.data) {
                return;
            }
            rowNode.setDataValue(change.columnId, change.newValue);
        });
    };
    ViewportDatasource.prototype.onRowCountChanged = function (event) {
        var rowCountFromServer = event.rowCount;
        this.params.setRowCount(rowCountFromServer);
    };
    return new ViewportDatasource(mockServer);
}
function createMockServer() {
    function MockServer() {
        this.connections = {};
        this.nextConnectionId = 0;
        setInterval(this.periodicallyUpdateData.bind(this), 100);
    }
    MockServer.prototype.periodicallyUpdateData = function () {
        var changes = [];
        this.makeSomePriceChanges(changes);
        this.makeSomeVolumeChanges(changes);
        this.informConnectionsOfChanges(changes);
    };
    MockServer.prototype.informConnectionsOfChanges = function (changes) {
        var that = this;
        Object.keys(this.connections).forEach(function (connectionId) {
            var connection = that.connections[connectionId];
            var changesThisConnection = [];
            changes.forEach(function (change) {
                var changeInRange = change.rowIndex >= connection.firstRow && change.rowIndex <= connection.lastRow;
                if (changeInRange) {
                    changesThisConnection.push(change);
                }
            });
            if (changesThisConnection.length > 0) {
                that.sendEventAsync(connectionId, {
                    eventType: "dataUpdated",
                    changes: changesThisConnection
                });
            }
        });
    };
    MockServer.prototype.makeSomeVolumeChanges = function (changes) {
        for (var i = 0; i < 10; i++) {
            var index = Math.floor(this.allData.length * Math.random());
            var dataItem = this.allData[index];
            var move = Math.floor(10 * Math.random()) - 5;
            var newValue = dataItem.volume + move;
            dataItem.volume = newValue;
            changes.push({
                rowIndex: index,
                columnId: "volume",
                newValue: dataItem.volume
            });
        }
    };
    MockServer.prototype.makeSomePriceChanges = function (changes) {
        for (var i = 0; i < 10; i++) {
            var index = Math.floor(this.allData.length * Math.random());
            var dataItem = this.allData[index];
            var move = Math.floor(30 * Math.random()) / 10 - 1;
            var newValue = dataItem.mid + move;
            dataItem.mid = newValue;
            this.setBidAndAsk(dataItem);
            changes.push({
                rowIndex: index,
                columnId: "mid",
                newValue: dataItem.mid
            });
            changes.push({
                rowIndex: index,
                columnId: "bid",
                newValue: dataItem.bid
            });
            changes.push({
                rowIndex: index,
                columnId: "ask",
                newValue: dataItem.ask
            });
        }
    };
    MockServer.prototype.init = function (allData) {
        this.allData = allData;
        var that = this;
        this.allData.forEach(function (dataItem) {
            dataItem.volume = Math.floor(Math.random() * 10000 + 100);
            dataItem.mid = Math.random() * 300 + 20;
            that.setBidAndAsk(dataItem);
        });
    };
    MockServer.prototype.setBidAndAsk = function (dataItem) {
        dataItem.bid = dataItem.mid * 0.98;
        dataItem.ask = dataItem.mid * 1.02;
    };
    MockServer.prototype.connect = function (listener) {
        var connectionId = this.nextConnectionId;
        this.nextConnectionId++;
        this.connections[connectionId] = {
            listener: listener,
            rowsInClient: {},
            firstRow: 0,
            lastRow: -1
        };
        this.sendEventAsync(connectionId, {
            eventType: "rowCountChanged",
            rowCount: this.allData.length
        });
        return connectionId;
    };
    MockServer.prototype.sendEventAsync = function (connectionId, event) {
        var listener = this.connections[connectionId].listener;
        setTimeout(function () {
            listener(event);
        }, 20);
    };
    MockServer.prototype.disconnect = function (connectionId) {
        delete this.connections[connectionId];
    };
    MockServer.prototype.setViewportRange = function (connectionId, firstRow, lastRow) {
        var connection = this.connections[connectionId];
        connection.firstRow = firstRow;
        connection.lastRow = lastRow;
        this.purgeFromClientRows(connection.rowsInClient, firstRow, lastRow);
        this.sendResultsToClient(connectionId, firstRow, lastRow);
    };
    MockServer.prototype.purgeFromClientRows = function (rowsInClient, firstRow, lastRow) {
        Object.keys(rowsInClient).forEach(function (rowIndexStr) {
            var rowIndex = parseInt(rowIndexStr);
            if (rowIndex < firstRow || rowIndex > lastRow) {
                delete rowsInClient[rowIndex];
            }
        });
    };
    MockServer.prototype.sendResultsToClient = function (connectionId, firstRow, lastRow) {
        if (firstRow < 0 || lastRow < firstRow) {
            console.warn("start or end is not valid");
            return;
        }
        var rowsInClient = this.connections[connectionId].rowsInClient;
        var rowDataMap = {};
        for (var i = firstRow; i <= lastRow; i++) {
            if (rowsInClient[i]) {
                continue;
            }
            rowDataMap[i] = this.allData[i];
            rowsInClient[i] = true;
        }
        this.sendEventAsync(connectionId, {
            eventType: "rowData",
            rowDataMap: rowDataMap
        });
    };
    MockServer.prototype.getRowCount = function () {
        return this.allData.length;
    };
    return new MockServer();
}
