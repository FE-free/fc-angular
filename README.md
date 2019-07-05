# fc-angular

# 【fc-angular】基于angular8的多页面后台管理系统
- 【在线预览】[https://luohong123.github.io/fc-angular/demo/index.html](https://luohong123.github.io/fc-angular/demo/index.html)
- 【源码地址】[https://github.com/luohong123/fc-angular](https://github.com/luohong123/fc-angular)
<a name="6ddda5c2"></a>
# 一、简介
<a name="9cd0c2c7"></a>
## 项目介绍 

- 基于 angularV8，ng.ant.design V8.0.1开发的后台管理系统

> 预览效果图
- 首页
![首页](./media/1.png)
- 路由复用策略，切换路由保留用户操作状态
![选项卡切换](./media/2.png)



<a name="f3a1332d"></a>
## 平台功能开发进度

- [x] 登录
- [x] 首页
- [x] layout
- [x] 多tab页路由复用策略
- [x] 退出登录
- [ ] 系统消息
- [ ] 用户管理
- [ ] 菜单管理
- [ ] 权限管理
- [ ] 日志管理
- [x] 引入阿里图标库
- [ ] 清除本地缓存
- [ ] spreadjs报表可视化
- [x] aot打包
<a name="d41d8cd9"></a>
## 
<a name="90ff5435"></a>
## 代码目录结构

```markdown
.
├── README.md 														# 介绍文档
├── _mock																	# 测试数据
├── angular.json													# 工作区中所有项目的默认 CLI 配置，包括 CLI 使用的构建选项、运行选项、测试工具选项（比如 TSLint、Karma、Protractor）等
├── node_modules													# 提供给整个工作区的 npm 包
├── package-lock.json											# 锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致。
├── package.json													# 配置用于工作区中所有项目的包依赖项
├── proxy.config.json											# 代理
├── src
│   ├── app
│   │   ├── app.README.md 								# 介绍文档
│   │   ├── app.component.ts							
│   │   ├── app.module.ts									
│   │   ├── app.route.ts 									# 根路由
│   │   ├── components 										# 组件
│   │   ├── service												# 服务
│   │   └── share.service.ts              # 单例服务
│   ├── assets														# 静态资源文件
│   │   ├── browser												# 浏览器
│   │   ├── doc														# 文档
│   │   ├── fonts												  # 字体图标
│   │   │   ├── ali_iconfont							# 阿里图标库
│   │   │   └── antdesign 		            # antdesign本地图标
│   │   ├── image													# 图片资源
│   │   ├── plugin												# 第三方插件
│   │   │   └── spread
│   │   ├── styles 												# 样式文件
│   ├── environments 											# 环境配置
│   │   ├── environment.51.ts 						# 其它环境配置
│   │   ├── environment.dev.ts 						# 开发环境配置
│   │   └── environment.prod.ts 					# 上线环境配置
│   ├── favicon.ico 											# 一个用在书签栏上的应用图标
│   ├── fccomponents 											# 平台组件
│   ├── fccore 														# 核心模块
│   │   ├── business  
│   │   ├── directive 										# 指令
│   │   ├── fccore.module.ts 							# 核心模块
│   │   ├── pipe 													# 管道
│   │   └── service 											# 服务
│   │       ├── cache.service.ts					# 缓存服务
│   │       ├── common.service.ts					# 公共方法
│   │       ├── dao.service.ts						# httpClient 前后端通信
│   │       ├── log.service.ts						# 打印服务
│   │       ├── message.service.ts  			# 消息服务
│   │       └── user.service.ts  					# 用户服务
│   ├── feature 													# 业务代码
│   ├── index.html 												# 主HTML文件
│   ├── karma.conf.js
│   ├── main.ts 													# 应用的主入口点,引导应用的根模块 AppModule 来运行在浏览器中
│   ├── polyfills.ts 											# 为浏览器支持提供腻子脚本
│   ├── shared 														# 共享模块
│   ├── styles.less 											# 项目的样式文件
│   ├── test.ts
│   ├── tsconfig.app.json                 # 继承自工作区级的 tsconfig.json 文件
│   ├── tsconfig.spec.json
│   └── tslint.json											  # 继承自工作区级的 tsconfig.json 文件
├── tsconfig.json													# 工作区中所有应用的默认 TypeScript 配置。包括 TypeScript 选项和 Angular 模板编译器选项。
├── tslint.json														# 工作区中所有应用的默认 TSLint 配置。
├── .gitignore 														# 指定 Git 要忽略的非跟踪的文件。
├── .editorconfig 												# 代码编辑器配置
└── tslint代码检查.READE.md								  # 介绍文档
```

<a name="97aab5af"></a>

<a name="5219abb1"></a>
# 二、安装项目

- 在 `git` `node` `npm `  `vscode` 配置好多前提下，克隆代码，命令如下：

```bash
git clone https://github.com/luohong123/fc-angular.git
npm install
npm start
```

```

- 在浏览器中输入 http://localhost:4200
<a name="43752e31"></a>
# 三、开发代码
<a name="98245d55"></a>
## 1. 代码规范

- 请按照angular官网提出的 `风格指南` 开发代码

 【风格指南】[https://angular.cn/guide/styleguide#prevent-re-import-of-the-core-module](https://angular.cn/guide/styleguide#prevent-re-import-of-the-core-module)

<a name="eb85059f"></a>
## 2. 前后端通信
【 使用httpclient】[https://angular.cn/guide/http](https://angular.cn/guide/http)
<a name="f3493286"></a>
## 3. 接口测试

- 推荐使用postman工具

![image.png](https://cdn.nlark.com/yuque/0/2019/png/130738/1555733871020-13db7bac-fa20-451f-8dd8-943dcc62abfb.png#align=left&display=inline&height=339&name=image.png&originHeight=1306&originWidth=2872&size=194842&status=done&width=746)

<a name="5cc07395"></a>
## 4. 路由复用策略代码预览
![image.png](https://cdn.nlark.com/yuque/0/2019/png/130738/1555734163999-1501e30f-9cda-49d4-8bf5-d6f341868d8d.png#align=left&display=inline&height=1854&name=image.png&originHeight=5090&originWidth=2048&size=1271330&status=done&width=746)<br />
<a name="de59c0e7"></a>
## 5. 懒加载路由
![image.png](https://cdn.nlark.com/yuque/0/2019/png/130738/1555734239911-2d8c230a-efdd-4f2d-8399-7fd960f8975c.png#align=left&display=inline&height=942&name=image.png&originHeight=2138&originWidth=1694&size=505657&status=done&width=746)<br />


<a name="09b51d50"></a>
# 四、代码质量检查
<a name="9dae98c0"></a>
## 【代码规范】

1. 每一个文件，如html、css、ts的header都要有作者的名字、描述、作者邮箱、时间、修改时间、修改者等。
1.  文件命名规范
1. ts中一个变量一行注释，每一个方法都要有注释
1. 按照angular官网提供的【风格指南】[链接](https://angular.cn/guide/styleguide) 写代码
<a name="920986da"></a>
## 【tslint代码检查】
<a name="d6c7b62f"></a>
## 【vscode安装插件】

- 在vscode中安装tslint,自动检查代码是否规范,如图：

![image.png](https://cdn.nlark.com/yuque/0/2019/png/130738/1555402709987-cece1997-9eb6-4a91-9a26-951bf0ae22ff.png#align=left&display=inline&height=286&name=image.png&originHeight=572&originWidth=1748&size=139535&status=done&width=874)

- 在vscode中安装koroFileHeader，如图：

![image.png](https://cdn.nlark.com/yuque/0/2019/png/130738/1555465769752-af3a1a2b-59af-4773-abc5-c0b7f1868b4b.png#align=left&display=inline&height=677&name=image.png&originHeight=1354&originWidth=1954&size=297890&status=done&width=977)

- 在vscode中安装代码自动美化工具，如图：

![image.png](https://cdn.nlark.com/yuque/0/2019/png/130738/1555402742578-38d4c998-ea8a-4575-922a-0493b64f17c5.png#align=left&display=inline&height=660&name=image.png&originHeight=1320&originWidth=2052&size=297778&status=done&width=1026)

- angular版本的antDesign代码自动提示工具

![image.png](https://cdn.nlark.com/yuque/0/2019/png/130738/1555404778502-627a5e69-3054-4e7a-8018-3d7d0b3c40a1.png#align=left&display=inline&height=441&name=image.png&originHeight=1154&originWidth=1952&size=205061&status=done&width=746)

- 在vscode中安装Open-In-Browser
- 在vscode中安装 CSS Peek
- 在vscode中安装 Color Info 
- 在vscode中安装快捷键插件 IntelliJ IDEA Keybindings

<a name="435a73ea"></a>
## 【通过aot打包检查代码是否规范】

```bash
ng build --aot
```

<a name="625623da"></a>
# 五、aot打包部署

- 通过   `ng build --aot`  命令生成dist 文件，命令如下：

```bash
ng build --aot
```


<a name="ca97411e"></a>
# 六、学习帮助
【angular官网】[https://angular.cn/docs](https://angular.cn/docs)<br />【typescript官网】[http://www.typescriptlang.org/index.html](http://www.typescriptlang.org/index.html)<br />【ng.ant.design官网】[https://ng.ant.design/docs/introduce/zh](https://ng.ant.design/docs/introduce/zh)

<a name="e8bd9544"></a>
# 七、谢谢大家
感谢大家抽时间阅读我的文章，欢迎指出不对的地方，谢谢！ 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
