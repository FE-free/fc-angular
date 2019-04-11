import { UserService } from './user.service'
import { Injectable } from '@angular/core';
@Injectable({
  providedIn:'root'
})
export class ProvidersService {
  userService: UserService
  constructor(userService: UserService){

  }
  /**
   * 获取用户信息
   */
  getUserInfo(): any{
      
  }
}
