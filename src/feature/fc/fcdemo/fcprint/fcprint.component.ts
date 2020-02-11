import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getLodop } from '../../../../assets/plugin/lodop/LodopFuncs.js';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fc-print',
  templateUrl: './fcprint.component.html',
  styles: [``]
})
export class FcprintComponent {
  LODOP: any;
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
  CreateOneFormPage() {
    this.LODOP = getLodop();
    this.LODOP.PRINT_INIT('打印控件功能演示_Lodop功能_表单一');
    this.LODOP.SET_PRINT_STYLE('FontSize',18);
    this.LODOP.SET_PRINT_STYLE('Bold',1);
    this.LODOP.ADD_PRINT_TEXT(50,231,260,39, '打印页面部分内容');
    this.LODOP.ADD_PRINT_HTM(88,200,350,600, document.getElementById('form1').innerHTML);
  }
  /**
   * 打印预览
   */
  printPreview() {
    this.CreateOneFormPage();
    this.LODOP.PREVIEW();
  }
  /**
   * 直接打印
   */
  directPrint() {
    this.CreateOneFormPage();
    this.LODOP.PRINT();
  }
  /**
   * 选择打印机
   */
  printerSelect() {
    this.CreateOneFormPage();
    this.LODOP.PRINTA();
  }
  CreateTwoFormPage() {
    this.LODOP=getLodop();
    this.LODOP.PRINT_INIT('打印控件功能演示_Lodop功能_表单二');
    this.LODOP.ADD_PRINT_RECT(70,27,634,242,0,1);
    this.LODOP.ADD_PRINT_TEXT(29,236,279,38,'页面内容改变布局打印');
    this.LODOP.SET_PRINT_STYLEA(2,'FontSize',18);
    this.LODOP.SET_PRINT_STYLEA(2,'Bold',1);
    this.LODOP.ADD_PRINT_HTM(88,40,321,185,document.getElementById('form1').innerHTML);
    this.LODOP.ADD_PRINT_HTM(87,355,285,187,document.getElementById('form2').innerHTML);
    this.LODOP.ADD_PRINT_TEXT(319,58,500,30,'注：其中《表单一》按显示大小，《表单二》在程序控制宽度(285px)内自适应调整');
  }
  /**
   * 《表单一》和《表单二》一起并列输出
   */
  prn2_preview() {
    this.CreateTwoFormPage();
    this.LODOP.PREVIEW();
  }
  /**
   * 打印维护
   */
  prn2_manage() {
    this.CreateTwoFormPage();
    this.LODOP.PRINT_SETUP();
  }
  /**
   * 打印整个页面 打印预览
   */
  prn3_preview() {
    this.LODOP=getLodop();
    this.LODOP.PRINT_INIT('打印控件功能演示_Lodop功能_全页');
    this.LODOP.ADD_PRINT_HTM(0,0,'100%','100%',document.documentElement.innerHTML);
    this.LODOP.PREVIEW();
  }
}
