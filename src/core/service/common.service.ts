import { Observable, ObservableInput } from 'rxjs';
export declare class CommonService {
    private static eventEmit
    private static subscribeObject;
    /**
     * 清除事件
     */
    static clearEmmitByKey(key: string): void;
    /**
     * 发生事件
     * @param eventName 事件名称
     * @param param 参数名称
     */
    static event(eventName: string, param: any, token?: string): void;
    /**
     * 订阅事件
     * @param eventName 事件名称
     * @param func 执行回调方法
     */
    static subscribe(eventName: string, func: Function, once?: boolean): any;
    /**
     *
     * 订阅事件，并执行process，之后根据事件提供的token把proeces处理的结构值发送至token事件；
     * @param eventName 事件名称
     * @param process 处理流事件
     */
    static subscribePEventByToken(eventName: string, process: Observable<any>): void;
    /**
     * 订阅事件
     * @param eventName 事件句柄
     * @param processes 执行的流事件集合
     * @param token 响应的事件名称
     */
    static subscribePsEventByToken(eventName: string, processes: Observable<any>[]): void;
    /**
    * 订阅事件
    * @param eventName 事件句柄
    * @param process 执行的事件流
    * @param token 响应的事件名称
    */
    static subscribeToken(eventName: string, process: Observable<any>, token: string): void;
    /**
     * 获取guid，去掉中划线
     */
    static guid(): string;
    private static base64EncodeChars;
    private static base64DecodeChars;
    /**
     * base64编码
     * @param {Object} str
     */
    private static base64encode;
    /**
     * base64解码
     * @param {Object} str
     */
    private static base64decode;
    /**
     * utf16转utf8
     * @param {Object} str
     */
    private static utf16to8;
    /**
    * utf8转utf16
    * @param {Object} str
    */
    private static utf8to16;
    /**
    * 加密
    */
    static enCode64(str: any): any;
    /**
    * base64解密
    */
    static deCode64(str: any): any;
    /**
     * 根据模块及资源获取到url
     * @param moduleId 模块id
     * @param resId 资源id
     */
    static getUrlBy(moduleId: string, resId: string, act: string): string;
    /**
     * 获取随机数
     * @param n 范围内的数值
     */
    static Random(n: any): string;
    /**
     * 获取当前时间戳
     */
    static getMilliseconds(): number;
    /**
     * 获取时间戳
     * @param date 当前时间
     */
    static getMillisecondsFromDate(date: string): number;
    /**
     * 秒数转时间
     * @param seconds 秒数
     */
    static getDateByMilliseconds(seconds: number): Date;
    /**
     * 获取当前时间秒数
     */
    static getTimestamp(): number;
    /**
     * 根据指定日期获取秒数
     * @param date 指定日期
     */
    static getTimestampFromDate(date: string): number;
    /**
     * 秒数转日期
     * @param seconds 秒数
     */
    static getDateByTimetamp(seconds: number): Date;
    /**
     * 获取当前年月
     * @param seg 分隔符 / -
     */
    static getYearMonth(seg?: string): string;
    /**
     * 获取当前年月日
     * @param seg 分隔符
     */
    static getDate(seg?: string): string;
    /**
     * 时间格式化处理
     * @param 格式化字符串
     * @param 格式化日期格式化
     * */
    static dateFormat(date: Date, fmt: string): string;
    /**
     * 时间格式化处理
     * @param 格式化字符串
     * @param 格式化日期格式化
     * */
    static stringDateFormat(dateStr: string, fmt: string): string;
    /**
     * 时间戳格式化处理
     * @param 格式化
     * @param 时间戳
     * */
    static timestampFormat(timestamp: number, fmt: string): string;
    /**
       * 字符串转时间（yyyy-MM-dd HH:mm:ss、yyyy/M/d HH:mm:ss、yyyyMMddHHmmss、yyyyMMddHHmm、yyyyMMdd）
       * result （分钟）
       */
    static stringToDate(fDate: string): Date;
    /**
     * 数值格式化
     * @param num 数值
     * @param format 格式化
     */
    static numberFormat(num: number, format: string): string;
    /****
    * 替换文件
    * text :为源文件
    * rep:需要替换的符号
    * rex:替换后的符号
    * **/
    static textReplaceAll(text: string, regexp: string, replacement: string): string;
    /**
     * md5加密
     * @param string 被md5加密的字符串
     */
    static md5Encode(str: string): string;
    /**
    *
    * @param {当前值} value
    * @param {默认值} defaultValue
    */
    static getVbyNull(value: any, defaultValue: any): any;
    /**
     *
     * @description 数组转树结构
     * @param list 数据列表
     * @param parentValue 上级编码的值
     * @param code 编码
     * @param name 名称
     * @param parent 父级编码字段
     */
    static listtotree(list: any[], parentValue: any, code: string, name: string, parent: string): any[];
    /**
         *
         * @description 数组转树结构
         * @param list 数据列表
         * @param childKey 子模型的key
         * @param code 编码
         * @param name 名称
         * @param parent 父级编码字段
         */
    static listTtree(list: any, childKey: any, code: any, name: any, parent: any): any[];
    /**
     * 把字符串的参数替换成data中有的值参数形式为:{PARAMID:''}
     * @param data 数据对象
     * @param dataStr 字符串
     */
    static getStringFilterByParam(data: any, dataStr: string): string;
    /**
       * 把json格式的字符串的参数替换成data中有的值参数形式为:{PARAMID:''}
       * @param data 数据对象
       * @param dataStr 字符串
       */
    static getJsonStrFilterByParam(data: any, dataStr: any, split?: string): string;
    /**
       *
       * @description 数组转树结构
       * @param id id值
       * @param list 数据列表
       * @param parentValue 上级编码的值
       * @param code 编码
       * @param name 名称
       * @param subtitle 小标题
       * @param parent 父级编码字段
       * @param childFieldCode 是否有子节点的名称
       */
    static listtotreeasync(list: any[], code: string, name: string, parent: string, childFieldCode: string): any[];
    /**
      * 当前值作为observable
      * 适合在有值的适合返回
      * @param {?} 当前值
      * @return {?}
      */
    static createObservable(obj: any): Observable<any>;
    /**
     * 串行执行两个订阅任务
     * @param obs1 Observable
     * @param obs2 Observable
     */
    static createObservableConcat(obs1: Observable<any>, obs2: Observable<any>): ObservableInput<any>;
    /**
       * 并行执行多个订阅任务
       * @param obs1 Observable
       * @param obs2 Observable
       */
    static createObservableJoin(obs1: Observable<any>[]): Observable<any>;
    /**
     * 复制对象
     * @param obj 复制对象
     */
    static cloneObj(obj: any, exceptKey?: string): any;
    /**
     * 复制对象
     * @param obj 复制对象
     */
    static cloneArray(objs: any, exceptKey?: string): any;
}
