/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef } from '@angular/core';
import { NzMessageConfig } from './nz-message-config';
import { NzMessageDataFilled, NzMessageDataOptions } from './nz-message.definitions';
export declare class NzMessageContainerComponent {
    protected cdr: ChangeDetectorRef;
    messages: NzMessageDataFilled[];
    config: Required<NzMessageConfig>;
    top: string | null;
    constructor(cdr: ChangeDetectorRef, defaultConfig: NzMessageConfig, config: NzMessageConfig);
    setConfig(config: NzMessageConfig): void;
    /**
     * Create a new message.
     * @param message Parsed message configuration.
     */
    createMessage(message: NzMessageDataFilled): void;
    /**
     * Remove a message by `messageId`.
     * @param messageId Id of the message to be removed.
     * @param userAction Whether this is closed by user interaction.
     */
    removeMessage(messageId: string, userAction?: boolean): void;
    /**
     * Remove all messages.
     */
    removeMessageAll(): void;
    /**
     * Merge default options and custom message options
     * @param options
     */
    protected _mergeMessageOptions(options?: NzMessageDataOptions): NzMessageDataOptions;
}
