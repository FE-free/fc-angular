/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 图片查看
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-06-19 16:30:58
 */
import { Component, ElementRef, Input, OnChanges, Renderer2, ViewChild } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'fc-imgview',
  templateUrl: './fcimgview.component.html',
  styleUrls: ['./fcimgview.component.less']
})
export class FcimgviewComponent implements OnChanges {
  // 图片的路径
  @Input()
  imgSrc = 'assets/image/noimg.jpeg'
  // 获取图片的宽
  width: string
  // 获取图片的高
  height: string
  // 获取图片的相对定位top
  top: string
  // 获取图片的相对定位left
  left: string
  @ViewChild('imgDetail',{static: false}) imgDetailRef: ElementRef
  imgviewSelector: any
  styleJsonStr: any
  hidden:boolean = false;
  // 缓存坐标点
  x1: any
  x2: any
  y1: any
  y2: any
  constructor(private el: ElementRef, private renderer: Renderer2,private eventManager:EventManager) { }
  ngOnInit(): void {
    this.eventManager.addGlobalEventListener('window','keyup.esc',()=>{
      this.styleJsonStr={
      }
      this.hidden = false;
    });
  }
  ngOnChanges(): void {
    if (this.imgSrc === undefined || this.imgSrc === null || this.imgSrc === '') {
      this.imgSrc = 'assets/img/imgview1.jpg'
      this.renderer.setStyle(this.imgDetailRef.nativeElement, 'height', `100%`)
    }
  }
  /**
   * 放大
   */
  enlarge(event: any) {
    // 获取图片的宽
    this.width = this.imgDetailRef.nativeElement.offsetWidth + 300 + ''
    // 获取图片的高
    this.height = this.imgDetailRef.nativeElement.offsetHeight + 300 + ''
    this.renderer.setStyle(this.imgDetailRef.nativeElement, 'width', `${this.width}px`)
    this.renderer.setStyle(this.imgDetailRef.nativeElement, 'height', `auto`)
  }
  /**
   * 缩小
   */
  narrow(event: any) {
    // 获取图片的宽
    this.width = this.imgDetailRef.nativeElement.offsetWidth - 100 + ''
    // 获取图片的高
    this.height = this.imgDetailRef.nativeElement.offsetHeight - 100 + ''
    this.renderer.setStyle(this.imgDetailRef.nativeElement, 'width', `${this.width}px`)
    this.renderer.setStyle(this.imgDetailRef.nativeElement, 'height', `auto`)
  }
  qp(event: any) {
    // 获取图片的宽
    this.hidden = true;
    this.styleJsonStr={
      color:'#FBFBFF',
      position:'fixed',
      width:'100%',
      height:'100%',
      left:0,
      top:0,
      margin: '10px auto',
      flex: 1
    }
  }
  /**
   * 旋转
   */
  rotate(event: any) { }
  /**
   * 向左移动
   */
  moveLeft(event: any) { }
  /**
   * 向右移动
   */
  moveRight(event: any) { }
  /**
   * 恢复
   */
  recovery(event: any) {
    this.renderer.setStyle(this.imgDetailRef.nativeElement, 'width', `100%`)
    this.renderer.setStyle(this.imgDetailRef.nativeElement, 'height', `100%`)
    this.renderer.setStyle(this.imgDetailRef.nativeElement, 'marginLeft', `0`)
    this.renderer.setStyle(this.imgDetailRef.nativeElement, 'marginTop', `0`)
  }
  /**
   * 用户开始拖动元素时触发
   * @param event
   */
  dargStart(event: any) {
    // this.x1 = event.clientX
    // this.y1 = event.clientY
    console.log('dragStart===>')
  }

  /**
   * 元素正在拖动时触发
   * @param $event
   */
  drag(event) {
    // this.x2 = event.clientX
    // this.y2 = event.clientY
    // var direction = this.direction(this.x1, this.y1, this.x2, this.y2)
    // console.log('drag拖拽过程中')
    // if (direction.directionX === 'left') {
    //   this.renderer.setStyle(this.imgDetailRef.nativeElement, 'marginLeft', `-${direction.spacingX}px`)
    // }
    // if (direction.directionX === 'right') {
    //   this.renderer.setStyle(this.imgDetailRef.nativeElement, 'marginLeft', `${direction.spacingX}px`)
    // }
    // if (direction.directionX === 'top') {
    //   this.renderer.setStyle(this.imgDetailRef.nativeElement, 'marginTop', `-${direction.spacingX}px`)
    // }
    // if (direction.directionX === 'bottom') {
    //   this.renderer.setStyle(this.imgDetailRef.nativeElement, 'marginTop', `${direction.spacingX}px`)
    // }
    // // 移动图片距离后重置x1,y1  坐标
    // this.x1 = event.clientX
    // this.y1 = event.clientY
  }
  /**
   * 用户完成元素拖动后触发
   * @param $event
   */
  dragEnd(event) {
    // this.x2 = event.clientX
    // this.y2 = event.clientY
    // this.direction(this.x1, this.y1, this.x2, this.y2)
    // console.log('dragEnd====>')
  }
  /**
   * 如何判断用户是想往左还是往右拖拽或者是滚动，用户在开始拖拽时缓存坐标点x1,y1，在拖拽过程中实时获取鼠标拖拽处的x2,y2坐标点，
   * @param x1 开始拖拽时的横坐标
   * @param y1 开始拖拽时的纵坐标
   * @param x2 拖拽过程中的横坐标
   * @param y2
   */
  direction(x1, y1, x2, y2) {
    let directionObj = {
      directionX: '',
      directionY: '',
      spacingX: 0,
      spacingY: 0
    }
    // 判断左右方向
    directionObj.directionX = x2 - x1 < 0 ? 'left' : 'right'
    // 判断上下方向
    directionObj.directionY = y2 - y1 > 0 ? 'bottom' : 'top'
    // 计算横向移动距离
    directionObj.spacingX = Math.abs(x1 - x2)
    // 计算纵向移动距离
    directionObj.spacingX = Math.abs(y1 - y2)
    return directionObj
  }
}
