/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalRef } from './nz-modal-ref.class';
import { NzModalComponent } from './nz-modal.component';
import { ConfirmType, ModalOptionsForService } from './nz-modal.type';
export declare class ModalBuilderForService {
    private overlay;
    private modalRef;
    private overlayRef;
    constructor(overlay: Overlay, options?: ModalOptionsForService);
    getInstance(): NzModalComponent | null;
    destroyModal(): void;
    private changeProps;
    private createModal;
}
export declare class NzModalService {
    private overlay;
    private modalControl;
    readonly openModals: NzModalRef[];
    readonly afterAllClose: Observable<void>;
    constructor(overlay: Overlay, modalControl: NzModalControlService);
    closeAll(): void;
    create<T>(options?: ModalOptionsForService<T>): NzModalRef<T>;
    confirm<T>(options?: ModalOptionsForService<T>, confirmType?: ConfirmType): NzModalRef<T>;
    info<T>(options?: ModalOptionsForService<T>): NzModalRef<T>;
    success<T>(options?: ModalOptionsForService<T>): NzModalRef<T>;
    error<T>(options?: ModalOptionsForService<T>): NzModalRef<T>;
    warning<T>(options?: ModalOptionsForService<T>): NzModalRef<T>;
    private simpleConfirm;
}
