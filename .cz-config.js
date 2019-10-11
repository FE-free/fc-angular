/*
 * @Author: honghong
 * @Date: 2019-10-11 09:50:12
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-11 15:08:52
 * @Description:  不使用cz-conventional-changelog (一个符合 Angular团队规范的 preset)
 * 自定义格式
 * @email: 3300536651@qq.com
 */
'use strict';
module.exports = {

  types: [{
      value: ':tada: feat',
      name: 'feat:     A new feature（新特性）'
    },
    {
      value: ':bug: fix',
      name: 'fix:      A bug fix（修改问题）'
    },
    {
      value: ':memo: docs',
      name: 'docs:     Documentation only changes（文档修改）'
    },
    {
      value: ':art: style',
      name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)（代码格式修改，注意不是css修改）'
    },
    {
      value: ':lipstick: UI',
      name: 'UI: Update UI or styles file(css,less,scss)'
    },
    {
      value: ':hammer: refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature（代码重构）'
    },
    {
      value: ':zap: perf',
      name: 'perf:     A code change that improves performance（更改代码以提高性能）'
    },
    {
      value: ':white_check_mark: test',
      name: 'test:     Adding missing tests（测试用例修改）'
    },
    {
      value: ':rocket: chore',
      name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation（其他修改，比如构建流程，依赖管理）'
    },
    {
      value: ':rewind: revert',
      name: 'revert:   Revert to a commit（恢复为提交）'
    },
    {
      value: ':fire: remove',
      name: 'remove: Remove code or file'
    }, {
      value: ':construction: WIP',
      name: 'WIP:      Work in progress（Work in progress）'
    }
  ],

  scopes: [{ // commit影响的范围，比如: route,components,utils,build
      name: 'route'
    },
    {
      name: 'component'
    },
    {
      name: 'build'
    }, {
      name: 'service'
    }, {
      name: 'core'
    }, {
      name: 'feature'
    }, {
      name: 'other'
    }
  ],

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: 'Select the type of change that you\'re committing:',
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    // commit 的概述，建议符合 50/72 formatting
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    // commit 具体修改内容，可以分为多行，建议符合 50/72 formatting
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    // 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],

  // limit subject length
  subjectLimit: 100

};
