/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 上线环境的环境配置,上线环境需要过aot打包，命令ng build --aot
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-19 17:43:17
 */

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// 开发环境
export const environment = {
  production: true,
  pid: "BUDGET",
  projectName: "全面预算管理系统",
  systemurl: "/server/",
  apiurl: "/server/api/",
  logurl: "/server/api/",
  authurl: "/server/api/",
  // wsurl: "ws://192.168.61.223:9000/server/msg",
  wsurl: "ws://10.3.28.64:9080/server/msg",
  license: ''
};
