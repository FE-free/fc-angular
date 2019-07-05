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
export class NzTreeBase {
    /**
     * @param {?} nzTreeService
     */
    constructor(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({\@link any[]}) to a TreeNodes({\@link NzTreeNode[]})
     * @param {?} value
     * @return {?}
     */
    coerceTreeNodes(
    // tslint:disable-next-line:no-any
    value) {
        /** @type {?} */
        let nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            item => new NzTreeNode(item, null, this.nzTreeService)));
        }
        else {
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                item.service = this.nzTreeService;
                return item;
            }));
        }
        return nodes;
    }
    /**
     * Get all nodes({\@link NzTreeNode})
     * @return {?}
     */
    getTreeNodes() {
        return this.nzTreeService.rootNodes;
    }
    /**
     * Get {\@link NzTreeNode} with key
     * @param {?} key
     * @return {?}
     */
    getTreeNodeByKey(key) {
        // flat tree nodes
        /** @type {?} */
        const nodes = [];
        /** @type {?} */
        const getNode = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            nodes.push(node);
            node.getChildren().forEach((/**
             * @param {?} n
             * @return {?}
             */
            n => {
                getNode(n);
            }));
        });
        this.getTreeNodes().forEach((/**
         * @param {?} n
         * @return {?}
         */
        n => {
            getNode(n);
        }));
        return nodes.find((/**
         * @param {?} n
         * @return {?}
         */
        n => n.key === key)) || null;
    }
    /**
     * Get checked nodes(merged)
     * @return {?}
     */
    getCheckedNodeList() {
        return this.nzTreeService.getCheckedNodeList();
    }
    /**
     * Get selected nodes
     * @return {?}
     */
    getSelectedNodeList() {
        return this.nzTreeService.getSelectedNodeList();
    }
    /**
     * Get half checked nodes
     * @return {?}
     */
    getHalfCheckedNodeList() {
        return this.nzTreeService.getHalfCheckedNodeList();
    }
    /**
     * Get expanded nodes
     * @return {?}
     */
    getExpandedNodeList() {
        return this.nzTreeService.getExpandedNodeList();
    }
    /**
     * Get matched nodes(if nzSearchValue is not null)
     * @return {?}
     */
    getMatchedNodeList() {
        return this.nzTreeService.getMatchedNodeList();
    }
}
if (false) {
    /** @type {?} */
    NzTreeBase.prototype.nzTreeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidHJlZS9uei10cmVlLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHakQsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDckIsWUFBbUIsYUFBZ0M7UUFBaEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO0lBQUcsQ0FBQzs7Ozs7O0lBS3ZELGVBQWU7SUFDYixrQ0FBa0M7SUFDbEMsS0FBWTs7WUFFUixLQUFLLEdBQWlCLEVBQUU7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEQsOEJBQThCO1lBQzlCLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUMsQ0FBQztTQUMzRTthQUFNO1lBQ0wsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDbEMsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUtELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUtELGdCQUFnQixDQUFDLEdBQVc7OztjQUVwQixLQUFLLEdBQWlCLEVBQUU7O2NBQ3hCLE9BQU87Ozs7UUFBRyxDQUFDLElBQWdCLEVBQVEsRUFBRTtZQUN6QyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUM5QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFDLElBQUksSUFBSSxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBS0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBS0QsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBS0Qsc0JBQXNCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBS0QsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBS0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2pELENBQUM7Q0FDRjs7O0lBakZhLG1DQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Utbm9kZSc7XG5pbXBvcnQgeyBOelRyZWVCYXNlU2VydmljZSB9IGZyb20gJy4vbnotdHJlZS1iYXNlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTnpUcmVlQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuelRyZWVTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSkge31cblxuICAvKipcbiAgICogQ29lcmNlcyBhIHZhbHVlKHtAbGluayBhbnlbXX0pIHRvIGEgVHJlZU5vZGVzKHtAbGluayBOelRyZWVOb2RlW119KVxuICAgKi9cbiAgY29lcmNlVHJlZU5vZGVzKFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICB2YWx1ZTogYW55W11cbiAgKTogTnpUcmVlTm9kZVtdIHtcbiAgICBsZXQgbm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xuICAgIGlmICghdGhpcy5uelRyZWVTZXJ2aWNlLmlzQXJyYXlPZk56VHJlZU5vZGUodmFsdWUpKSB7XG4gICAgICAvLyBoYXMgbm90IGJlZW4gbmV3IE56VHJlZU5vZGVcbiAgICAgIG5vZGVzID0gdmFsdWUubWFwKGl0ZW0gPT4gbmV3IE56VHJlZU5vZGUoaXRlbSwgbnVsbCwgdGhpcy5uelRyZWVTZXJ2aWNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGVzID0gdmFsdWUubWFwKChpdGVtOiBOelRyZWVOb2RlKSA9PiB7XG4gICAgICAgIGl0ZW0uc2VydmljZSA9IHRoaXMubnpUcmVlU2VydmljZTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbm9kZXMoe0BsaW5rIE56VHJlZU5vZGV9KVxuICAgKi9cbiAgZ2V0VHJlZU5vZGVzKCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHtAbGluayBOelRyZWVOb2RlfSB3aXRoIGtleVxuICAgKi9cbiAgZ2V0VHJlZU5vZGVCeUtleShrZXk6IHN0cmluZyk6IE56VHJlZU5vZGUgfCBudWxsIHtcbiAgICAvLyBmbGF0IHRyZWUgbm9kZXNcbiAgICBjb25zdCBub2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gICAgY29uc3QgZ2V0Tm9kZSA9IChub2RlOiBOelRyZWVOb2RlKTogdm9pZCA9PiB7XG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2gobiA9PiB7XG4gICAgICAgIGdldE5vZGUobik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuZ2V0VHJlZU5vZGVzKCkuZm9yRWFjaChuID0+IHtcbiAgICAgIGdldE5vZGUobik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGVzLmZpbmQobiA9PiBuLmtleSA9PT0ga2V5KSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGVja2VkIG5vZGVzKG1lcmdlZClcbiAgICovXG4gIGdldENoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0Q2hlY2tlZE5vZGVMaXN0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbGVjdGVkIG5vZGVzXG4gICAqL1xuICBnZXRTZWxlY3RlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGVMaXN0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGhhbGYgY2hlY2tlZCBub2Rlc1xuICAgKi9cbiAgZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBleHBhbmRlZCBub2Rlc1xuICAgKi9cbiAgZ2V0RXhwYW5kZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0RXhwYW5kZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtYXRjaGVkIG5vZGVzKGlmIG56U2VhcmNoVmFsdWUgaXMgbm90IG51bGwpXG4gICAqL1xuICBnZXRNYXRjaGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldE1hdGNoZWROb2RlTGlzdCgpO1xuICB9XG59XG4iXX0=