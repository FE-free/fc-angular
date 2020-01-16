/*
 * @Author: honghong
 * @LastEditors  : Please set LastEditors
 * @Description: 开发环境的环境配置
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime : 2020-01-16 09:38:17
 */
// 当前环境的文件内容将在构建期间覆盖这些内容。
// 构建系统默认使用`environment.ts`的开发环境，但是如果你这样做的话
// 开发环境使用`ng build --env = dev` 会使用`environment.dev.ts`代替。
// 可以在`.angular-cli.json`中找到environment映射到文件的列表。
// 开发环境
export const environment = {
  production: false,
  pid: "FC",  
  projectName: "fc-angular",
  systemurl: "/server/",
  apiurl: "/server/api/",
  logurl: "/server/api/",
  authurl: "/server/api/",
  wsurl: "",
  license: ''
}
