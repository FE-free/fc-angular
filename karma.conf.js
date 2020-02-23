/*
 * @Author: honghong
 * @Date: 2019-07-05 16:11:36
 * @LastEditors: honghong
 * @LastEditTime: 2020-02-14 12:32:47
 * @Description: 
 * @email: 3300536651@qq.com
 */
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      // jasmine: {
      //   timeoutInterval: 10000 // 在 10000 毫秒内未调用异步回调（由jasmine设置。默认超时间隔）
      // },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/fc-angular'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      // thresholds: { // 假设你希望代码有最少 80% 的代码覆盖率。 要启用它
      //   statements: 80,
      //   lines: 80,
      //   branches: 80,
      //   functions: 80
      // }
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
