/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { QueryList, TemplateRef } from '@angular/core';
import { NzCommentActionComponent as CommentAction } from './nz-comment-cells';
export declare class NzCommentComponent {
    nzAuthor: string | TemplateRef<void>;
    nzDatetime: string | TemplateRef<void>;
    actions: QueryList<CommentAction>;
    constructor();
}
