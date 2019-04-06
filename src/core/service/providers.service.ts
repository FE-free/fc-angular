import { UserService } from './user.service'

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
