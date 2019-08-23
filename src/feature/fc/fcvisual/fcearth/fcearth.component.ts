/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 首页
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-08-23 17:55:42
 */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { SoftwareRenderer } from 'three/examples/jsm/renderers/SoftwareRenderer';
@Component({
  selector: 'fc-earth',
  templateUrl: './fcearth.component.html',
  styleUrls: ['./fcearth.component.less']
})
export class FcearthComponent implements OnInit, AfterViewInit {
  container: any;
  stats: any;
  camera: any;
  scene: any;
  renderer: any;
  group: any;
  mouseX = 0;
  mouseY = 0;
  windowHalfX = window.innerWidth / 2;
  windowHalfY = (window.innerHeight - 200) / 2;


  constructor(public router: Router, public activedRoute: ActivatedRoute) { }
  /**
   * 初始化指令/组件,在第一轮 ngOnChanges() 完成之后调用，只调用一次
   */
  ngOnInit(): void {
    this.init();
    this.animate();
  }
  /**
   * 每当 Angular 初始化完组件视图及其子视图之后调用。
   */
  ngAfterViewInit(): void {
    this.init();
    this.animate();
  }
  init() {
    this.container = document.getElementById('earth-container');
    console.log(this.container);
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / (window.innerHeight - 200), 1, 2000);
    this.camera.position.z = 500;
    this.scene = new THREE.Scene();
    this.group = new THREE.Group();
    this.scene.add(this.group);
    // earth
    let loader = new THREE.TextureLoader();
    loader.load('../../../../assets/image/earth.jpg', (texture) => {
      let geometry = new THREE.SphereBufferGeometry(200, 20, 20);
      let material = new THREE.MeshLambertMaterial({ map: texture });
      let mesh = new THREE.Mesh(geometry, material);
      this.group.add(mesh);
    });
    // shadow
    let canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    let context = canvas.getContext('2d');
    let gradient = context.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2
    );
    gradient.addColorStop(0.1, 'rgba(210,210,210,1)');
    gradient.addColorStop(1, 'rgba(255,255,255,1)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    let texture = new THREE.CanvasTexture(canvas);
    let geometry = new THREE.PlaneBufferGeometry(300, 300, 3, 3);
    let material = new THREE.MeshBasicMaterial({ map: texture });
    let mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = - 250;
    mesh.rotation.x = - Math.PI / 2;
    this.group.add(mesh);
    this.renderer = new SoftwareRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
    this.stats = new Stats();
    this.container.appendChild(this.stats.dom);
    document.addEventListener('mousemove', this.onDocumentMouseMove, false);
    //
    window.addEventListener('resize', () => this.onWindowResize(this.camera), false);
  }
  onWindowResize(camera) {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    console.dir(camera, 'camera')
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  onDocumentMouseMove(event) {
    this.mouseX = (event.clientX - this.windowHalfX);
    this.mouseY = (event.clientY - this.windowHalfY);
  }
  //
  animate() {
    requestAnimationFrame(() => this.animate);
    this.render();
    this.stats.update();
  }
  render() {
    this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
    this.camera.position.y += (-  this.mouseY - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);
    this.group.rotation.y -= 0.005;
    this.renderer.render(this.scene, this.camera);
  }
}
