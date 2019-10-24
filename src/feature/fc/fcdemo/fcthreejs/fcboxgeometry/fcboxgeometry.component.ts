import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as THREE from 'three';
@Component({
  selector: 'fc-boxgeometry',
  templateUrl: './fcboxgeometry.component.html',
  styles: [
    `
     .fc-boxgeometry {
       width: 100%;
       height: 100%;
       padding: 20px;
       overflow: auto;
     }
     .fc-boxgeometry #box {
       width: 500px;
       height: 500px;
     }
    `
  ]
})
export class FcboxgeometryComponent implements AfterViewInit {

  @ViewChild('boxGeometry', { static: true }) boxGeometry: ElementRef; // 对视图中某个原生元素的包装器
  // 场景
  scene;
  // 渲染器对象
  renderer;
  // 相机
  camera;
  // 材质
  mesh;
  constructor(public router: Router, public activedRoute: ActivatedRoute,
    public renderer2: Renderer2) { }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.createBoxGeometry();
  }
  /**
   * 创建一个立方体
   */
  createBoxGeometry() {
    let element = this.boxGeometry.nativeElement;
    /**
     * 创建场景对象Scene
     */
    this.scene = new THREE.Scene();
    /**
     * 创建网格模型
     */
    let geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    let material = new THREE.MeshLambertMaterial({
      color: 0x0000ff
    }); //材质对象Material
    this.mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    this.scene.add(this.mesh); //网格模型添加到场景中
    /**
     * 光源设置
     */
    //点光源
    let point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); //点光源位置
    this.scene.add(point); //点光源添加到场景中
    //环境光
    let ambient = new THREE.AmbientLight(0x444444);
    this.scene.add(ambient);
    /**
     * 相机设置
     */
    let width = element.clientWidth; //窗口宽度
    let height = element.clientHeight; //窗口高度
    let k = width / height; //窗口宽高比
    let s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    this.camera.position.set(200, 300, 200); //设置相机位置
    this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);//设置渲染区域尺寸
    this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    // this.renderer2.appendChild(this.renderer.domElement, this.boxGeometry.nativeElement); //body元素中插入canvas对象
    element.appendChild(this.renderer.domElement); //body元素中插入canvas对象
    this.render();
  }
  // 渲染函数
  render() {
    if (this.renderer) {
      this.renderer.render(this.scene, this.camera);//执行渲染操作
      this.mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
      requestAnimationFrame(() => this.render());
      //请求再次执行渲染函数render，渲染下一帧
    }
  }
}
