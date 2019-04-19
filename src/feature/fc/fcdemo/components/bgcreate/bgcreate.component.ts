/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 新增
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:26:33
 */
import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors } from '@angular/forms'

import { Observable, Observer } from 'rxjs'
@Component({
  selector: 'bgcreate',
  templateUrl: './bgcreate.component.html',
  styles: [``]
})
export class BgcreateComponent {
  validateForm: FormGroup
  constructor(public router: Router, public activedRoute: ActivatedRoute, private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      comment: ['', [Validators.required]]
    })
  }
  submitForm = ($event: any, value: any) => {
    $event.preventDefault()
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty()
      this.validateForm.controls[key].updateValueAndValidity()
    }
    console.log(value)
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault()
    this.validateForm.reset()
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine()
      this.validateForm.controls[key].updateValueAndValidity()
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity())
  }

  userNameAsyncValidator = (control: FormControl) =>
    Observable.create((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({ error: true, duplicated: true })
        } else {
          observer.next(null)
        }
        observer.complete()
      }, 1000)
    })

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true }
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true }
    }
    return {}
  }
}
