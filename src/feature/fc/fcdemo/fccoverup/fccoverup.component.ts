import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getLodop } from '../../../../assets/plugin/lodop/LodopFuncs.js';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fc-coverup',
  templateUrl: './fccoverup.component.html',
  styles: [``]
})
export class FccoverupComponent {
  LODOP: any;
  CLODOP: any;
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
  Preview1() {
    this.CreateFullBill();
    this.LODOP.PREVIEW();
  }
  Design1() {
    this.CreateFullBill();
    // this.LODOP.SET_SHOW_MODE("HIDE_ITEM_LIST",true);//设置对象列表默认处于关闭状态
    // this.LODOP.SET_SHOW_MODE("TEXT_SHOW_BORDER",1); //设置字符编辑框默认为single
    this.LODOP.PRINT_DESIGN();
  }
  Preview2() {
    this.CreateDataBill();
    this.LODOP.PREVIEW();
  }
  Setup2() {
    this.CreateDataBill();
    this.LODOP.PRINT_SETUP();
  }
  Design2() {
    this.LODOP.PRINT_DESIGN();
  }
  RealPrint() {
    this.CreateDataBill();
    // 云打印C-Lodop返回结果用回调函数:
    if (this.LODOP.CVERSION) {
      this.CLODOP.On_Return = (TaskID, Value) => {
        if (Value) {
          alert('已发出实际打印命令！');
        } else {
          alert('放弃打印！');
        }
      };
      this.LODOP.PRINTA();
      return;
    }
    // 控件返回结果用语句本身：
    if (this.LODOP.PRINTA()) {
      alert('已发出实际打印命令！');
    } else {
      alert('放弃打印！');
    }
  }
  CreateFullBill() {
    this.LODOP = getLodop();
    this.LODOP.PRINT_INITA(
      10,
      10,
      762,
      533,
      '打印控件功能演示_Lodop功能_移动公司发票全样'
    );
    this.LODOP.SET_PRINT_STYLE('FontColor', '#0000FF');
    this.LODOP.ADD_PRINT_SHAPE(2, 116, 43, 655, 373, 0, 1, '#800000');
    this.LODOP.ADD_PRINT_SHAPE(1, 144, 44, 653, 1, 0, 1, '#800000');
    this.LODOP.ADD_PRINT_SHAPE(1, 172, 44, 653, 1, 0, 1, '#800000');
    this.LODOP.ADD_PRINT_SHAPE(0, 116, 143, 1, 56, 0, 1, '#800000');
    this.LODOP.ADD_PRINT_SHAPE(0, 116, 488, 1, 56, 0, 1, '#800000');
    this.LODOP.ADD_PRINT_SHAPE(0, 116, 574, 1, 372, 0, 1, '#800000');
    this.LODOP.ADD_PRINT_SHAPE(0, 172, 166, 1, 282, 0, 1, '#800000');
    this.LODOP.ADD_PRINT_SHAPE(0, 172, 415, 1, 282, 0, 1, '#800000');
    this.LODOP.ADD_PRINT_SHAPE(1, 454, 44, 653, 1, 0, 1, '#800000');
    this.LODOP.ADD_PRINT_SHAPE(0, 454, 130, 1, 34, 0, 1, '#800000');
    this.LODOP.ADD_PRINT_SHAPE(0, 454, 483, 1, 34, 0, 1, '#800000');
    this.LODOP.ADD_PRINT_SHAPE(0, 64, 62, 120, 1, 0, 1, '#0000FF');
    this.LODOP.ADD_PRINT_SHAPE(3, 29, 62, 32, 32, 0, 4, '#0000FF');
    this.LODOP.ADD_PRINT_SHAPE(3, 21, 300, 147, 75, 0, 3, '#FF0000');
    this.LODOP.ADD_PRINT_SHAPE(3, 26, 307, 132, 65, 0, 1, '#FF0000');
    this.LODOP.ADD_PRINT_TEXT(
      33,
      192,
      408,
      30,
      '中国移动通信集团北京有限公司专用发票'
    );
    this.LODOP.SET_PRINT_STYLEA(0, 'FontSize', 15);
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 2);
    this.LODOP.ADD_PRINT_TEXT(68, 326, 100, 25, '发 票 联');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontSize', 11);
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 2);
    this.LODOP.ADD_PRINT_TEXT(29, 98, 84, 35, '中国移动通信CHINA MOBILE');
    this.LODOP.ADD_PRINT_SHAPE(2, 37, 69, 18, 15, 0, 1, '#0000FF');
    this.LODOP.ADD_PRINT_SHAPE(2, 40, 73, 10, 9, 0, 1, '#0000FF');
    this.LODOP.ADD_PRINT_TEXT(70, 64, 117, 20, '移 动 信 息 专 家');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontSize', 8);
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 2);
    this.LODOP.ADD_PRINT_TEXT(124, 58, 68, 20, '客户名称');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 2);
    this.LODOP.ADD_PRINT_TEXT(152, 58, 68, 20, '手机号码');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 2);
    this.LODOP.ADD_PRINT_TEXT(124, 497, 68, 20, '受理类别');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 2);
    this.LODOP.ADD_PRINT_TEXT(152, 497, 68, 20, '合 同 号');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 2);
    this.LODOP.ADD_PRINT_TEXT(465, 54, 68, 20, '大写金额');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 2);
    this.LODOP.ADD_PRINT_TEXT(465, 495, 104, 20, '小写金额    ￥: ');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 3);
    this.LODOP.ADD_PRINT_TEXT(98, 56, 47, 20, '编号：');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 3);
    this.LODOP.ADD_PRINT_TEXT(98, 259, 48, 20, '日期：');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 3);
    this.LODOP.ADD_PRINT_TEXT(97, 500, 71, 20, '发票号码：');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 3);
    this.LODOP.ADD_PRINT_TEXT(496, 54, 83, 20, '话费帐期：');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 3);
    this.LODOP.ADD_PRINT_TEXT(496, 321, 83, 20, '营业员工号：');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 3);
    this.LODOP.ADD_PRINT_TEXT(496, 480, 93, 20, '收款单位名称：');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 3);
    this.LODOP.ADD_PRINT_TEXT(226, 703, 27, 121, '第二联发票联');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 2);
    this.LODOP.ADD_PRINT_TEXT(203, 21, 17, 195, '京地税准印八九号五百万份');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontSize', 8);
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 2);
    this.LODOP.ADD_PRINT_TEXT(126, 150, 100, 20, '郭德强');
    this.LODOP.ADD_PRINT_TEXT(151, 150, 100, 20, '13954885188');
    this.LODOP.ADD_PRINT_TEXT(125, 584, 99, 20, '发票打印(第1次)');
    this.LODOP.ADD_PRINT_TEXT(465, 140, 198, 20, '陆百柒拾捌元叁角零分');
    this.LODOP.ADD_PRINT_TEXT(465, 599, 70, 20, '678.30');
    this.LODOP.ADD_PRINT_TEXT(496, 408, 59, 20, 'H112063');
    this.LODOP.ADD_PRINT_TEXT(191, 58, 100, 20, '国内漫游通话');
    this.LODOP.ADD_PRINT_TEXT(191, 217, 100, 20, '584.00');
    this.LODOP.ADD_PRINT_TEXT(222, 58, 100, 20, '增值业务费');
    this.LODOP.ADD_PRINT_TEXT(222, 217, 100, 20, '48.30');
    this.LODOP.ADD_PRINT_TEXT(251, 58, 100, 20, '代收费');
    this.LODOP.ADD_PRINT_TEXT(251, 217, 100, 20, '50.00');
    this.LODOP.ADD_PRINT_TEXT(280, 58, 100, 20, '优惠费');
    this.LODOP.ADD_PRINT_TEXT(280, 217, 100, 20, '4.00');
    this.LODOP.ADD_PRINT_TEXT(98, 101, 150, 20, '101081005747319387');
    this.LODOP.ADD_PRINT_TEXT(97, 307, 150, 20, '2008年10月19日 10:28:38');
    this.LODOP.ADD_PRINT_TEXT(152, 584, 103, 20, '138860016786');
    this.LODOP.ADD_PRINT_TEXT(95, 571, 112, 20, '06775516');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontName', 'System');
    this.LODOP.ADD_PRINT_TEXT(76, 500, 71, 20, '发票代码：');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#800000');
    this.LODOP.SET_PRINT_STYLEA(0, 'Alignment', 3);
    this.LODOP.ADD_PRINT_TEXT(74, 571, 112, 20, '237090742401');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontName', 'System');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontColor', '#FF0000');
    this.LODOP.ADD_PRINT_TEXT(
      496,
      135,
      183,
      20,
      '2008年09月(20080901-20080930)'
    );
    this.LODOP.ADD_PRINT_TEXT(496, 572, 112, 20, '-王府井中心店营');
    this.LODOP.ADD_PRINT_TEXT(311, 217, 100, 20, '678.30');
    this.LODOP.ADD_PRINT_TEXT(311, 58, 100, 20, '费用合计');
  }
  CreateDataBill() {
    this.LODOP = getLodop();
    // 以下代码可以在打印维护-通过拖拽、输入等自定义布局后-生成程序代码获得
    this.LODOP.PRINT_INITA(
      10,
      10,
      762,
      533,
      '1111测试文件存放位置-打印控件功能演示_Lodop功能_移动公司发票套打'
    );
    this.LODOP.SET_PRINT_STYLE('FontColor', '#0000FF');
    this.LODOP.ADD_PRINT_TEXT(126, 150, 100, 20, '郭德强');
    this.LODOP.ADD_PRINT_TEXT(151, 150, 100, 20, '13954885188');
    this.LODOP.ADD_PRINT_TEXT(125, 584, 99, 20, '发票打印(第1次)');
    this.LODOP.ADD_PRINT_TEXT(465, 140, 198, 20, '陆百柒拾捌元叁角零分');
    this.LODOP.ADD_PRINT_TEXT(465, 599, 70, 20, '678.30');
    this.LODOP.ADD_PRINT_TEXT(496, 408, 59, 20, 'H112063');
    this.LODOP.ADD_PRINT_TEXT(191, 58, 100, 20, '国内漫游通话');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontSize', 7);
    this.LODOP.ADD_PRINT_TEXT(191, 217, 100, 20, '584.00');
    this.LODOP.ADD_PRINT_TEXT(222, 58, 100, 20, '增值业务费');
    this.LODOP.ADD_PRINT_TEXT(222, 217, 100, 20, '48.30');
    this.LODOP.ADD_PRINT_TEXT(251, 58, 100, 20, '代收费');
    this.LODOP.ADD_PRINT_TEXT(251, 217, 100, 20, '50.00');
    this.LODOP.ADD_PRINT_TEXT(280, 58, 100, 20, '优惠费');
    this.LODOP.ADD_PRINT_TEXT(280, 217, 100, 20, '4.00');
    this.LODOP.ADD_PRINT_TEXT(98, 101, 150, 20, '101081005747319387');
    this.LODOP.ADD_PRINT_TEXT(97, 307, 150, 20, '2008年10月19日 10:28:38');
    this.LODOP.ADD_PRINT_TEXT(152, 584, 103, 20, '138860016786');
    this.LODOP.ADD_PRINT_TEXT(95, 571, 112, 20, '06775516');
    this.LODOP.SET_PRINT_STYLEA(0, 'FontName', 'System');
    this.LODOP.ADD_PRINT_TEXT(
      496,
      135,
      183,
      20,
      '2008年09月(20080901-20080930)'
    );
    this.LODOP.ADD_PRINT_TEXT(496, 572, 112, 20, '-王府井中心店营');
    this.LODOP.ADD_PRINT_TEXT(311, 217, 100, 20, '678.30');
    this.LODOP.ADD_PRINT_TEXT(311, 58, 100, 20, '费用合计');
  }
}
