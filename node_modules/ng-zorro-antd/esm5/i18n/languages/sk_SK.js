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
import Calendar from './calendar/sk_SK';
import DatePicker from './date-picker/sk_SK';
import Pagination from './pagination/sk_SK';
import TimePicker from './time-picker/sk_SK';
export default {
    locale: 'sk',
    Pagination: Pagination,
    DatePicker: DatePicker,
    TimePicker: TimePicker,
    Calendar: Calendar,
    Table: {
        filterTitle: 'Filter',
        filterConfirm: 'OK',
        filterReset: 'Obnoviť',
        selectAll: 'Vybrať všetko',
        selectInvert: 'Vybrať opačné'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Zrušiť',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Zrušiť'
    },
    Transfer: {
        searchPlaceholder: 'Vyhľadávanie',
        itemUnit: 'položka',
        itemsUnit: 'položiek'
    },
    Upload: {
        uploading: 'Nahrávanie...',
        removeFile: 'Odstrániť súbor',
        uploadError: 'Chyba pri nahrávaní',
        previewFile: 'Zobraziť súbor'
    },
    Empty: {
        description: 'Žiadne dáta'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tfU0suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJsYW5ndWFnZXMvc2tfU0sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxlQUFlO0lBQ2IsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVLFlBQUE7SUFDVixVQUFVLFlBQUE7SUFDVixVQUFVLFlBQUE7SUFDVixRQUFRLFVBQUE7SUFDUixLQUFLLEVBQUU7UUFDTCxXQUFXLEVBQUUsUUFBUTtRQUNyQixhQUFhLEVBQUUsSUFBSTtRQUNuQixXQUFXLEVBQUUsU0FBUztRQUN0QixTQUFTLEVBQUUsZUFBZTtRQUMxQixZQUFZLEVBQUUsZUFBZTtLQUM5QjtJQUNELEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLFFBQVE7UUFDcEIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsaUJBQWlCLEVBQUUsY0FBYztRQUNqQyxRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUUsVUFBVTtLQUN0QjtJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxlQUFlO1FBQzFCLFVBQVUsRUFBRSxpQkFBaUI7UUFDN0IsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxXQUFXLEVBQUUsZ0JBQWdCO0tBQzlCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLGFBQWE7S0FDM0I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyL3NrX1NLJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4vZGF0ZS1waWNrZXIvc2tfU0snO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uL3NrX1NLJztcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvc2tfU0snO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvY2FsZTogJ3NrJyxcbiAgUGFnaW5hdGlvbixcbiAgRGF0ZVBpY2tlcixcbiAgVGltZVBpY2tlcixcbiAgQ2FsZW5kYXIsXG4gIFRhYmxlOiB7XG4gICAgZmlsdGVyVGl0bGU6ICdGaWx0ZXInLFxuICAgIGZpbHRlckNvbmZpcm06ICdPSycsXG4gICAgZmlsdGVyUmVzZXQ6ICdPYm5vdmnFpScsXG4gICAgc2VsZWN0QWxsOiAnVnlicmHFpSB2xaFldGtvJyxcbiAgICBzZWxlY3RJbnZlcnQ6ICdWeWJyYcWlIG9wYcSNbsOpJ1xuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnWnJ1xaFpxaUnLFxuICAgIGp1c3RPa1RleHQ6ICdPSydcbiAgfSxcbiAgUG9wY29uZmlybToge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnWnJ1xaFpxaUnXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdWeWjEvmFkw6F2YW5pZScsXG4gICAgaXRlbVVuaXQ6ICdwb2xvxb5rYScsXG4gICAgaXRlbXNVbml0OiAncG9sb8W+aWVrJ1xuICB9LFxuICBVcGxvYWQ6IHtcbiAgICB1cGxvYWRpbmc6ICdOYWhyw6F2YW5pZS4uLicsXG4gICAgcmVtb3ZlRmlsZTogJ09kc3Ryw6FuacWlIHPDumJvcicsXG4gICAgdXBsb2FkRXJyb3I6ICdDaHliYSBwcmkgbmFocsOhdmFuw60nLFxuICAgIHByZXZpZXdGaWxlOiAnWm9icmF6acWlIHPDumJvcidcbiAgfSxcbiAgRW1wdHk6IHtcbiAgICBkZXNjcmlwdGlvbjogJ8W9aWFkbmUgZMOhdGEnXG4gIH1cbn07XG4iXX0=