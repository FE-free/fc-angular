/*
 * @Author: honghong
 * @Date: 2019-10-12 09:28:32
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-12 14:27:29
 * @Description:
 * @email: 3300536651@qq.com
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as AllIcons from '@ant-design/icons-angular/icons';
import Clipboard from 'clipboard';
import { NzMessageService } from 'ng-zorro-antd';
const antDesignIcons = AllIcons;
let FciconComponent = class FciconComponent {
    constructor(router, activedRoute, message) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.message = message;
    }
    ngOnInit() {
        this.icons = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);
        console.log(this.icons);
        this.aliIcons = [{
                name: 'fc-icon-bianxie',
                icon: 'fc-icon-bianxie'
            }, {
                name: 'fc-icon-tuichu',
                icon: 'fc-icon-tuichu'
            }, {
                name: 'fc-icon-password',
                icon: 'fc-icon-password'
            }, {
                name: 'fc-icon-remove',
                icon: 'fc-icon-remove'
            }, {
                name: 'fc-icon-information',
                icon: 'fc-icon-information'
            }, {
                name: 'fc-icon-jinggao',
                icon: 'fc-icon-jinggao'
            }, {
                name: 'fc-icon-dui',
                icon: 'fc-icon-dui'
            }, {
                name: 'fc-icon-iframe',
                icon: 'fc-icon-iframe'
            }, {
                name: 'fc-icon-more',
                icon: 'fc-icon-more'
            }, {
                name: 'fc-icon-search',
                icon: 'fc-icon-search'
            }, {
                name: 'fc-icon-jichushezhi',
                icon: 'fc-icon-jichushezhi'
            }, {
                name: 'fc-icon-xiazai',
                icon: 'fc-icon-xiazai'
            }, {
                name: 'fc-icon-jia',
                icon: 'fc-icon-jia'
            }, {
                name: 'fc-icon-jian',
                icon: 'fc-icon-jian'
            }, {
                name: 'fc-icon-wode',
                icon: 'fc-icon-wode'
            }, {
                name: 'fc-icon-gaotie',
                icon: 'fc-icon-gaotie'
            }, {
                name: 'fc-icon-forms',
                icon: 'fc-icon-forms'
            }, {
                name: 'fc-icon-face',
                icon: 'fc-icon-face'
            }, {
                name: 'fc-icon-ecommerce',
                icon: 'fc-icon-ecommerce'
            }, {
                name: 'fc-icon-fullscreen',
                icon: 'fc-icon-fullscreen'
            }, {
                name: 'fc-icon-bardata',
                icon: 'fc-icon-bardata'
            }, {
                name: 'fc-icon-shouye',
                icon: 'fc-icon-shouye'
            }, {
                name: 'fc-icon-zuo',
                icon: 'fc-icon-zuo'
            }, {
                name: 'fc-icon-wenjianjia',
                icon: 'fc-icon-wenjianjia'
            }, {
                name: 'fc-icon-xia',
                icon: 'fc-icon-xia'
            }, {
                name: 'fc-icon-you',
                icon: 'fc-icon-you'
            }, {
                name: 'fc-icon-Workorder',
                icon: 'fc-icon-Workorder'
            }, {
                name: 'fc-icon-tuozhuai',
                icon: 'fc-icon-tuozhuai'
            }, {
                name: 'fc-icon-personnel',
                icon: 'fc-icon-personnel'
            }, {
                name: 'fc-icon-peizhi',
                icon: 'fc-icon-peizhi'
            }, {
                name: 'fc-icon-beijian',
                icon: 'fc-icon-beijian'
            }, {
                name: 'fc-icon-moban',
                icon: 'fc-icon-moban'
            }, {
                name: 'fc-icon-uploadview',
                icon: 'fc-icon-uploadview'
            }, {
                name: 'fc-icon-tuozhuai1',
                icon: 'fc-icon-tuozhuai1'
            }, {
                name: 'fc-icon-UI',
                icon: 'fc-icon-UI'
            }, {
                name: 'fc-icon-phone',
                icon: 'fc-icon-phone'
            }, {
                name: 'fc-icon-xiangzuo',
                icon: 'fc-icon-xiangzuo'
            }, {
                name: 'fc-icon-navigation',
                icon: 'fc-icon-navigation'
            }, {
                name: 'fc-icon-dingwei',
                icon: 'fc-icon-dingwei'
            }, {
                name: 'fc-icon-riqi',
                icon: 'fc-icon-riqi'
            }, {
                name: 'fc-icon-A',
                icon: 'fc-icon-A'
            }, {
                name: 'fc-icon-yewu',
                icon: 'fc-icon-yewu'
            }, {
                name: 'fc-icon-angular',
                icon: 'fc-icon-angular'
            }, {
                name: 'fc-icon-code',
                icon: 'fc-icon-code'
            }, {
                name: 'fc-icon-angular1',
                icon: 'fc-icon-angular1'
            }, {
                name: 'fc-icon-tianqi',
                icon: 'fc-icon-tianqi'
            }, {
                name: 'fc-icon-fangke',
                icon: 'fc-icon-fangke'
            }, {
                name: 'fc-icon-yanse',
                icon: 'fc-icon-yanse'
            }, {
                name: 'fc-icon-qiapian',
                icon: 'fc-icon-qiapian'
            }, {
                name: 'fc-icon-bookmark',
                icon: 'fc-icon-bookmark'
            }, {
                name: 'fc-icon-shouqi',
                icon: 'fc-icon-shouqi'
            }, {
                name: 'fc-icon-tielu',
                icon: 'fc-icon-tielu'
            }, {
                name: 'fc-icon-fasong',
                icon: 'fc-icon-fasong'
            }, {
                name: 'fc-icon-up',
                icon: 'fc-icon-up'
            }, {
                name: 'fc-icon-xiugaimima',
                icon: 'fc-icon-xiugaimima'
            }, {
                name: 'fc-icon-lajixiang',
                icon: 'fc-icon-lajixiang'
            }, {
                name: 'fc-icon-xinzeng',
                icon: 'fc-icon-xinzeng'
            }, {
                name: 'fc-icon-datatable',
                icon: 'fc-icon-datatable'
            }, {
                name: 'fc-icon-lianggeren',
                icon: 'fc-icon-lianggeren'
            }, {
                name: 'fc-icon-dengdai',
                icon: 'fc-icon-dengdai'
            }, {
                name: 'fc-icon-daochu',
                icon: 'fc-icon-daochu'
            }, {
                name: 'fc-icon-antdesign',
                icon: 'fc-icon-antdesign'
            }, {
                name: 'fc-icon-gengduo',
                icon: 'fc-icon-gengduo'
            }, {
                name: 'fc-icon-rili',
                icon: 'fc-icon-rili'
            }, {
                name: 'fc-icon-gengduo1',
                icon: 'fc-icon-gengduo1'
            }, {
                name: 'fc-icon-xinzeng1',
                icon: 'fc-icon-xinzeng1'
            }, {
                name: 'fc-icon-zan2',
                icon: 'fc-icon-zan2'
            }, {
                name: 'fc-icon-arrowleft',
                icon: 'fc-icon-arrowleft'
            }, {
                name: 'fc-icon-excel',
                icon: 'fc-icon-excel'
            }, {
                name: 'fc-icon-template',
                icon: 'fc-icon-template'
            }, {
                name: 'fc-icon-fenxiang',
                icon: 'fc-icon-fenxiang'
            }, {
                name: 'fc-icon-tupian',
                icon: 'fc-icon-tupian'
            }, {
                name: 'fc-icon-jiancircle',
                icon: 'fc-icon-jiancircle'
            }, {
                name: 'fc-icon-wechart',
                icon: 'fc-icon-wechart'
            }, {
                name: 'fc-icon-callphone',
                icon: 'fc-icon-callphone'
            }, {
                name: 'fc-icon-github',
                icon: 'fc-icon-github'
            }, {
                name: 'fc-icon-tubiao',
                icon: 'fc-icon-tubiao'
            }, {
                name: 'fc-icon-yibiaopan',
                icon: 'fc-icon-yibiaopan'
            }, {
                name: 'fc-icon-zuo1',
                icon: 'fc-icon-zuo1'
            }, {
                name: 'fc-icon-you1',
                icon: 'fc-icon-you1'
            }, {
                name: 'fc-icon-shujubiaoge',
                icon: 'fc-icon-shujubiaoge'
            }, {
                name: 'fc-icon-shangchuan',
                icon: 'fc-icon-shangchuan'
            }, {
                name: 'fc-icon-guanbi',
                icon: 'fc-icon-guanbi'
            }, {
                name: 'fc-icon-daoru',
                icon: 'fc-icon-daoru'
            }, {
                name: 'fc-icon-guanbicircle',
                icon: 'fc-icon-guanbicircle'
            }, {
                name: 'fc-icon-shoucang-active',
                icon: 'fc-icon-shoucang-active'
            }, {
                name: 'fc-icon-warning',
                icon: 'fc-icon-warning'
            }, {
                name: 'fc-icon-localoffer',
                icon: 'fc-icon-localoffer'
            }, {
                name: 'fc-icon-jiacircle',
                icon: 'fc-icon-jiacircle'
            }, {
                name: 'fc-icon-fujian',
                icon: 'fc-icon-fujian'
            }, {
                name: 'fc-icon-bangzhu',
                icon: 'fc-icon-bangzhu'
            }, {
                name: 'fc-icon-email',
                icon: 'fc-icon-email'
            }, {
                name: 'fc-icon-pages',
                icon: 'fc-icon-pages'
            }, {
                name: 'fc-icon-menufold-left',
                icon: 'fc-icon-menufold-left'
            }, {
                name: 'fc-icon-menufold-right',
                icon: 'fc-icon-menufold-right'
            }, {
                name: 'fc-icon-clear',
                icon: 'fc-icon-clear'
            }, {
                name: 'fc-icon-tianqi1',
                icon: 'fc-icon-tianqi1'
            }, {
                name: 'fc-icon-icon',
                icon: 'fc-icon-icon'
            }, {
                name: 'fc-icon-threejs',
                icon: 'fc-icon-threejs'
            }, {
                name: 'fc-icon-xiaoxi',
                icon: 'fc-icon-xiaoxi'
            }];
    }
    getIconCode(icon) {
        return `<i  nz-icon nzType='${icon.name}' nzTheme='${icon.theme}'></i>`;
    }
    /**
     * 复制图标
     * @param icon
     */
    copyed(text, event) {
        let arg = event.target;
        const clipboard = new Clipboard(arg, {
            text: () => text
        });
        clipboard.on('success', () => {
            // clipboardSuccess()
            this.message.create('success', `复制成功！`);
            clipboard.destroy();
        });
        clipboard.on('error', () => {
            this.message.create('error', `复制失败！`);
            clipboard.destroy();
        });
        clipboard.onClick(event);
    }
};
FciconComponent = tslib_1.__decorate([
    Component({
        selector: 'fc-icon',
        templateUrl: './fcicon.component.html',
        styles: [
            `
    .fc-icon-show  {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .fc-icon-item {
      width: 150px;
      height: 100px;
      transition: all .3s ease-in-out;
      border-radius: 3px;
      margin: 3px 0; 
      list-style: none;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
    .fc-icon-item:hover {
      background-color: #40a9ff;
      color: #fff;
    }
    .fc-icon-item:hover .anticon {
      transform: scale(1.2);
    }
    .fc-icon-item .anticon {

    }
    .fc-icon-item .fc-icon-text {
      display: block;
      font-size: 12px;
      transform: scale(0.8);
      margin-top: 15px;
    }
    
    `
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute,
        NzMessageService])
], FciconComponent);
export { FciconComponent };
//# sourceMappingURL=fcicon.component.js.map