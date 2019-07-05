/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Subject } from 'rxjs';
import { NzModalRef } from './nz-modal-ref.class';
export declare class NzModalControlService {
    private parentService;
    readonly afterAllClose: Subject<void>;
    readonly openModals: NzModalRef[];
    private rootOpenModals;
    private rootAfterAllClose;
    private rootRegisteredMetaMap;
    private readonly registeredMetaMap;
    constructor(parentService: NzModalControlService);
    registerModal(modalRef: NzModalRef): void;
    deregisterModal(modalRef: NzModalRef): void;
    hasRegistered(modalRef: NzModalRef): boolean;
    closeAll(): void;
    private removeOpenModal;
}
