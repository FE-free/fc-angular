import { CommonService } from 'src/fccore/common/common';
/*
 * @Author: honghong
 * @LastEditors  : Please set LastEditors
 * @Description: 登录
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime : 2020-03-02 16:06:18
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.dev';
import { Fcverifycode } from 'src/fccomponents/fcverifycode/fcverifycode.component';
import { CacheService } from 'src/fccore/common/cache';
import { LoginValidationRule } from '../../../business/sysuser.business';
import { UserService } from 'src/fccore/service/user.service';
const PROJECT_NAME = environment.projectName;

@Component({
  selector: 'sys-signin',
  templateUrl: './syssignin.component.html',
  styleUrls: ['./syssignin.less']
})
export class SyssigninComponent implements OnInit {
  hasError = false;
  msg = '用户名或者密码错误';
  userId = '';
  password = '';
  // 显示错误
  showError = 'N';
  fcSuccess: string;
  // 是否记住密码
  remember: false;
  // 验证码
  @ViewChild('verifyCode', { static: true }) verifyCode: Fcverifycode;
  constructor(private router: Router, private userService: UserService) { }
  ngOnInit(): void {
    this.userId = CommonService.getCookie('userName') ? CommonService.getCookie('userName') : '';
  }
  /**
   * 根据用户密码登录，并存储当前用户的相关信息
   */
  // login(): void {
  //   if (this.verifyCode.fcShowError === 'N') {
  //     if (this.loginValid(this.userId, this.password)) {
  //       this.hasError = false;
  //       CacheService.setS('userinfo', { USERCODE: 'admin' });
  //       CacheService.setS('token', 'ab2be4ef08c0418bab13a6a88c9772e7');
  //       this.router.navigate([`/ + ${environment.pid.toLocaleLowerCase()} + /home`]);
  //     } else {
  //       this.hasError = true;
  //     }
  //   }
  // }

  login(): void {
    if (this.verifyCode.fcShowError === 'N') {
      if (this.loginValid(this.userId, this.password)) {
        this.hasError = false;
        CacheService.setS('userinfo', { USERCODE: 'admin' });
        CacheService.setS('token', 'ab2be4ef08c0418bab13a6a88c9772e7');
        if (this.remember) {
          CommonService.addCookie('userName', 'admin', 0);
        } else {
          CommonService.removeCookie('userName');
        }
        console.log(`/ + ${environment.pid.toLocaleLowerCase()} + /home`);
        this.router.navigate([`/${environment.pid.toLocaleLowerCase()}/home`]);
      } else {
        this.hasError = true;
      }
    }
  }
  /**
   * 登录验证
   */
  loginValid(userId: string, password: string): boolean {
    // 此次登录时间和上次登录时间比较
    let diffMinutesTime: number;
    let validationRule: LoginValidationRule;
    let loginValidationRuleObj;
    const nowTime = CommonService.timestampFormat(CommonService.getTimestamp(), 'yyyy-MM-dd hh:mm:ss');
    if (CommonService.getCookie('LoginValidationRule')) {
      loginValidationRuleObj = JSON.parse(CommonService.getCookie('LoginValidationRule'));
    }
    // 是否有 key 为 LoginValidationRule 的 cookie
    if (loginValidationRuleObj !== undefined
      && loginValidationRuleObj !== null
      && loginValidationRuleObj !== '') {
      // 有 cookie，上次时间和这次时间相比较
      if (loginValidationRuleObj.Locked) { // 锁定
        diffMinutesTime = nowTime - loginValidationRuleObj.LockedTime;
        console.log(diffMinutesTime);
        // 小于15分钟, 错误次数过多，请N分钟后重试
        if (diffMinutesTime < 15) {
          this.msg = `错误次数过多，请${15 - diffMinutesTime}分钟后重试`;
          return false;
        } else {
          // 小于15分钟，设置初始值，验证用户名和密码
          this.userService.login(this.userId, this.password, nowTime).subscribe((res) => {
            if (res.code === '0') {
              return true;
            } else {
              // 设置初始值
              validationRule = {
                AttemptNumber: 0,
                Locked: false,
                LockedTime: ''
              };
              return false;
            }
          });
        }
      }
    } else { // 未锁定,验证用户名和密码
      // 没有cookie, 设置初始值
      validationRule = {
        AttemptNumber: 0,
        Locked: false,
        LockedTime: '' // '2020-03-02 10:28:59'
      };
      CommonService.addCookie('LoginValidationRule', JSON.stringify(validationRule), 0);
      this.userService.login(this.userId, this.password, nowTime).subscribe((res) => {
        if (res.code === '0') { // 密码正确
          return true;
        } else {
          // 密码错误
          validationRule.AttemptNumber++;
          if (validationRule.AttemptNumber > 5) {
            validationRule.Locked = true;
            validationRule.LockedTime = nowTime;
            this.msg = '错误次数过多, 请15分钟后再登录.';
          } else {
            // 提示密码错误
            this.hasError = true;
            validationRule.AttemptNumber++;
          }
          return false;
        }
      });
    }
  }
}
