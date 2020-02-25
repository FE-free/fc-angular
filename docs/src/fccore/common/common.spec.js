import { fakeAsync } from '@angular/core/testing';
import { CommonService } from './common';
/*
 * @Author: honghong
 * @Date: 2020-02-13 17:36:24
 * @LastEditors: honghong
 * @LastEditTime: 2020-02-25 20:01:09
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
            expect(CommonService.base64decode('R0ZHLCBBIGNvbXB1dGVyIFNjaWVuY2UgUG9ydGFsIEZvciBHZWVrcw==')).toBe('GFG, A computer Science Portal For Geeks');
            expect(CommonService.base64decode('aGVsbG8gd29ybGQ=')).toBe('hello world');
            expect(CommonService.base64decode('SSdtIGEgZnJvbnQtZW5kIGRldmVsb3BtZW50IGVuZ2luZWVyLiBJIGxpa2UgY29kaW5n')).toBe("I'm a front-end development engineer. I like coding");
        });
    });
    // 测试编码
    describe('#base64encode function', () => {
        it('base64 should encode', () => {
            expect(CommonService.base64encode('GFG, A computer Science Portal For Geeks')).toEqual('R0ZHLCBBIGNvbXB1dGVyIFNjaWVuY2UgUG9ydGFsIEZvciBHZWVrcw==');
            expect(CommonService.base64encode('hello world')).toEqual('aGVsbG8gd29ybGQ=');
            expect(CommonService.base64encode("I'm a front-end development engineer. I like coding")).toEqual('SSdtIGEgZnJvbnQtZW5kIGRldmVsb3BtZW50IGVuZ2luZWVyLiBJIGxpa2UgY29kaW5n');
        });
    });
    // 测试utf16to8
    describe('#utf16to8 function', () => {
        it('utf16to8', () => {
            const utf16to8Test1 = CommonService.utf16to8('0042 0069 0067 0020 0065 006e 0064 0020 0063 006f 006d 0065 0073 0020 0066 0069 0072 0073 0074 0021');
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
            const utf8to16Test1 = CommonService.utf8to16('0042 0069 0067 0020 0065 006e 0064 0020 0063 006f 006d 0065 0073 0020 0066 0069 0072 0073 0074 0021');
            const utf8to16Test2 = CommonService.utf8to16('中文1');
            const utf8to16Test3 = CommonService.utf8to16('1101 1001 1010 006f');
            expect(utf8to16Test1).toBe(utf8to16Test1);
            expect(utf8to16Test2).toBe(utf8to16Test2);
            expect(utf8to16Test3).toBe(utf8to16Test3);
        });
    });
    // 测试加密
    describe('#enCode64 deCode64 function', () => {
        let enCode64Test1;
        let enCode64Test2;
        let enCode64Test3;
        let enCode64Test4;
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
            expect(CommonService.deCode64(enCode64Test4)).toBe('');
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
            expect(test1.toString()).toBe('Mon Feb 24 2020 20:47:45 GMT+0800 (China Standard Time)');
            expect(test2.toString()).toBe('Sat Feb 21 1920 16:47:45 GMT+0800 (China Standard Time)');
            expect(test3.toString()).toBe('Fri Oct 19 2001 00:47:45 GMT+0800 (China Standard Time)');
        });
    });
    // 获取当前年月
    describe('#getYearMonth function', () => {
        it('should get yearMonth', () => {
            const test1 = CommonService.getYearMonth('-');
            const test2 = CommonService.getYearMonth('/');
            const test3 = CommonService.getYearMonth('-');
            expect(test1.indexOf('-')).toBe(4);
            expect(test2.indexOf('/')).toBe(4);
            expect(test3.indexOf('-')).toBe(4);
        });
    });
    // 获取当前年月日
    describe('#getDate function', () => {
        it('should get date', () => {
            const test1 = CommonService.getDate('-');
            const test2 = CommonService.getDate('/');
            const test3 = CommonService.getDate('-');
            expect(test1.indexOf('-')).toBe(4);
            expect(test2.indexOf('/')).toBe(4);
            expect(test3.indexOf('-')).toBe(4);
        });
    });
    // 时间格式化处理
    describe('#dateFormat function', () => {
        it('date should format', () => {
            const date1 = new Date('Mon Feb 24 2020 20:47:45 GMT+0800 (China Standard Time');
            const test1 = CommonService.dateFormat(date1, 'yyyy-MM-dd hh:mm:ss');
            const test2 = CommonService.dateFormat(date1, 'yyyy/MM/dd hh:mm:ss');
            const test3 = CommonService.dateFormat(date1, 'yyyy-MM-dd EEE hh:mm:ss');
            expect(test2).toBe('2020/02/24 20:47:45');
            expect(test1).toBe('2020-02-24 20:47:45');
            // expect( test3.toString()).toBe('2020-02-24 20:47:45');
            // const test1 = CommonService.dateFormat(date1, 'yyyy-MM-dd HH:mm:ss');
            // const test1 = CommonService.dateFormat(date1, 'yyyy-MM-dd HH:mm:ss');
            // const test1 = CommonService.dateFormat(date1, 'yyyy-MM-dd HH:mm:ss');
            // expect(test2).toBe('2020-02-24 /u661f/u671f/u4e00 08:47:45');
            // console.log(test2)
        });
    });
});
//# sourceMappingURL=common.spec.js.map