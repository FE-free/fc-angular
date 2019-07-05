/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NzTreeNode } from './nz-tree-base-node';
var NzTreeBase = /** @class */ (function () {
    function NzTreeBase(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
     */
    /**
     * Coerces a value({\@link any[]}) to a TreeNodes({\@link NzTreeNode[]})
     * @param {?} value
     * @return {?}
     */
    NzTreeBase.prototype.coerceTreeNodes = /**
     * Coerces a value({\@link any[]}) to a TreeNodes({\@link NzTreeNode[]})
     * @param {?} value
     * @return {?}
     */
    function (
    // tslint:disable-next-line:no-any
    value) {
        var _this = this;
        /** @type {?} */
        var nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return new NzTreeNode(item, null, _this.nzTreeService); }));
        }
        else {
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.service = _this.nzTreeService;
                return item;
            }));
        }
        return nodes;
    };
    /**
     * Get all nodes({@link NzTreeNode})
     */
    /**
     * Get all nodes({\@link NzTreeNode})
     * @return {?}
     */
    NzTreeBase.prototype.getTreeNodes = /**
     * Get all nodes({\@link NzTreeNode})
     * @return {?}
     */
    function () {
        return this.nzTreeService.rootNodes;
    };
    /**
     * Get {@link NzTreeNode} with key
     */
    /**
     * Get {\@link NzTreeNode} with key
     * @param {?} key
     * @return {?}
     */
    NzTreeBase.prototype.getTreeNodeByKey = /**
     * Get {\@link NzTreeNode} with key
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // flat tree nodes
        /** @type {?} */
        var nodes = [];
        /** @type {?} */
        var getNode = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            nodes.push(node);
            node.getChildren().forEach((/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                getNode(n);
            }));
        });
        this.getTreeNodes().forEach((/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            getNode(n);
        }));
        return nodes.find((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return n.key === key; })) || null;
    };
    /**
     * Get checked nodes(merged)
     */
    /**
     * Get checked nodes(merged)
     * @return {?}
     */
    NzTreeBase.prototype.getCheckedNodeList = /**
     * Get checked nodes(merged)
     * @return {?}
     */
    function () {
        return this.nzTreeService.getCheckedNodeList();
    };
    /**
     * Get selected nodes
     */
    /**
     * Get selected nodes
     * @return {?}
     */
    NzTreeBase.prototype.getSelectedNodeList = /**
     * Get selected nodes
     * @return {?}
     */
    function () {
        return this.nzTreeService.getSelectedNodeList();
    };
    /**
     * Get half checked nodes
     */
    /**
     * Get half checked nodes
     * @return {?}
     */
    NzTreeBase.prototype.getHalfCheckedNodeList = /**
     * Get half checked nodes
     * @return {?}
     */
    function () {
        return this.nzTreeService.getHalfCheckedNodeList();
    };
    /**
     * Get expanded nodes
     */
    /**
     * Get expanded nodes
     * @return {?}
     */
    NzTreeBase.prototype.getExpandedNodeList = /**
     * Get expanded nodes
     * @return {?}
     */
    function () {
        return this.nzTreeService.getExpandedNodeList();
    };
    /**
     * Get matched nodes(if nzSearchValue is not null)
     */
    /**
     * Get matched nodes(if nzSearchValue is not null)
     * @return {?}
     */
    NzTreeBase.prototype.getMatchedNodeList = /**
     * Get matched nodes(if nzSearchValue is not null)
     * @return {?}
     */
    function () {
        return this.nzTreeService.getMatchedNodeList();
    };
    return NzTreeBase;
}());
export { NzTreeBase };
if (false) {
    /** @type {?} */
    NzTreeBase.prototype.nzTreeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidHJlZS9uei10cmVlLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHakQ7SUFDRSxvQkFBbUIsYUFBZ0M7UUFBaEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO0lBQUcsQ0FBQztJQUV2RDs7T0FFRzs7Ozs7O0lBQ0gsb0NBQWU7Ozs7O0lBQWY7SUFDRSxrQ0FBa0M7SUFDbEMsS0FBWTtRQUZkLGlCQWVDOztZQVhLLEtBQUssR0FBaUIsRUFBRTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsRCw4QkFBOEI7WUFDOUIsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBOUMsQ0FBOEMsRUFBQyxDQUFDO1NBQzNFO2FBQU07WUFDTCxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLElBQWdCO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGlDQUFZOzs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gscUNBQWdCOzs7OztJQUFoQixVQUFpQixHQUFXOzs7WUFFcEIsS0FBSyxHQUFpQixFQUFFOztZQUN4QixPQUFPOzs7O1FBQUcsVUFBQyxJQUFnQjtZQUMvQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxDQUFDO2dCQUMxQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWIsQ0FBYSxFQUFDLElBQUksSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx1Q0FBa0I7Ozs7SUFBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsd0NBQW1COzs7O0lBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDJDQUFzQjs7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx3Q0FBbUI7Ozs7SUFBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsdUNBQWtCOzs7O0lBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQWxGRCxJQWtGQzs7OztJQWpGYSxtQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJy4vbnotdHJlZS1iYXNlLW5vZGUnO1xuaW1wb3J0IHsgTnpUcmVlQmFzZVNlcnZpY2UgfSBmcm9tICcuL256LXRyZWUtYmFzZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIE56VHJlZUJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpUcmVlU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIENvZXJjZXMgYSB2YWx1ZSh7QGxpbmsgYW55W119KSB0byBhIFRyZWVOb2Rlcyh7QGxpbmsgTnpUcmVlTm9kZVtdfSlcbiAgICovXG4gIGNvZXJjZVRyZWVOb2RlcyhcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgdmFsdWU6IGFueVtdXG4gICk6IE56VHJlZU5vZGVbXSB7XG4gICAgbGV0IG5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcbiAgICBpZiAoIXRoaXMubnpUcmVlU2VydmljZS5pc0FycmF5T2ZOelRyZWVOb2RlKHZhbHVlKSkge1xuICAgICAgLy8gaGFzIG5vdCBiZWVuIG5ldyBOelRyZWVOb2RlXG4gICAgICBub2RlcyA9IHZhbHVlLm1hcChpdGVtID0+IG5ldyBOelRyZWVOb2RlKGl0ZW0sIG51bGwsIHRoaXMubnpUcmVlU2VydmljZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlcyA9IHZhbHVlLm1hcCgoaXRlbTogTnpUcmVlTm9kZSkgPT4ge1xuICAgICAgICBpdGVtLnNlcnZpY2UgPSB0aGlzLm56VHJlZVNlcnZpY2U7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5vZGVzKHtAbGluayBOelRyZWVOb2RlfSlcbiAgICovXG4gIGdldFRyZWVOb2RlcygpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB7QGxpbmsgTnpUcmVlTm9kZX0gd2l0aCBrZXlcbiAgICovXG4gIGdldFRyZWVOb2RlQnlLZXkoa2V5OiBzdHJpbmcpOiBOelRyZWVOb2RlIHwgbnVsbCB7XG4gICAgLy8gZmxhdCB0cmVlIG5vZGVzXG4gICAgY29uc3Qgbm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IGdldE5vZGUgPSAobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQgPT4ge1xuICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKG4gPT4ge1xuICAgICAgICBnZXROb2RlKG4pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmdldFRyZWVOb2RlcygpLmZvckVhY2gobiA9PiB7XG4gICAgICBnZXROb2RlKG4pO1xuICAgIH0pO1xuICAgIHJldHVybiBub2Rlcy5maW5kKG4gPT4gbi5rZXkgPT09IGtleSkgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2hlY2tlZCBub2RlcyhtZXJnZWQpXG4gICAqL1xuICBnZXRDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldENoZWNrZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBub2Rlc1xuICAgKi9cbiAgZ2V0U2VsZWN0ZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBoYWxmIGNoZWNrZWQgbm9kZXNcbiAgICovXG4gIGdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZXhwYW5kZWQgbm9kZXNcbiAgICovXG4gIGdldEV4cGFuZGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldEV4cGFuZGVkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbWF0Y2hlZCBub2RlcyhpZiBuelNlYXJjaFZhbHVlIGlzIG5vdCBudWxsKVxuICAgKi9cbiAgZ2V0TWF0Y2hlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRNYXRjaGVkTm9kZUxpc3QoKTtcbiAgfVxufVxuIl19