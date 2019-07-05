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
import Calendar from './calendar/pl_PL';
import DatePicker from './date-picker/pl_PL';
import Pagination from './pagination/pl_PL';
import TimePicker from './time-picker/pl_PL';
export default {
    locale: 'pl',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Menu filtra',
        filterConfirm: 'OK',
        filterReset: 'Wyczyść',
        selectAll: 'Zaznacz bieżącą stronę',
        selectInvert: 'Odwróć zaznaczenie'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Anuluj',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Anuluj'
    },
    Transfer: {
        searchPlaceholder: 'Szukaj',
        itemUnit: 'obiekt',
        itemsUnit: 'obiekty'
    },
    Upload: {
        uploading: 'Wysyłanie...',
        removeFile: 'Usuń plik',
        uploadError: 'Błąd wysyłania',
        previewFile: 'Podejrzyj plik'
    },
    Empty: {
        description: 'Brak danych'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxfUEwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJsYW5ndWFnZXMvcGxfUEwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxlQUFlO0lBQ2IsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBQ1IsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLGFBQWE7UUFDMUIsYUFBYSxFQUFFLElBQUk7UUFDbkIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsU0FBUyxFQUFFLHdCQUF3QjtRQUNuQyxZQUFZLEVBQUUsb0JBQW9CO0tBQ25DO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxRQUFRLEVBQUU7UUFDUixpQkFBaUIsRUFBRSxRQUFRO1FBQzNCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxTQUFTO0tBQ3JCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLGNBQWM7UUFDekIsVUFBVSxFQUFFLFdBQVc7UUFDdkIsV0FBVyxFQUFFLGdCQUFnQjtRQUM3QixXQUFXLEVBQUUsZ0JBQWdCO0tBQzlCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLGFBQWE7S0FDM0I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyL3BsX1BMJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4vZGF0ZS1waWNrZXIvcGxfUEwnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uL3BsX1BMJztcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvcGxfUEwnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvY2FsZTogJ3BsJyxcbiAgUGFnaW5hdGlvbixcbiAgRGF0ZVBpY2tlcixcbiAgVGltZVBpY2tlcixcbiAgQ2FsZW5kYXIsXG4gIFRhYmxlOiB7XG4gICAgZmlsdGVyVGl0bGU6ICdNZW51IGZpbHRyYScsXG4gICAgZmlsdGVyQ29uZmlybTogJ09LJyxcbiAgICBmaWx0ZXJSZXNldDogJ1d5Y3p5xZvEhycsXG4gICAgc2VsZWN0QWxsOiAnWmF6bmFjeiBiaWXFvMSFY8SFIHN0cm9uxJknLFxuICAgIHNlbGVjdEludmVydDogJ09kd3LDs8SHIHphem5hY3plbmllJ1xuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQW51bHVqJyxcbiAgICBqdXN0T2tUZXh0OiAnT0snXG4gIH0sXG4gIFBvcGNvbmZpcm06IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0FudWx1aidcbiAgfSxcbiAgVHJhbnNmZXI6IHtcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1N6dWthaicsXG4gICAgaXRlbVVuaXQ6ICdvYmlla3QnLFxuICAgIGl0ZW1zVW5pdDogJ29iaWVrdHknXG4gIH0sXG4gIFVwbG9hZDoge1xuICAgIHVwbG9hZGluZzogJ1d5c3nFgmFuaWUuLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdVc3XFhCBwbGlrJyxcbiAgICB1cGxvYWRFcnJvcjogJ0LFgsSFZCB3eXN5xYJhbmlhJyxcbiAgICBwcmV2aWV3RmlsZTogJ1BvZGVqcnp5aiBwbGlrJ1xuICB9LFxuICBFbXB0eToge1xuICAgIGRlc2NyaXB0aW9uOiAnQnJhayBkYW55Y2gnXG4gIH1cbn07XG4iXX0=