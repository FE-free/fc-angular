/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 公共方法
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:42:53
 */
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ providedIn: 'root' })
export class CommonService {
  static eventEmit: EventEmitter<any> = new EventEmitter()
  static base64encode: any
  static utf16to8: any
  static utf8to16: any
  static base64decode: any
  constructor() { }
  /**
   * 发生事件
   * @param actCode 事件名称
   */
  static event(eventName: string, param: any): void {
    this.eventEmit.emit({
      eventName: eventName,
      param: param
    })
  }
  /**
   * 订阅事件
   * @param 获取
   * @param 方法
   */
  static subscribe(actCode: string, func: Function) {
    return this.eventEmit.subscribe(function (value) {
      if (value.eventName === actCode) {
        return func(value)
      } else {
        return func(null)
      }
    })
  }
  private base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  private base64DecodeChars = new Array(
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    62,
    -1,
    -1,
    -1,
    63,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    -1,
    -1,
    -1,
    -1,
    -1
  )
  /**
   * base64编码
   * @param {Object} str
   */
  private base64encode(str) {
    var out, i, len
    var c1, c2, c3
    len = str.length
    i = 0
    out = ''
    while (i < len) {
      c1 = str.charCodeAt(i++) & 0xff
      if (i == len) {
        out += this.base64EncodeChars.charAt(c1 >> 2)
        out += this.base64EncodeChars.charAt((c1 & 0x3) << 4)
        out += '=='
        break
      }
      c2 = str.charCodeAt(i++)
      if (i == len) {
        out += this.base64EncodeChars.charAt(c1 >> 2)
        out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4))
        out += this.base64EncodeChars.charAt((c2 & 0xf) << 2)
        out += '='
        break
      }
      c3 = str.charCodeAt(i++)
      out += this.base64EncodeChars.charAt(c1 >> 2)
      out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4))
      out += this.base64EncodeChars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6))
      out += this.base64EncodeChars.charAt(c3 & 0x3f)
    }
    return out
  }
  /**
   * base64解码
   * @param {Object} str
   */
  private base64decode(str) {
    var c1, c2, c3, c4
    var i, len, out
    len = str.length
    i = 0
    out = ''
    while (i < len) {
      /* c1 */
      do {
        c1 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff]
      } while (i < len && c1 == -1)
      if (c1 == -1) break
      /* c2 */
      do {
        c2 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff]
      } while (i < len && c2 == -1)
      if (c2 == -1) break
      out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4))
      /* c3 */
      do {
        c3 = str.charCodeAt(i++) & 0xff
        if (c3 == 61) return out
        c3 = this.base64DecodeChars[c3]
      } while (i < len && c3 == -1)
      if (c3 == -1) break
      out += String.fromCharCode(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2))
      /* c4 */
      do {
        c4 = str.charCodeAt(i++) & 0xff
        if (c4 == 61) return out
        c4 = this.base64DecodeChars[c4]
      } while (i < len && c4 == -1)
      if (c4 == -1) break
      out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }
    return out
  }
  /**
   * utf16转utf8
   * @param {Object} str
   */
  private utf16to8(str) {
    var out, i, len, c
    out = ''
    len = str.length
    for (i = 0; i < len; i++) {
      c = str.charCodeAt(i)
      if (c >= 0x0001 && c <= 0x007f) {
        out += str.charAt(i)
      } else if (c > 0x07ff) {
        out += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f))
        out += String.fromCharCode(0x80 | ((c >> 6) & 0x3f))
        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f))
      } else {
        out += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f))
        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f))
      }
    }
    return out
  }
  /**
   * utf8转utf16
   * @param {Object} str
   */
  private utf8to16(str) {
    var out, i, len, c
    var char2, char3
    out = ''
    len = str.length
    i = 0
    while (i < len) {
      c = str.charCodeAt(i++)
      switch (c >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          // 0xxxxxxx
          out += str.charAt(i - 1)
          break
        case 12:
        case 13:
          // 110x xxxx 10xx xxxx
          char2 = str.charCodeAt(i++)
          out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f))
          break
        case 14:
          // 1110 xxxx10xx xxxx10xx xxxx
          char2 = str.charCodeAt(i++)
          char3 = str.charCodeAt(i++)
          out += String.fromCharCode(((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0))
          break
      }
    }
    return out
  }
  /**
   * 加密
   */
  static enCode64(str: any): any {
    if (str == undefined) {
      return ''
    }
    return this.base64encode(this.utf16to8(str))
  }
  /**
   * base64解密
   */
  static deCode64(str: any): any {
    if (str == undefined) {
      return ''
    }
    return this.utf8to16(this.base64decode(str))
  }
  /**
   * 根据模块及资源获取到url
   * @param moduleId 模块id
   * @param resId 资源id
   */
  static getUrlBy(moduleId: string, resId: string, act: string): string {
    return moduleId + '/' + resId + '/' + act
  }
  /**
   * 获取随机数
   * @param n 范围内的数值
   */
  static Random(n: any): string {
    var chars = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]
    var res = ''
    for (var i = 0; i < n; i++) {
      var id = Math.ceil(Math.random() * 35)
      res += chars[id]
    }
    return res
  }
  /**
   * 获取当前时间戳
   */
  static getMilliseconds(): number {
    return Date.now()
  }
  /**
   * 获取时间戳
   * @param date 当前时间
   */
  static getMillisecondsFromDate(date: string): number {
    return Date.parse(date)
  }
  /**
   * 秒数转时间
   * @param seconds 秒数
   */
  static getDateByMilliseconds(seconds: number): Date {
    return new Date(seconds)
  }
  /**
   * 获取当前时间秒数
   */
  static getTimestamp(): number {
    return this.getMilliseconds() / 1000
  }
  /**
   * 根据指定日期获取秒数
   * @param date 指定日期
   */
  static getTimestampFromDate(date: string): number {
    return Date.parse(date) / 1000
  }
  /**
   * 秒数转日期
   * @param seconds 秒数
   */
  static getDateByTimetamp(seconds: number): Date {
    return new Date(seconds * 1000)
  }
  /**
   * 获取当前年月
   * @param seg 分隔符 / -
   */
  static getYearMonth(seg?: string): string {
    if (seg === void 0) {
      seg = '-'
    }
    var myDate = new Date()
    var month = myDate.getMonth() + 1
    if (month < 10) {
      return myDate.getFullYear() + seg + '0' + month
    } else {
      return myDate.getFullYear() + seg + month
    }
  }
  /**
   * 获取当前年月日
   * @param seg 分隔符
   */
  static getDate(seg?: string): string {
    if (seg === void 0) {
      seg = '-'
    }
    var myDate = new Date()
    var month = myDate.getMonth() + 1
    var day = myDate.getDate()
    var value = ''
    if (month < 10) {
      value = myDate.getFullYear() + seg + '0' + month
    } else {
      value = myDate.getFullYear() + seg + month
    }
    if (day < 10) {
      value += seg + '0' + day
    } else {
      value += seg + day
    }
    return value
  }
  /**
   * @description: 时间格式化处理
   * @param {type} 格式化字符串
   * @return:
   */
  static dateFormat(date: Date, fmt: string): string {
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o)
      if (new RegExp('(' + k + ')').test(fmt))
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    return fmt
  }
  /**
   * @description: 时间格式化处理
   * @param {type} 格式化字符串
   * @return:
   */
  static stringDateFormat(dateStr: string, fmt: string): string {
    return this.dateFormat(this.stringToDate(dateStr), fmt)
  }
  /**
   * @description: 时间戳格式化处理
   * @param {type} 格式化
   * @return:
   */
  static timestampFormat(timestamp: number, fmt: string): string {
    return this.dateFormat(new Date(timestamp), fmt)
  }
  /**
   * 字符串转时间（yyyy-MM-dd HH:mm:ss、yyyy/M/d HH:mm:ss、yyyyMMddHHmmss、yyyyMMddHHmm、yyyyMMdd）
   * result （分钟）
   */
  static stringToDate(fDate: string): Date {
    if (!fDate) {
      return null
    }
    var fullDate = fDate.split('-')
    if (fullDate.length > 1) {
      return new Date(Date.parse(fDate.replace(/-/g, '/')))
    }
    fullDate = fDate.split('/')
    if (fullDate.length > 1) {
      return new Date(Date.parse(fDate.replace(/\//g, '/')))
    }
    var year = ''
    var month = ''
    var day = ''
    if (fDate.length > 7) {
      year = fDate.substr(0, 4)
      month = fDate.substr(4, 2)
      day = fDate.substr(6, 2)
    }
    var hour = ''
    var min = ''
    if (fDate.length > 11) {
      hour = fDate.substr(8, 2)
      min = fDate.substr(10, 2)
    }
    var second = ''
    if (fDate.length > 13) {
      second = fDate.substr(12, 2)
    }
    if (fDate.length === 8) return new Date(Date.parse(year + '/' + month + '/' + day))
    if (fDate.length === 12)
      return new Date(Date.parse(year + '/' + month + '/' + day + ' ' + hour + ':' + min))
    if (fDate.length === 14)
      return new Date(Date.parse(year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + second))
  }
  /**
   * 数值格式化
   * @param num 数值
   * @param format 格式化
   */
  static numberFormat(num: number, format: string): string {
    var numberal = window['numeral'](num)
    return numberal.format(format)
  }
  /****
   * 替换文件
   * text :为源文件
   * rep:需要替换的符号
   * rex:替换后的符号
   * **/
  static textReplaceAll(text: string, regexp: string, replacement: string): string {
    return text.replace(regexp, replacement)
  }
  /**
   * md5加密
   * @param string 被md5加密的字符串
   */
  static md5Encode(str: string): string {
    function RotateLeft(lValue, iShiftBits) {
      return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits))
    }
    function AddUnsigned(lX, lY) {
      var lX4, lY4, lX8, lY8, lResult
      lX8 = lX & 0x80000000
      lY8 = lY & 0x80000000
      lX4 = lX & 0x40000000
      lY4 = lY & 0x40000000
      lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff)
      if (lX4 & lY4) {
        return lResult ^ 0x80000000 ^ lX8 ^ lY8
      }
      if (lX4 | lY4) {
        if (lResult & 0x40000000) {
          return lResult ^ 0xc0000000 ^ lX8 ^ lY8
        } else {
          return lResult ^ 0x40000000 ^ lX8 ^ lY8
        }
      } else {
        return lResult ^ lX8 ^ lY8
      }
    }
    function F(x, y, z) {
      return (x & y) | (~x & z)
    }
    function G(x, y, z) {
      return (x & z) | (y & ~z)
    }
    function H(x, y, z) {
      return x ^ y ^ z
    }
    function I(x, y, z) {
      return y ^ (x | ~z)
    }
    function FF(a, b, c, d, x, s, ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac))
      return AddUnsigned(RotateLeft(a, s), b)
    }
    function GG(a, b, c, d, x, s, ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac))
      return AddUnsigned(RotateLeft(a, s), b)
    }
    function HH(a, b, c, d, x, s, ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac))
      return AddUnsigned(RotateLeft(a, s), b)
    }
    function II(a, b, c, d, x, s, ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac))
      return AddUnsigned(RotateLeft(a, s), b)
    }
    function ConvertToWordArray(str) {
      var lWordCount
      var lMessageLength = str.length
      var lNumberOfWords_temp1 = lMessageLength + 8
      var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64
      var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16
      var lWordArray = Array(lNumberOfWords - 1)
      var lBytePosition = 0
      var lByteCount = 0
      while (lByteCount < lMessageLength) {
        lWordCount = (lByteCount - (lByteCount % 4)) / 4
        lBytePosition = (lByteCount % 4) * 8
        lWordArray[lWordCount] = lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition)
        lByteCount++
      }
      lWordCount = (lByteCount - (lByteCount % 4)) / 4
      lBytePosition = (lByteCount % 4) * 8
      lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition)
      lWordArray[lNumberOfWords - 2] = lMessageLength << 3
      lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29
      return lWordArray
    }
    function WordToHex(lValue) {
      var WordToHexValue = '',
        WordToHexValue_temp = '',
        lByte,
        lCount
      for (lCount = 0; lCount <= 3; lCount++) {
        lByte = (lValue >>> (lCount * 8)) & 255
        WordToHexValue_temp = '0' + lByte.toString(16)
        WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2)
      }
      return WordToHexValue
    }
    function Utf8Encode(str) {
      str = str.replace(/\r\n/g, '\n')
      var utftext = ''
      for (var n = 0; n < str.length; n++) {
        var c = str.charCodeAt(n)
        if (c < 128) {
          utftext += String.fromCharCode(c)
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode((c >> 6) | 192)
          utftext += String.fromCharCode((c & 63) | 128)
        } else {
          utftext += String.fromCharCode((c >> 12) | 224)
          utftext += String.fromCharCode(((c >> 6) & 63) | 128)
          utftext += String.fromCharCode((c & 63) | 128)
        }
      }
      return utftext
    }
    var x = Array()
    var k, AA, BB, CC, DD, a, b, c, d
    var S11 = 7,
      S12 = 12,
      S13 = 17,
      S14 = 22
    var S21 = 5,
      S22 = 9,
      S23 = 14,
      S24 = 20
    var S31 = 4,
      S32 = 11,
      S33 = 16,
      S34 = 23
    var S41 = 6,
      S42 = 10,
      S43 = 15,
      S44 = 21
    str = Utf8Encode(str)
    x = ConvertToWordArray(str)
    a = 0x67452301
    b = 0xefcdab89
    c = 0x98badcfe
    d = 0x10325476
    for (k = 0; k < x.length; k += 16) {
      AA = a
      BB = b
      CC = c
      DD = d
      a = FF(a, b, c, d, x[k + 0], S11, 0xd76aa478)
      d = FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756)
      c = FF(c, d, a, b, x[k + 2], S13, 0x242070db)
      b = FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee)
      a = FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf)
      d = FF(d, a, b, c, x[k + 5], S12, 0x4787c62a)
      c = FF(c, d, a, b, x[k + 6], S13, 0xa8304613)
      b = FF(b, c, d, a, x[k + 7], S14, 0xfd469501)
      a = FF(a, b, c, d, x[k + 8], S11, 0x698098d8)
      d = FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af)
      c = FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1)
      b = FF(b, c, d, a, x[k + 11], S14, 0x895cd7be)
      a = FF(a, b, c, d, x[k + 12], S11, 0x6b901122)
      d = FF(d, a, b, c, x[k + 13], S12, 0xfd987193)
      c = FF(c, d, a, b, x[k + 14], S13, 0xa679438e)
      b = FF(b, c, d, a, x[k + 15], S14, 0x49b40821)
      a = GG(a, b, c, d, x[k + 1], S21, 0xf61e2562)
      d = GG(d, a, b, c, x[k + 6], S22, 0xc040b340)
      c = GG(c, d, a, b, x[k + 11], S23, 0x265e5a51)
      b = GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa)
      a = GG(a, b, c, d, x[k + 5], S21, 0xd62f105d)
      d = GG(d, a, b, c, x[k + 10], S22, 0x2441453)
      c = GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681)
      b = GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8)
      a = GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6)
      d = GG(d, a, b, c, x[k + 14], S22, 0xc33707d6)
      c = GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87)
      b = GG(b, c, d, a, x[k + 8], S24, 0x455a14ed)
      a = GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905)
      d = GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8)
      c = GG(c, d, a, b, x[k + 7], S23, 0x676f02d9)
      b = GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a)
      a = HH(a, b, c, d, x[k + 5], S31, 0xfffa3942)
      d = HH(d, a, b, c, x[k + 8], S32, 0x8771f681)
      c = HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122)
      b = HH(b, c, d, a, x[k + 14], S34, 0xfde5380c)
      a = HH(a, b, c, d, x[k + 1], S31, 0xa4beea44)
      d = HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9)
      c = HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60)
      b = HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70)
      a = HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6)
      d = HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa)
      c = HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085)
      b = HH(b, c, d, a, x[k + 6], S34, 0x4881d05)
      a = HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039)
      d = HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5)
      c = HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8)
      b = HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665)
      a = II(a, b, c, d, x[k + 0], S41, 0xf4292244)
      d = II(d, a, b, c, x[k + 7], S42, 0x432aff97)
      c = II(c, d, a, b, x[k + 14], S43, 0xab9423a7)
      b = II(b, c, d, a, x[k + 5], S44, 0xfc93a039)
      a = II(a, b, c, d, x[k + 12], S41, 0x655b59c3)
      d = II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92)
      c = II(c, d, a, b, x[k + 10], S43, 0xffeff47d)
      b = II(b, c, d, a, x[k + 1], S44, 0x85845dd1)
      a = II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f)
      d = II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0)
      c = II(c, d, a, b, x[k + 6], S43, 0xa3014314)
      b = II(b, c, d, a, x[k + 13], S44, 0x4e0811a1)
      a = II(a, b, c, d, x[k + 4], S41, 0xf7537e82)
      d = II(d, a, b, c, x[k + 11], S42, 0xbd3af235)
      c = II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb)
      b = II(b, c, d, a, x[k + 9], S44, 0xeb86d391)
      a = AddUnsigned(a, AA)
      b = AddUnsigned(b, BB)
      c = AddUnsigned(c, CC)
      d = AddUnsigned(d, DD)
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d)
    return temp.toLowerCase()
  }
  /**
   *
   * @param {当前值} value
   * @param {默认值} defaultValue
   */
  static getVbyNull(value: any, defaultValue: any): any {
    if (value === null || value === undefined || value === 'null') {
      return defaultValue
    } else {
      return value
    }
  }
  /**
   *
   * @description 数组转树结构
   * @param list 数据列表
   * @param parentValue 上级编码的值
   * @param code 编码
   * @param name 名称
   * @param subtitle 小标题
   * @param parent 父级编码字段
   */
  static listtotree(list: any[], parentValue: any, code: string, name: string, parent: string): any[] {
    let _this = this
    let nodes = []
    list.forEach(function (item) {
      if (parentValue === item[parent]) {
        var node_1 = {
          id: item.ID,
          expanded: true,
          code: item[code],
          name: item[name],
          children: [],
          hasChildren: false,
          DATA: item
        }
        list.forEach(function (child) {
          if (item[code] === child[parent]) {
            var childNode = {
              id: item.ID,
              expanded: false,
              code: child[code],
              name: child[name],
              children: [],
              hasChildren: false,
              DATA: child
            }
            childNode.children = _this.listtotree(list, child[code], code, name, parent)
            node_1.hasChildren = true
            node_1.children.push(childNode)
          }
        })
        nodes.push(node_1)
      }
    })
    return nodes
  }
  /**
   * 把字符串的参数替换成data中有的值参数形式为:{PARAMID:''}
   * @param data 数据对象
   * @param dataStr 字符串
   */
  static getStringFilterByParam(data: any, dataStr: string): string {
    var rtn = ''
    var ds = dataStr.split(':{')
    ds.forEach(function (item) {
      if (item.indexOf('}') === -1) {
        rtn += item
      } else {
        var dcs = item.split('}')
        if (dcs.length > 1) {
          rtn += data[dcs[0]] + dcs[1]
        }
      }
    })
    return rtn
  }
  /**
   *
   * @description 数组转树结构
   * @param id id值
   * @param list 数据列表
   * @param parentValue 上级编码的值
   * @param code 编码
   * @param name 名称
   * @param subtitle 小标题
   * @param parent 父级编码字段
   * @param childFieldCode 是否有子节点的名称
   */
  static listtotreeasync(list: any[], code: string, name: string, childFieldCode: string): any[] {
    var _this = this
    var nodes = []
    list.forEach(function (item) {
      var node = {
        id: item.ID,
        code: item[code],
        name: _this.getStringFilterByParam(item, name),
        subTitle: item[code],
        hasChildren: false,
        expanded: false,
        disableCheckbox: false,
        DATA: item
      }
      if (item[childFieldCode] === 'Y') {
        node.hasChildren = true
      }
      nodes.push(node)
    })
    return nodes
  }
  /**
   * 当前值作为observable
   * 适合在有值的适合返回
   * @param {?} 当前值
   * @return {?}
   */
  static createObservable(obj: any): Observable<any> {
    return Observable.create(function (observer) {
      observer.next(obj)
      observer.complete()
    })
  }
  /**
   * 串行执行两个订阅任务
   * @param obs1 Observable
   * @param obs2 Observable
   */
  //  createObservableConcat(obs1: Observable<any>, obs2: Observable<any>): Observable<any> {
  //   return Observable.concat(obs1, obs2)
  // }
  /**
   * 并行执行多个订阅任务
   * @param obs1 Observable
   * @param obs2 Observable
   */
  //  createObservableJoin(obs1: Observable<any>[]): Observable<any> {
  //   return Observable.forkJoin(obs1)
  // }
  /**
   * 复制对象
   * @param obj 复制对象
   */
  static cloneObj(obj: any, exceptKey?: string): any {
    if (typeof obj === 'string') {
      return obj + ''
    }
    let datas = {}
    Object.keys(obj).forEach(function (key) {
      if (exceptKey && exceptKey.length !== 0) {
        if (exceptKey !== key) {
          datas[key] = obj[key]
        }
      } else {
        datas[key] = obj[key]
      }
    })
    return datas
  }
  /**
   * 复制对象
   * @param obj 复制对象
   */
  static cloneArray(objs: any, exceptKey?: string): any {
    let _this = this
    if (typeof objs === 'string') {
      return objs + ''
    }
    let datas = []
    Object.keys(objs).forEach(function (key) {
      if (exceptKey && exceptKey.length !== 0) {
        if (exceptKey !== key) {
          if (typeof objs === 'object') {
            datas.push(_this.cloneObj(objs[key], exceptKey))
          } else {
            datas.push(objs[key])
          }
        }
      } else {
        datas.push(_this.cloneObj(objs[key]))
      }
    })
    return datas
  }
}
