/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import Calendar from './calendar/vi_VN';
import DatePicker from './date-picker/vi_VN';
import Pagination from './pagination/vi_VN';
import TimePicker from './time-picker/vi_VN';
export default {
    locale: 'vi',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Bộ ',
        filterConfirm: 'OK',
        filterReset: 'Tạo Lại',
        selectAll: 'Chọn Tất Cả',
        selectInvert: 'Chọn Ngược Lại'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Huỷ',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Huỷ'
    },
    Transfer: {
        searchPlaceholder: 'Tìm ở đây',
        itemUnit: 'mục',
        itemsUnit: 'mục'
    },
    Upload: {
        uploading: 'Đang tải lên...',
        removeFile: 'Gỡ bỏ tập tin',
        uploadError: 'Lỗi tải lên',
        previewFile: 'Xem thử tập tin'
    },
    Empty: {
        description: 'Trống'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlfVk4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJsYW5ndWFnZXMvdmlfVk4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxlQUFlO0lBQ2IsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBQ1IsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLEtBQUs7UUFDbEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsU0FBUyxFQUFFLGFBQWE7UUFDeEIsWUFBWSxFQUFFLGdCQUFnQjtLQUMvQjtJQUNELEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLEtBQUs7UUFDakIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsaUJBQWlCLEVBQUUsV0FBVztRQUM5QixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLGlCQUFpQjtRQUM1QixVQUFVLEVBQUUsZUFBZTtRQUMzQixXQUFXLEVBQUUsYUFBYTtRQUMxQixXQUFXLEVBQUUsaUJBQWlCO0tBQy9CO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLE9BQU87S0FDckI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyL3ZpX1ZOJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4vZGF0ZS1waWNrZXIvdmlfVk4nO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uL3ZpX1ZOJztcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvdmlfVk4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvY2FsZTogJ3ZpJyxcbiAgUGFnaW5hdGlvbixcbiAgRGF0ZVBpY2tlcixcbiAgVGltZVBpY2tlcixcbiAgQ2FsZW5kYXIsXG4gIFRhYmxlOiB7XG4gICAgZmlsdGVyVGl0bGU6ICdC4buZICcsXG4gICAgZmlsdGVyQ29uZmlybTogJ09LJyxcbiAgICBmaWx0ZXJSZXNldDogJ1ThuqFvIEzhuqFpJyxcbiAgICBzZWxlY3RBbGw6ICdDaOG7jW4gVOG6pXQgQ+G6oycsXG4gICAgc2VsZWN0SW52ZXJ0OiAnQ2jhu41uIE5nxrDhu6NjIEzhuqFpJ1xuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnSHXhu7cnLFxuICAgIGp1c3RPa1RleHQ6ICdPSydcbiAgfSxcbiAgUG9wY29uZmlybToge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnSHXhu7cnXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdUw6xtIOG7nyDEkcOieScsXG4gICAgaXRlbVVuaXQ6ICdt4bulYycsXG4gICAgaXRlbXNVbml0OiAnbeG7pWMnXG4gIH0sXG4gIFVwbG9hZDoge1xuICAgIHVwbG9hZGluZzogJ8SQYW5nIHThuqNpIGzDqm4uLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdH4buhIGLhu48gdOG6rXAgdGluJyxcbiAgICB1cGxvYWRFcnJvcjogJ0zhu5dpIHThuqNpIGzDqm4nLFxuICAgIHByZXZpZXdGaWxlOiAnWGVtIHRo4butIHThuq1wIHRpbidcbiAgfSxcbiAgRW1wdHk6IHtcbiAgICBkZXNjcmlwdGlvbjogJ1Ry4buRbmcnXG4gIH1cbn07XG4iXX0=