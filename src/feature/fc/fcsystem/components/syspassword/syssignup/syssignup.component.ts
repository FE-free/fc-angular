/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 注册
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 10:10:48
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.dev';
@Component({
  selector: 'syssignup',
  templateUrl: './syssignup.component.html',
  styles: [`
  `]
})
export class SyssignupComponent implements OnInit {
  // 注册验证
  validateForm: FormGroup;
  _projectName = environment.projectName;
  constructor(private router: Router, private fb: FormBuilder) {

  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      uname: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }
  getFormControl(name) {
    return this.validateForm.controls[name];
  }
}
