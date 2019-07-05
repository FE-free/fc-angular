/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { NzMentionTriggerDirective } from './nz-mention-trigger';
export declare class NzMentionService implements OnDestroy {
    private trigger;
    private triggerChange$;
    triggerChanged(): Observable<NzMentionTriggerDirective>;
    registerTrigger(trigger: NzMentionTriggerDirective): void;
    ngOnDestroy(): void;
}
