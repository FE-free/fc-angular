/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NzTreeNode } from './nz-tree-base-node';
import { NzTreeBaseService } from './nz-tree-base.service';
export declare class NzTreeBase {
    nzTreeService: NzTreeBaseService;
    constructor(nzTreeService: NzTreeBaseService);
    /**
     * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
     */
    coerceTreeNodes(value: any[]): NzTreeNode[];
    /**
     * Get all nodes({@link NzTreeNode})
     */
    getTreeNodes(): NzTreeNode[];
    /**
     * Get {@link NzTreeNode} with key
     */
    getTreeNodeByKey(key: string): NzTreeNode | null;
    /**
     * Get checked nodes(merged)
     */
    getCheckedNodeList(): NzTreeNode[];
    /**
     * Get selected nodes
     */
    getSelectedNodeList(): NzTreeNode[];
    /**
     * Get half checked nodes
     */
    getHalfCheckedNodeList(): NzTreeNode[];
    /**
     * Get expanded nodes
     */
    getExpandedNodeList(): NzTreeNode[];
    /**
     * Get matched nodes(if nzSearchValue is not null)
     */
    getMatchedNodeList(): NzTreeNode[];
}
