import { CommonService } from './common.service';

/*
 * @Author: honghong
 * @Date: 2020-02-13 17:36:24
 * @LastEditors  : honghong
 * @LastEditTime : 2020-02-14 12:30:46
 * @Description:
 * @email: 3300536651@qq.com
 */

describe('commonService', () => {
  // 测试getGuid()
  describe('getGuid() function', () => {
    let getGuidTest1 = CommonService.getGuid();
    let getGuidTest2 = CommonService.getGuid();
    let getGuidTest3 = CommonService.getGuid();
    it('should get a guid', () => {
      expect(getGuidTest1.length).toBe(36);
      expect(getGuidTest2.length).toBe(36);
      expect(getGuidTest3.length).toBe(36);
    });
  });
});
