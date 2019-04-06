import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ProvidersService } from 'fccore2'
import { environment } from 'src/environments/environment.dev'
import { Observable } from 'rxjs'

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.less']
})
export class SigninComponent implements OnInit {
  hasError: boolean = false
  msg: string = ''
  userId: string = ''
  password: string = ''
  _projectName = environment.projectName
  constructor(private router: Router) {}
  ngOnInit() {
    if (this.loginValid(this.userId, this.password)) {
      this.router.navigate(['/budget/home'])
      // this.router.navigate(['/' + environment.pid.toLocaleLowerCase() + '/home'])
    }
  }
  /**
   * 根据用户密码登录，并存储当前用户的相关信息
   */
  login() {
    if (this.loginValid(this.userId, this.password)) {
      this.router.navigate(['/budget/home'])
    } else {
      this.hasError = true
    }
  }

  loginValid(userId, password): boolean {
    if (userId === 'admin' && password === 'admin') {
      return true
    } else {
      return false
    }
  }
}
