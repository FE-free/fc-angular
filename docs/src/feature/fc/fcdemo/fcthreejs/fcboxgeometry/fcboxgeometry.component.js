import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as THREE from 'three';
import '../enableThree';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import 'three/examples/js/loaders/ColladaLoader';
import { LogService } from 'src/fccore/service/log.service';
let FcboxgeometryComponent = class FcboxgeometryComponent {
    constructor(router, activedRoute, renderer2) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.renderer2 = renderer2;
        // 上次时间
        this.T0 = new Date();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.createBoxGeometry();
    }
    ngOnDestroy() {
        if (this.renderId) {
            cancelAnimationFrame(this.renderId);
        }
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
        this.renderer.setSize(width, height); //设置渲染区域尺寸
        this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
        // this.renderer2.appendChild(this.renderer.domElement, this.boxGeometry.nativeElement); //body元素中插入canvas对象
        element.appendChild(this.renderer.domElement); //body元素中插入canvas对象
        this.render();
        // 创建控件对象 相机对象 camera 作为参数, 控件可以监听鼠标的变化, 改变相机对象的属性
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        // 监听鼠标事件, 触发渲染函数, 更新 canvas 画布渲染效果
        this.controls.addEventListener('change', this.render);
    }
    // 渲染函数
    render() {
        let T1 = new Date(); // 本次时间
        let TDiff = T1 - this.T0; // 时间差
        LogService.debug(TDiff, 'requestAnimationFrame两帧时间间隔');
        this.T0 = T1; // 把本次时间赋值给上次的时间
        if (this.renderer) {
            this.renderer.render(this.scene, this.camera); //执行渲染操作
            this.mesh.rotateY(0.01); //每次绕y轴旋转0.01弧度
            this.renderId = requestAnimationFrame(() => this.render());
            //请求再次执行渲染函数render，渲染下一帧
        }
    }
};
tslib_1.__decorate([
    ViewChild('boxGeometry', { static: true }),
    tslib_1.__metadata("design:type", ElementRef)
], FcboxgeometryComponent.prototype, "boxGeometry", void 0);
FcboxgeometryComponent = tslib_1.__decorate([
    Component({
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
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        ActivatedRoute,
        Renderer2])
], FcboxgeometryComponent);
export { FcboxgeometryComponent };
//# sourceMappingURL=fcboxgeometry.component.js.map