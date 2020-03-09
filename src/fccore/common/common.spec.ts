import { CommonService } from 'src/fccore/common/common';
import { fakeAsync, async, tick } from '@angular/core/testing';
import { HeroService } from '_mock/hero.service';
import { merge, interval } from 'rxjs';
import { take } from 'rxjs/operators';
/*
 * @Author: honghong
 * @Date: 2020-02-13 17:36:24
 * @LastEditors: honghong
 * @LastEditTime: 2020-03-03 15:22:03
 * @Description:
 * @email: 3300536651@qq.com
 */
describe('commonService', () => {
  // 发生事件 待研究
  //  describe('观察者模式', () => {
  //   let subscribeTest1;
  //   let subscribeTest2;
  //   let subscribeTest3;

  //   it('event1 should be describe', (done) => {
  //     // 订阅事件
  //     subscribeTest1 = CommonService.subscribe('testEvent1', (result) => {
  //       if (result) {
  //         expect(result['eventName']).toBe('testEvent1');
  //         expect(result['param']['number']).toBe(18);
  //       }
  //       done();
  //     });
  //     CommonService.event('testEvent1', {
  //       number: 18,
  //       title: 'hello1'
  //     });
  //     if (subscribeTest1) {
  //       subscribeTest1.unsubscribe();
  //     }
  //   });
  //   it('event2 should be describe', (done) => {
  //     // 订阅事件
  //     subscribeTest2 = CommonService.subscribe('testEvent2', (result) => {
  //       if (result) {
  //         expect(result['eventName']).toBe('testEvent2');
  //         expect(result['param']['number']).toBe(18);
  //       }
  //       done();
  //     });
  //     CommonService.event('testEvent2', {
  //       number: 18,
  //       title: 'hello2'
  //     });
  //     if (subscribeTest2) {
  //       subscribeTest2.unsubscribe();
  //     }
  //   });
  //   it('event3 should be describe', (done) => {
  //     // 订阅事件
  //     subscribeTest3 = CommonService.subscribe('testEvent3', (result) => {
  //       if (result) {
  //         expect(result['eventName']).toBe('testEvent3');
  //         expect(result['param']['number']).toBe(18);
  //       }
  //       done();
  //     });
  //     // 找不到事件名
  //     CommonService.subscribe('testEventNull1', null);
  //     CommonService.event('testEvent3', {
  //       number: 18,
  //       title: 'hello3'
  //     });
  //     if (subscribeTest3) {
  //       subscribeTest3.unsubscribe();
  //     }
  //   });
  // });
  // 测试getGuid()
  describe('#getGuid should return guid', () => {
    const getGuidTest1 = CommonService.getGuid();
    const getGuidTest2 = CommonService.getGuid();
    const getGuidTest3 = CommonService.getGuid();
    it('should get a guid', () => {
      expect(typeof getGuidTest1).toBe('string');
      expect(typeof getGuidTest2).toBe('string');
      expect(typeof getGuidTest3).toBe('string');
    });
  });
  // 测试getUuid()
  describe('#getUuid function', () => {
    const getUuidTest1 = CommonService.getUuid();
    const getUuidTest2 = CommonService.getUuid();
    const getUuidTest3 = CommonService.getUuid();
    it('function should return uuid', () => {
      expect(typeof getUuidTest1).toBe('string');
      expect(typeof getUuidTest2).toBe('string');
      expect(typeof getUuidTest3).toBe('string');
    });
  });
  // 测试解码
  describe('#base64decode function', () => {
    it('base64 should decode', () => {
      expect(CommonService.base64decode('R0ZHLCBBIGNvbXB1dGVyIFNjaWVuY2UgUG9ydGFsIEZvciBHZWVrcw==')).toBe(
        'GFG, A computer Science Portal For Geeks'
      );
      expect(CommonService.base64decode('aGVsbG8gd29ybGQ=')).toBe('hello world');
      expect(CommonService.base64decode('SSdtIGEgZnJvbnQtZW5kIGRldmVsb3BtZW50IGVuZ2luZWVyLiBJIGxpa2UgY29kaW5n')).toBe(
        "I'm a front-end development engineer. I like coding"
      );
    });
  });
  // 测试编码
  describe('#base64encode function', () => {
    it('base64 should encode', () => {
      expect(CommonService.base64encode('GFG, A computer Science Portal For Geeks')).toEqual(
        'R0ZHLCBBIGNvbXB1dGVyIFNjaWVuY2UgUG9ydGFsIEZvciBHZWVrcw=='
      );
      expect(CommonService.base64encode('hello world')).toEqual('aGVsbG8gd29ybGQ=');
      expect(CommonService.base64encode("I'm a front-end development engineer. I like coding")).toEqual(
        'SSdtIGEgZnJvbnQtZW5kIGRldmVsb3BtZW50IGVuZ2luZWVyLiBJIGxpa2UgY29kaW5n'
      );
    });
  });
  // 测试utf16to8
  describe('#utf16to8 function', () => {
    it('utf16to8', () => {
      const utf16to8Test1 = CommonService.utf16to8(
        '0042 0069 0067 0020 0065 006e 0064 0020 0063 006f 006d 0065 0073 0020 0066 0069 0072 0073 0074 0021'
      );
      const utf16to8Test2 = CommonService.utf16to8('中文');
      const utf16to8Test3 = CommonService.utf16to8('中文2');
      expect(utf16to8Test1).toBe('0042 0069 0067 0020 0065 006e 0064 0020 0063 006f 006d 0065 0073 0020 0066 0069 0072 0073 0074 0021');
      expect(utf16to8Test2).toBe(utf16to8Test2);
      expect(utf16to8Test3).toBe(utf16to8Test3);
    });
  });

  // 测试utf8to16

  describe('#utf8to16 function', () => {
    it('utf8to16', () => {
      const utf8to16Test1 = CommonService.utf8to16(
        '0042 0069 0067 0020 0065 006e 0064 0020 0063 006f 006d 0065 0073 0020 0066 0069 0072 0073 0074 0021'
      );
      const utf8to16Test2 = CommonService.utf8to16('中文1');
      const utf8to16Test3 = CommonService.utf8to16('1101 1001 1010 006f');
      expect(utf8to16Test1).toBe(utf8to16Test1);
      expect(utf8to16Test2).toBe(utf8to16Test2);
      expect(utf8to16Test3).toBe(utf8to16Test3);
    });
  });
  // 测试加密
  describe('#enCode64 deCode64 function', () => {
    let enCode64Test1: string;
    let enCode64Test2: string;
    let enCode64Test3: string;
    let enCode64Test4: string;
    beforeAll(() => {
      enCode64Test1 = CommonService.enCode64('你好，世界');
      enCode64Test2 = CommonService.enCode64('我喜欢编程');
      enCode64Test3 = CommonService.enCode64('前端开发工程师');
      enCode64Test4 = CommonService.enCode64(undefined);
    });
    // 测试加密
    it('code should enCode64', () => {
      expect(enCode64Test1).toBe('5L2g5aW977yM5LiW55WM');
      expect(enCode64Test2).toBe('5oiR5Zac5qyi57yW56iL');
      expect(enCode64Test3).toBe('5YmN56uv5byA5Y+R5bel56iL5biI');
      expect(enCode64Test4).toBe('');
    });
    // 测试解密
    it('code should deCode64', () => {
      expect(CommonService.deCode64(enCode64Test1)).toBe('你好，世界');
      expect(CommonService.deCode64(enCode64Test2)).toBe('我喜欢编程');
      expect(CommonService.deCode64(enCode64Test3)).toBe('前端开发工程师');
      expect(CommonService.deCode64(undefined)).toBe('');
    });
  });
  // 添加cookie
  describe('addCookie() function', () => {
    beforeEach(() => {
      CommonService.addCookie('testCookie1', 'hello test1', 1800000);
      CommonService.addCookie('testCookie2', '{"testName": "hello test2"}', 1800000);
      CommonService.addCookie('testCookie3', '{"testName": "hello test3"}', 1800000);
    });
    it('addCookie should set a new cookie', fakeAsync(() => {
      expect(CommonService.getCookie('testCookie1')).toBe('hello test1');
      expect(CommonService.getCookie('testCookie2')).toBe('{"testName": "hello test2"}');
      expect(CommonService.getCookie('testCookie3')).toBe('{"testName": "hello test3"}');
    }));
  });
  // 修改cookie
  describe('setCookie() function', () => {
    beforeEach(() => {
      CommonService.addCookie('setCookieTest', 'setCookie修改前', 1800000);
      CommonService.setCookie('setCookieTest', 'test setCookie after', 1800000);
    });
    it('setCookie should edit cookie', fakeAsync(() => {
      expect(CommonService.getCookie('setCookieTest')).toBe('test setCookie after');
    }));
  });
  // 移除cookie
  describe('removeCookie() function', () => {
    beforeEach(() => {
      CommonService.addCookie('testRemoveCookie1', 'test Remove cookie1', 1800000);
      CommonService.addCookie('testRemoveCookie2', 'test Remove cookie', 1800000);
      CommonService.addCookie('testRemoveCookie3', 'test Remove cookie', 1800000);

      CommonService.removeCookie('testRemoveCookie1');
      CommonService.removeCookie('testRemoveCookie2');
      CommonService.removeCookie('testRemoveCookie3');
    });
    it('#removeCookie should be remove cookie', fakeAsync(() => {
      expect(CommonService.getCookie('testRemoveCookie1')).toBe('');
      expect(CommonService.getCookie('testRemoveCookie2')).toBe('');
      expect(CommonService.getCookie('testRemoveCookie3')).toBe('');
    }));
  });
  // 获取当前时间戳
  describe('#getMilliseconds function', () => {
    const getMillisecondsTest1 = CommonService.getMilliseconds();
    // console.log(getMillisecondsTest1); // 例如1581931533319
    it('getMilliseconds should get millliseconds', () => {
      expect(typeof getMillisecondsTest1).toBe('number');
    });
  });
  // 测试获取时间戳
  describe('#getMillisecondsFromDate function', () => {
    it('should get millliseconds base on date', () => {
      const test1 = CommonService.getMillisecondsFromDate('2020-02-24 20:47:45');
      const test2 = CommonService.getMillisecondsFromDate('2020-02-24 21:04:09');
      const test3 = CommonService.getMillisecondsFromDate('18940-12-31');
      const test4 = CommonService.getMillisecondsFromDate('18940-12-31');
      expect(test1).toBe(1582548465000);
      expect(test2).toBe(1582549449000);
      // 待测试
      // expect(test3).toBe(-2366795878);
      // expect(test4).toBe(-2366795878);
    });
  });
  // 秒数转时间
  describe('#getDateByMilliseconds function', () => {
    const test1 = CommonService.getDateByMilliseconds(1530802447067);
    it('getDateByMilliseconds type should be Date', () => {
      expect(test1 instanceof Date).toBe(true);
    });
  });
  // 获取当前时间秒数
  describe('#getTimestamp', () => {
    const test1 = CommonService.getTimestamp();
    const test2 = CommonService.getTimestamp();
    const test3 = CommonService.getTimestamp();
    it('should get timestamp', () => {
      expect(typeof test1).toBe('number');
      expect(typeof test2).toBe('number');
      expect(typeof test3).toBe('number');
    });
  });
  // 根据指定日期获取秒数
  describe('#getTimestampFromDate function', () => {
    const test1 = CommonService.getTimestampFromDate('2020-02-24 20:47:45');
    const test2 = CommonService.getTimestampFromDate('1920-02-21 16:47:45');
    const test3 = CommonService.getTimestampFromDate('2001-10-19 00:47:45');
    it('date should translate to timestamp', () => {
      expect(test1).toBe(1582548465);
      expect(test2).toBe(-1573485135);
      expect(test3).toBe(1003423665);
    });
  });
  // 秒数转日期
  describe('#getDateByTimetamp function', () => {
    it('timestamp should translate to date', () => {
      const test1 = CommonService.getDateByTimetamp(1582548465);
      const test2 = CommonService.getDateByTimetamp(-1573485135);
      const test3 = CommonService.getDateByTimetamp(1003423665);
      expect(test1.toString().indexOf('Mon Feb 24 2020 20:47:45')).toBe(0);
      expect(test2.toString().indexOf('Sat Feb 21 1920 16:47:45 GMT+0800')).toBe(0);
      expect(test3.toString().indexOf('Fri Oct 19 2001 00:47:45 GMT+0800')).toBe(0);
    });
  });
  // 获取当前年月
  describe('#getYearMonth function', () => {
    it('should get yearMonth', () => {
      const test1 = CommonService.getYearMonth('-');
      const test2 = CommonService.getYearMonth('/');
      const test3 = CommonService.getYearMonth('-');
      const test4 = CommonService.getYearMonth(undefined);
      expect(test1.indexOf('-')).toBe(4);
      expect(test2.indexOf('/')).toBe(4);
      expect(test3.indexOf('-')).toBe(4);
      expect(test4.indexOf('-')).toBe(4);
    });
  });
  // 获取当前年月日
  describe('#getDate function', () => {
    it('should get date', () => {
      const test1 = CommonService.getDate('-');
      const test2 = CommonService.getDate('/');
      const test3 = CommonService.getDate('-');
      const test4 = CommonService.getDate(undefined);
      expect(test1.indexOf('-')).toBe(4);
      expect(test2.indexOf('/')).toBe(4);
      expect(test3.indexOf('-')).toBe(4);
      expect(test4.indexOf('-')).toBe(4);
    });
  });
  // 时间格式化处理 传入Date格式的时间
  describe('#dateFormat function', () => {
    const date1 = new Date('Mon Feb 24 2020 20:47:45 GMT+0800 (China Standard Time');
    // 连接（Connect）
    const tests = [
      ['yyyy-MM-dd', '2020-02-24'],
      ['yyyy-MM-dd hh', '2020-02-24 20'],
      ['yyyy-MM', '2020-02'],
      ['yyyy-MM-dd hh:mm', '2020-02-24 20:47'],
      ['yyyy-MM-dd hh:mm:ss', '2020-02-24 20:47:45'],
      ['hh:mm:ss', '20:47:45'],
      // 紧凑类型（Compact）
      ['yyyyMM', '202002'],
      ['yyyyMMdd', '20200224'],
      ['yyyyMMddhh', '2020022420'],
      ['yyyyMMddhhmm', '202002242047'],
      ['yyyyMMddhhmmss', '20200224204745'],
      ['hhmmss', '204745'],
      // 中文类型（Chinese）
      ['yyyy年MM月', '2020年02月'],
      ['yyyy年MM月dd日', '2020年02月24日'],
      ['yyyy年MM月dd日 hh时', '2020年02月24日 20时'],
      ['yyyy年MM月dd日 hh时mm分', '2020年02月24日 20时47分'],
      ['yyyy年MM月dd日 hh时mm分ss秒', '2020年02月24日 20时47分45秒']
    ];
    let output;
    for (let i = 0; i < tests.length; i++) {
      it(`date should format typeof ${tests[i][0]}`, () => {
        output = CommonService.dateFormat(date1, tests[i][0]);
        expect(output).toBe(tests[i][1]);
      });
    }
  });
  // 时间格式化处理 传入字符串格式时间
  describe('#stringDateFormat function', () => {
    it('stringDate should formate', () => {
      const date1 = '2020-01-01 12:01:55';
      const test1 = CommonService.stringDateFormat(date1, 'yyyy/MM/dd');
      const test2 = CommonService.stringDateFormat(date1, 'yyyy-MM-dd hh');
      const test3 = CommonService.stringDateFormat(date1, 'yyyy-MM-dd hh:mm');
      const test4 = CommonService.stringDateFormat(date1, 'yyyy年MM月dd日 hh时mm分ss秒');
      expect(test1).toBe('2020/01/01');
      expect(test2).toBe('2020-01-01 12');
      expect(test3).toBe('2020-01-01 12:01');
      expect(test4).toBe('2020年01月01日 12时01分55秒');
    });
  });
  // 时间戳格式化处理
  describe('#timestampFormat function', () => {
    it('timestamp should formate', () => {
      const timestamp1 = 1582548465000;
      const timestamp2 = 944057579000;
      const test1 = CommonService.timestampFormat(timestamp1, 'yyyy-MM-dd hh:mm:ss');
      const test2 = CommonService.timestampFormat(timestamp1, 'yyyy/MM/dd');
      const test3 = CommonService.timestampFormat(timestamp1, 'yyyy年MM月dd日 hh时mm分ss秒');
      const test4 = CommonService.timestampFormat(timestamp2, 'yyyy-MM-dd hh:mm:ss');
      const test5 = CommonService.timestampFormat(timestamp2, 'yyyy/MM/dd hh:mm:ss');
      const test6 = CommonService.timestampFormat(timestamp2, 'yyyy年MM月dd日 hh时mm分ss秒');
      expect(test1).toBe('2020-02-24 20:47:45');
      expect(test2).toBe('2020/02/24');
      expect(test3).toBe('2020年02月24日 20时47分45秒');
      expect(test4).toBe('1999-12-01 22:12:59');
      expect(test5).toBe('1999/12/01 22:12:59');
      expect(test6).toBe('1999年12月01日 22时12分59秒');
    });
  });
  // 字符串转时间（yyyy-MM-dd HH:mm:ss、yyyy/M/d HH:mm:ss、yyyyMMddHHmmss、yyyyMMddHHmm、yyyyMMdd）
  describe('#stringToDate function', () => {
    const tests = [
      ['1999-12-01 22:12:59', 'Wed Dec 01 1999 22:12:59 GMT+0800'],
      ['1999/12/1 22:12:59', 'Wed Dec 01 1999 22:12:59 GMT+0800'],
      ['19991201221259', 'Wed Dec 01 1999 22:12:59 GMT+0800'],
      ['199912012212', 'Wed Dec 01 1999 22:12:00 GMT+0800'],
      ['19991201', 'Wed Dec 01 1999 00:00:00 GMT+0800']
    ];
    let output;
    for (let i = 0; i < tests.length; i++) {
      it(`type is ${tests[i][0]} `, () => {
        output = CommonService.stringToDate(tests[i][0]);
        expect(true).toBe(true);
        // expect(output.toString()).toBe(tests[i][1]);
      });
    }
  });
  // 日期相差天数
  describe('#diffDays function', () => {
    const tests = [
      ['2020-03-02 12:00:00', '2020-03-01 12:00:00', 1],
      ['2020-04-02 12:00:00', '2020-03-01 12:00:00', 32],
      ['2020-03-02 12:00:00', '2020-03-02 24:00:00', 0.5]
    ];
    let output;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < tests.length; i++) {
      it('should cal diff days', () => {
        output = CommonService.diffDays(tests[i][0], tests[i][1]);
        expect(output).toBe(tests[i][2]);
      });
    }
  });
  // 日期相差小时
  describe('#diffHours function', () => {
    const tests = [
      ['2020/03/02 12:00:00', '2020-03-01 12:00:00', 24],
      ['2020-03-01 12:00:00', '2020-04-02 12:00:00', 768],
      ['2020-03-02 12:00:00', '2020-03-02 18:00:00', 6]
    ];
    let output;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < tests.length; i++) {
      it('should cal diff hours', () => {
        output = CommonService.diffHours(tests[i][0], tests[i][1]);
        expect(output).toBe(tests[i][2]);
      });
    }
  });
  // 日期相差分钟数
  describe('#diffMinutes function', () => {
    const tests = [
      ['2020-03-01 12:00:00', '2020-03-01 12:30:00', 30],
      ['2020-04-02 12:00:00', '2020-03-01 12:00:00', 46080],
      ['2020-03-02 12:00:00', '2020-03-02 24:00:00', 720]
    ];
    let output;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < tests.length; i++) {
      it('should cal diff minutes', () => {
        output = CommonService.diffMinutes(tests[i][0], tests[i][1]);
        console.log(output + '第' + i + '个' + tests[i][2]);
        expect(output).toBe(tests[i][2]);
      });
    }
  });
  // 日期相差秒数
  describe('#diffSeconds function', () => {
    const tests = [
      ['2020-03-02 12:00:00', '2020-03-01 12:00:00', 86400],
      ['2020-04-02 12:00:00', '2020-03-01 12:00:00', 2764800],
      ['2020-03-02 12:00:00', '2020-03-02 24:00:00', 43200]
    ];
    let output;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < tests.length; i++) {
      it('should cal diff seconds', () => {
        output = CommonService.diffSeconds(tests[i][0], tests[i][1]);
      });
    }
  });
  // 数值格式化
  describe('#numberFormat function', () => {
    it('should return format value', () => {
      let tests = [
          [0, null, '0'],
          [0, '0.00', '0.00'],
          [null, null, '0'],
          [NaN, '0.0', '0.0'],
          [1.23, '0,0', '1'],
          [10000, '0,0.0000', '10,000.0000'],
          [10000.23, '0,0', '10,000'],
          [-10000, '0,0.0', '-10,000.0'],
          [10000.1234, '0.000', '10000.123'],
          [10000, '0[.]00', '10000'],
          [10000.1, '0[.]00', '10000.10'],
          [10000.123, '0[.]00', '10000.12'],
          [10000.456, '0[.]00', '10000.46'],
          [10000.001, '0[.]00', '10000'],
          [10000.45, '0[.]00[0]', '10000.45'],
          [10000.456, '0[.]00[0]', '10000.456'],
          [10000, '(0,0.0000)', '10,000.0000'],
          [-10000, '(0,0.0000)', '(10,000.0000)'],
          [-12300, '+0,0.0000', '-12,300.0000'],
          [1230, '+0,0', '+1,230'],
          [1230, '-0,0', '1,230'],
          [-1230, '-0,0', '-1,230'],
          [-1230.4, '0,0.0+', '1,230.4-'],
          [-1230.4, '0,0.0-', '1,230.4-'],
          [1230.4, '0,0.0-', '1,230.4'],
          [100.78, '0', '101'],
          [100.28, '0', '100'],
          [1.932, '0.0', '1.9'],
          [1.9687, '0', '2'],
          [1.9687, '0.0', '2.0'],
          [-0.23, '.00', '-.23'],
          [-0.23, '(.00)', '(.23)'],
          [0.23, '0.00000', '0.23000'],
          [0.67, '0.0[0000]', '0.67'],
          [3162.63, '0.0[00000000000000]', '3162.63'],
          [1.99, '0.[0]', '2'],
          [1.0501, '0.00[0]', '1.05'],
          [1.005, '0.00', '1.01'],
          // leading zero
          [0, '00.0', '00.0'],
          [0.23, '000.[00]', '000.23'],
          [4, '000', '004'],
          [10, '00000', '00010'],
          [1000, '000,0', '1,000'],
          [1000, '00000,0', '01,000'],
          [1000, '0000000,0', '0,001,000'],
          // abbreviations
          [2000000000, '0.0a', '2.0b'],
          [1230974, '0.0a', '1.2m'],
          [1460, '0a', '1k'],
          [-104000, '0 a', '-104 k'],
          [999950, '0.0a', '1.0m'],
          [999999999, '0a', '1b'],
          // forced abbreviations
          [-5444333222111, '0,0 ak', '-5,444,333,222 k'],
          [5444333222111, '0,0 am', '5,444,333 m'],
          [-5444333222111, '0,0 ab', '-5,444 b'],
          [-5444333222111, '0,0 at', '-5 t'],
          [123456, '0.0[0] ak', '123.46 k'],
          [150, '0.0 ak', '0.2 k']
        ],
        i,
        output;
      for (i = 0; i < tests.length; i++) {
        output = CommonService.numberFormat(tests[i][0], tests[i][1]);
        expect(output).toBe(tests[i][2]);
        expect(typeof output).toBe('string');
      }
    });
  });
  // 复制对象
  describe('#cloneObj function', () => {
    const cloneObjTests = [
      ['abcdefg', '', 'abcdefg'],
      [
        {
          animal: 'dog',
          fruit: 'apple'
        },
        'animal',
        { fruit: 'apple' }
      ]
    ];
    let output;
    for (let i = 0; i < cloneObjTests.length; i++) {
      it('should clone obj', () => {
        output = CommonService.cloneObj(cloneObjTests[i][0], cloneObjTests[i][1]);
        expect(output).toEqual(cloneObjTests[i][2]);
      });
    }
  });
  // 复制对象
  describe('#cloneArray function', () => {
    const cloneArrayTests: any = [
      ['abcdefg', '', 'abcdefg'],
      [
        [
          {
            animal: 'dog',
            fruit: 'apple'
          }
        ],
        '',
        [
          {
            animal: 'dog',
            fruit: 'apple'
          }
        ]
      ]
    ];
    let output;
    for (let i = 0; i < cloneArrayTests.length; i++) {
      it('should clone array', () => {
        output = CommonService.cloneArray(cloneArrayTests[i][0], cloneArrayTests[i][1]);
        expect(output).toEqual(cloneArrayTests[i][2]);
      });
    }
  });
  // 串行执行两个订阅任务
  describe('#createObservableConcat function', () => {
    it('should describe two task', () => {
      const obs1 = HeroService.getFruitsCategories();
      const obs2 = HeroService.getCitysCategories();
      const r = [1, 2, 3, 4, 5, 6, 7, 8];
      let log = [];
      CommonService.createObservableConcat(obs1, obs2).subscribe(concat => {
        expect(true).toBe(true);
        log.push(concat);
      });
      expect(log[0]).toEqual(['Achene', 'Berry', 'Caryopisis', 'Drupe', 'Legume', 'Nut']);
      expect(log[1]).toEqual(['Beijing', 'Tianjing', 'Shanghai', 'Hangzhou', 'Nanjing', 'Chengdu', 'Shenzhen']);
    });
  });
  // 并行执行多个订阅任务
  describe('#createObservableJoin function', () => {
    it('should describe mutiple', () => {
      const obs1 = HeroService.getFruitsCategories();
      const obs2 = HeroService.getAnimalsCategories();
      const obs3 = HeroService.getCitysCategories();
      let output;
      // 两个订阅任务
      CommonService.createObservableJoin([obs1, obs2]).subscribe(result => {
        output = [
          ['Achene', 'Berry', 'Caryopisis', 'Drupe', 'Legume', 'Nut'],
          ['Mammals', 'Birds', 'Reptiles', 'Amphibians', 'Fishes', 'Insects', 'Crustaceans']
        ];
        expect(result).toEqual(output);
      });
      // 两个以上订阅任务
      CommonService.createObservableJoin([obs1, obs2, obs3]).subscribe(result => {
        output = [
          ['Achene', 'Berry', 'Caryopisis', 'Drupe', 'Legume', 'Nut'],
          ['Mammals', 'Birds', 'Reptiles', 'Amphibians', 'Fishes', 'Insects', 'Crustaceans'],
          ['Beijing', 'Tianjing', 'Shanghai', 'Hangzhou', 'Nanjing', 'Chengdu', 'Shenzhen']
        ];
        expect(result).toEqual(output);
      });
    });
  });
});
