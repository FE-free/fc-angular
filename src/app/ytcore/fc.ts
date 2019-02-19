import { OnChanges, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { ProvidersService, AppService, DaoService, LogService, MessageService } from "fccore2";
export class FcComponent implements OnChanges, OnInit {
    //初始化组件
    ngOnInit(): void {

    }
    /**元数据服务，提供元数据的增删改查接口的服务*/
    appService: AppService;
    /** http请求服务，提供访问后端服务，包含get post 等方法*/
    daoService: DaoService;
    /** 日志服务类，提供写行为日志日志，*/
    logService: LogService;
    msgService: MessageService;
    /**组件状态*/
    @Input()
    fcStatus: string;
    /**行内样式*/
    @Input()
    fcStyle: any;
    /**样式类*/
    @Input()
    fcClass: string;
    /**组件大小，分small，default，large*/
    @Input()
    fcSize: string;
    /**是否禁用 默认为不禁用,'Y'表示禁用，'N'表示不禁用*/
    @Input()
    fcDisabled: string = 'N';

    _disabled: boolean;
    /**
     * 主题
     */
    @Input()
    fcTheme: string = "light";
    /**
     * 事件
     */
    @Output()
    fcEvent: EventEmitter<any> = new EventEmitter();
    //依赖注入
    constructor(public provider: ProvidersService, public _id?: string) {
        this.appService = provider.appService;
        this.daoService = provider.daoService;
        this.logService = provider.logService;
        this.msgService = provider.msgService;
    }
    //输入属性改变时触发
    ngOnChanges(): void {
        if (this.fcSize === undefined) {
            this.fcSize = FCSIZE.default;
        }
    }
    /**
     * 所有事件的出口
     * @param event 事件
     */
    _fcEvent(event: FCEVENT) {
        this.fcEvent.emit(event);
    }
    /**
     * 所有事件的出口
     * @param eventName 事件名
     * @param param 返回参数
     */
    event(eventName: string, param: any) {
        this._fcEvent({ eventName: eventName, param: param });
    }
}
/**
 * 组件大小，默认是default
 */
export const FCSIZE = {
    small: 'small',
    default: 'default',
    large: 'large'
}
export interface FCEVENT {
    /**事件名称*/
    eventName: string;
    /**事件参数内容*/
    param: any;
}
