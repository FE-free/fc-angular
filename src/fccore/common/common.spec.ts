import { fakeAsync, async, tick } from '@angular/core/testing';
import { CommonService } from './common';
/*
 * @Author: honghong
 * @Date: 2020-02-13 17:36:24
 * @LastEditors: honghong
 * @LastEditTime : 2020-02-14 12:30:46
 * @Description:
 * @email: 3300536651@qq.com
 */
describe('commonService', () => {
  // 发生事件 待研究
  // describe('观察者模式', () => {
  //   it('event1 should be describe', (done) => {
  //     // 订阅事件
  //     const subscribeTest1 = CommonService.subscribe('testEvent1', (result) => {
  //       // expect(true).toBe(true);
  //       expect(result.eventName).toBe('testEvent1');
  //       expect(result.param.number).toBe(18);
  //       done();
  //     });
  //     CommonService.subscribe('testEventNull1', null);
  //     // 发起事件
  //     CommonService.event('testEvent1', {
  //       number: 18,
  //       title: 'hello1'
  //     });
  //     // if (subscribeTest1) {
  //     //   subscribeTest1.unsubscribe();
  //     // }
  //     done();
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
  })
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
  // 秒数转时间
  describe('#getDateByMilliseconds function', () => {
    const test1 = CommonService.getDateByMilliseconds(1530802447067);
    // console.log(test1); // 例如Thu Jul 05 2018 22:54:07 GMT+0800 (China Standard Time)
    it('getDateByMilliseconds type should be Date', () => {
      expect(test1 instanceof Date).toBe(true);
    });
  });
});
