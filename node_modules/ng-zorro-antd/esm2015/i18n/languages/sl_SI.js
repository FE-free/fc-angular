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
import Calendar from './calendar/sl_SI';
import DatePicker from './date-picker/sl_SI';
import Pagination from './pagination/sl_SI';
import TimePicker from './time-picker/sl_SI';
export default {
    locale: 'sl',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Filter',
        filterConfirm: 'Filtriraj',
        filterReset: 'Pobriši filter',
        selectAll: 'Izberi vse na trenutni strani',
        selectInvert: 'Obrni izbor na trenutni strani'
    },
    Modal: {
        okText: 'V redu',
        cancelText: 'Prekliči',
        justOkText: 'V redu'
    },
    Popconfirm: {
        okText: 'v redu',
        cancelText: 'Prekliči'
    },
    Transfer: {
        searchPlaceholder: 'Išči tukaj',
        itemUnit: 'Objekt',
        itemsUnit: 'Objektov'
    },
    Upload: {
        uploading: 'Nalaganje...',
        removeFile: 'Odstrani datoteko',
        uploadError: 'Napaka pri nalaganju',
        previewFile: 'Predogled datoteke'
    },
    Empty: {
        description: 'Ni podatkov'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xfU0kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJsYW5ndWFnZXMvc2xfU0kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxlQUFlO0lBQ2IsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBQ1IsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLFFBQVE7UUFDckIsYUFBYSxFQUFFLFdBQVc7UUFDMUIsV0FBVyxFQUFFLGdCQUFnQjtRQUM3QixTQUFTLEVBQUUsK0JBQStCO1FBQzFDLFlBQVksRUFBRSxnQ0FBZ0M7S0FDL0M7SUFDRCxLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsUUFBUTtRQUNoQixVQUFVLEVBQUUsVUFBVTtRQUN0QixVQUFVLEVBQUUsUUFBUTtLQUNyQjtJQUNELFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLFVBQVUsRUFBRSxVQUFVO0tBQ3ZCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsaUJBQWlCLEVBQUUsWUFBWTtRQUMvQixRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsVUFBVTtLQUN0QjtJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFVBQVUsRUFBRSxtQkFBbUI7UUFDL0IsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxXQUFXLEVBQUUsb0JBQW9CO0tBQ2xDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLGFBQWE7S0FDM0I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyL3NsX1NJJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4vZGF0ZS1waWNrZXIvc2xfU0knO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uL3NsX1NJJztcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvc2xfU0knO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvY2FsZTogJ3NsJyxcbiAgUGFnaW5hdGlvbixcbiAgRGF0ZVBpY2tlcixcbiAgVGltZVBpY2tlcixcbiAgQ2FsZW5kYXIsXG4gIFRhYmxlOiB7XG4gICAgZmlsdGVyVGl0bGU6ICdGaWx0ZXInLFxuICAgIGZpbHRlckNvbmZpcm06ICdGaWx0cmlyYWonLFxuICAgIGZpbHRlclJlc2V0OiAnUG9icmnFoWkgZmlsdGVyJyxcbiAgICBzZWxlY3RBbGw6ICdJemJlcmkgdnNlIG5hIHRyZW51dG5pIHN0cmFuaScsXG4gICAgc2VsZWN0SW52ZXJ0OiAnT2JybmkgaXpib3IgbmEgdHJlbnV0bmkgc3RyYW5pJ1xuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ1YgcmVkdScsXG4gICAgY2FuY2VsVGV4dDogJ1ByZWtsacSNaScsXG4gICAganVzdE9rVGV4dDogJ1YgcmVkdSdcbiAgfSxcbiAgUG9wY29uZmlybToge1xuICAgIG9rVGV4dDogJ3YgcmVkdScsXG4gICAgY2FuY2VsVGV4dDogJ1ByZWtsacSNaSdcbiAgfSxcbiAgVHJhbnNmZXI6IHtcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ0nFocSNaSB0dWthaicsXG4gICAgaXRlbVVuaXQ6ICdPYmpla3QnLFxuICAgIGl0ZW1zVW5pdDogJ09iamVrdG92J1xuICB9LFxuICBVcGxvYWQ6IHtcbiAgICB1cGxvYWRpbmc6ICdOYWxhZ2FuamUuLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdPZHN0cmFuaSBkYXRvdGVrbycsXG4gICAgdXBsb2FkRXJyb3I6ICdOYXBha2EgcHJpIG5hbGFnYW5qdScsXG4gICAgcHJldmlld0ZpbGU6ICdQcmVkb2dsZWQgZGF0b3Rla2UnXG4gIH0sXG4gIEVtcHR5OiB7XG4gICAgZGVzY3JpcHRpb246ICdOaSBwb2RhdGtvdidcbiAgfVxufTtcbiJdfQ==