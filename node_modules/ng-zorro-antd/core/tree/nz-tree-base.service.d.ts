/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NzTreeNode } from './nz-tree-base-node';
import { NzFormatEmitEvent } from './nz-tree-base.definitions';
export declare class NzTreeBaseService implements OnDestroy {
    DRAG_SIDE_RANGE: number;
    DRAG_MIN_GAP: number;
    isCheckStrictly: boolean;
    isMultiple: boolean;
    selectedNode: NzTreeNode;
    rootNodes: NzTreeNode[];
    selectedNodeList: NzTreeNode[];
    expandedNodeList: NzTreeNode[];
    checkedNodeList: NzTreeNode[];
    halfCheckedNodeList: NzTreeNode[];
    matchedNodeList: NzTreeNode[];
    triggerEventChange$: Subject<NzFormatEmitEvent>;
    /**
     * trigger event
     */
    eventTriggerChanged(): Observable<NzFormatEmitEvent>;
    /**
     * reset tree nodes will clear default node list
     */
    initTree(nzNodes: NzTreeNode[]): void;
    getSelectedNode(): NzTreeNode | null;
    /**
     * get some list
     */
    getSelectedNodeList(): NzTreeNode[];
    /**
     * return checked nodes
     */
    getCheckedNodeList(): NzTreeNode[];
    getHalfCheckedNodeList(): NzTreeNode[];
    /**
     * return expanded nodes
     */
    getExpandedNodeList(): NzTreeNode[];
    /**
     * return search matched nodes
     */
    getMatchedNodeList(): NzTreeNode[];
    isArrayOfNzTreeNode(value: any[]): boolean;
    /**
     * reset selectedNodeList
     */
    calcSelectedKeys(selectedKeys: string[], nzNodes: NzTreeNode[], isMulti?: boolean): void;
    /**
     * reset expandedNodeList
     */
    calcExpandedKeys(expandedKeys: string[], nzNodes: NzTreeNode[]): void;
    /**
     * reset checkedNodeList
     */
    calcCheckedKeys(checkedKeys: string[], nzNodes: NzTreeNode[], isCheckStrictly?: boolean): void;
    /**
     * set drag node
     */
    setSelectedNode(node: NzTreeNode): void;
    /**
     * set node selected status
     */
    setNodeActive(node: NzTreeNode): void;
    /**
     * add or remove node to selectedNodeList
     */
    setSelectedNodeList(node: NzTreeNode, isMultiple?: boolean): void;
    /**
     * merge checked nodes
     */
    setHalfCheckedNodeList(node: NzTreeNode): void;
    setCheckedNodeList(node: NzTreeNode): void;
    /**
     * conduct checked/selected/expanded keys
     */
    conductNodeState(type?: string): NzTreeNode[];
    /**
     * set expanded nodes
     */
    setExpandedNodeList(node: NzTreeNode): void;
    /**
     * check state
     * @param isCheckStrictly
     */
    refreshCheckState(isCheckStrictly?: boolean): void;
    conduct(node: NzTreeNode): void;
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    conductUp(node: NzTreeNode): void;
    /**
     * reset child check state
     */
    conductDown(node: NzTreeNode, value: boolean): void;
    /**
     * search value & expand node
     * should add expandlist
     */
    searchExpand(value: string): void;
    /**
     * flush after delete node
     */
    afterRemove(nodes: NzTreeNode[]): void;
    /**
     * drag event
     */
    refreshDragNode(node: NzTreeNode): void;
    resetNodeLevel(node: NzTreeNode): void;
    calcDropPosition(event: DragEvent): number;
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    dropAndApply(targetNode: NzTreeNode, dragPos?: number): void;
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    formatEvent(eventName: string, node: NzTreeNode | null, event: MouseEvent | DragEvent | null): NzFormatEmitEvent;
    ngOnDestroy(): void;
}
