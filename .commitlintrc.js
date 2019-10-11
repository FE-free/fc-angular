/*
 * @Author: honghong
 * @Date: 2019-10-11 11:15:48
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-11 14:59:52
 * @Description: 校验你的 message,如果我们提交的不符合指向的规范, 直接拒绝提交
 * @email: 3300536651@qq.com
 */
module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  // 参考链接：https://commitlint.js.org/#/reference-rules
  rules: {
    'subject-empty': [0, 'never'], // 
    'type-empty': [0, 'never']
  }
};
