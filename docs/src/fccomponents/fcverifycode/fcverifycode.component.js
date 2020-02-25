import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
/*
 * @Author: honghong
 * @Date: 2019-10-17 09:43:45
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-18 14:10:50
 * @Description:
 * @email: 3300536651@qq.com
 */
let Fcverifycode = class Fcverifycode {
    /*
     * @Author: honghong
     * @Date: 2019-10-17 09:43:45
     * @LastEditors: honghong
     * @LastEditTime: 2019-10-18 14:10:50
     * @Description:
     * @email: 3300536651@qq.com
     */
    constructor() {
        // 显示错误
        this.fcShowError = 'Y';
    }
    Constructor() {
    }
    ngOnInit() {
        this.draw([]);
        console.log(this.validVerifyCode);
    }
    //生成并渲染出验证码图形
    draw(show_num) {
        let elem = this.canvasRef.nativeElement;
        console.dir(elem);
        // let canvas_width = elem.offsetWidth;
        // let canvas_height = elem.offsetHeight;
        let canvas_width = 100;
        let canvas_height = 30;
        let canvas = elem; //获取到canvas的对象，演员
        let context = canvas.getContext("2d"); //获取到canvas画图的环境，演员表演的舞台
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        let sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
        let aCode = sCode.split(",");
        let aLength = aCode.length; //获取到数组的长度
        for (let i = 0; i < 4; i++) { //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
            let j = Math.floor(Math.random() * aLength); //获取到随机的索引值
            // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
            let deg = Math.random() - 0.5; //产生一个随机弧度
            let txt = aCode[j]; //得到随机的一个内容
            show_num[i] = txt.toLowerCase();
            let x = 10 + i * 20; //文字在canvas上的x坐标
            let y = 20 + Math.random() * 8; //文字在canvas上的y坐标
            context.font = "bold 23px 微软雅黑";
            context.translate(x, y);
            context.rotate(deg);
            context.fillStyle = this.randomColor();
            context.fillText(txt, 0, 0);
            context.rotate(-deg);
            context.translate(-x, -y);
        }
        for (let i = 0; i <= 5; i++) { //验证码上显示线条
            context.strokeStyle = this.randomColor();
            context.beginPath();
            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.stroke();
        }
        for (let i = 0; i <= 30; i++) { //验证码上显示小点
            context.strokeStyle = this.randomColor();
            context.beginPath();
            let x = Math.random() * canvas_width;
            let y = Math.random() * canvas_height;
            context.moveTo(x, y);
            context.lineTo(x + 1, y + 1);
            context.stroke();
        }
        this.validVerifyCode = show_num.join('');
    }
    //得到随机的颜色值
    randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    /**
     * 监测输入值是否正确
     */
    changeValue(event) {
        if (event.toLowerCase() === this.validVerifyCode.toLowerCase()) {
            this.fcShowError = 'N';
        }
    }
};
tslib_1.__decorate([
    ViewChild('verifyCode', { static: true }),
    tslib_1.__metadata("design:type", ElementRef)
], Fcverifycode.prototype, "canvasRef", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], Fcverifycode.prototype, "fcCode", void 0);
Fcverifycode = tslib_1.__decorate([
    Component({
        selector: 'fc-verifycode',
        templateUrl: './fcverifycode.component.html',
        styles: [
            `
        .fc-verifycode {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            position: relative;
        }
        .fc-verifycode input {
            width: calc(100% - 110px);
        }
        .fc-verifycode canvas{
            border: 1px solid #d9d9d9;
            border-radius: 4px;
            cursor: pointer;
        }
        .fc-verifycode  .fc-form-error {
            position: absolute;
            left: 0;
            top: 32px;
            font-size: 12px;
            color: #f5222d;
        }
        .fc-verifycode  .fc-form-error input{
            background-color: #fff;
            border-color: #f5222d;
        }
        `
        ]
    })
], Fcverifycode);
export { Fcverifycode };
//# sourceMappingURL=fcverifycode.component.js.map