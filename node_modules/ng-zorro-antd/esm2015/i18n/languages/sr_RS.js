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
import Calendar from './calendar/sr_RS';
import DatePicker from './date-picker/sr_RS';
import Pagination from './pagination/sr_RS';
import TimePicker from './time-picker/sr_RS';
export default {
    locale: 'sr',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Filter',
        filterConfirm: 'Primeni filter',
        filterReset: 'Resetuj filter',
        selectAll: 'Obeleži sve na trenutnoj strani',
        selectInvert: 'Obrni selekciju na trenutnoj stranici'
    },
    Modal: {
        okText: 'U redu',
        cancelText: 'Otkaži',
        justOkText: 'U redu'
    },
    Popconfirm: {
        okText: 'U redu',
        cancelText: 'Otkaži'
    },
    Transfer: {
        searchPlaceholder: 'Pretražite ovde',
        itemUnit: 'stavka',
        itemsUnit: 'stavki'
    },
    Upload: {
        uploading: 'Slanje...',
        removeFile: 'Ukloni fajl',
        uploadError: 'Greška prilikom slanja',
        previewFile: 'Pogledaj fajl'
    },
    Empty: {
        description: 'Nema podataka'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JfUlMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJsYW5ndWFnZXMvc3JfUlMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxlQUFlO0lBQ2IsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBQ1IsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLFFBQVE7UUFDckIsYUFBYSxFQUFFLGdCQUFnQjtRQUMvQixXQUFXLEVBQUUsZ0JBQWdCO1FBQzdCLFNBQVMsRUFBRSxpQ0FBaUM7UUFDNUMsWUFBWSxFQUFFLHVDQUF1QztLQUN0RDtJQUNELEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxRQUFRLEVBQUU7UUFDUixpQkFBaUIsRUFBRSxpQkFBaUI7UUFDcEMsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLFFBQVE7S0FDcEI7SUFDRCxNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUUsV0FBVztRQUN0QixVQUFVLEVBQUUsYUFBYTtRQUN6QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFdBQVcsRUFBRSxlQUFlO0tBQzdCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLGVBQWU7S0FDN0I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyL3NyX1JTJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4vZGF0ZS1waWNrZXIvc3JfUlMnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uL3NyX1JTJztcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvc3JfUlMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvY2FsZTogJ3NyJyxcbiAgUGFnaW5hdGlvbixcbiAgRGF0ZVBpY2tlcixcbiAgVGltZVBpY2tlcixcbiAgQ2FsZW5kYXIsXG4gIFRhYmxlOiB7XG4gICAgZmlsdGVyVGl0bGU6ICdGaWx0ZXInLFxuICAgIGZpbHRlckNvbmZpcm06ICdQcmltZW5pIGZpbHRlcicsXG4gICAgZmlsdGVyUmVzZXQ6ICdSZXNldHVqIGZpbHRlcicsXG4gICAgc2VsZWN0QWxsOiAnT2JlbGXFvmkgc3ZlIG5hIHRyZW51dG5vaiBzdHJhbmknLFxuICAgIHNlbGVjdEludmVydDogJ09icm5pIHNlbGVrY2lqdSBuYSB0cmVudXRub2ogc3RyYW5pY2knXG4gIH0sXG4gIE1vZGFsOiB7XG4gICAgb2tUZXh0OiAnVSByZWR1JyxcbiAgICBjYW5jZWxUZXh0OiAnT3RrYcW+aScsXG4gICAganVzdE9rVGV4dDogJ1UgcmVkdSdcbiAgfSxcbiAgUG9wY29uZmlybToge1xuICAgIG9rVGV4dDogJ1UgcmVkdScsXG4gICAgY2FuY2VsVGV4dDogJ090a2HFvmknXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdQcmV0cmHFvml0ZSBvdmRlJyxcbiAgICBpdGVtVW5pdDogJ3N0YXZrYScsXG4gICAgaXRlbXNVbml0OiAnc3RhdmtpJ1xuICB9LFxuICBVcGxvYWQ6IHtcbiAgICB1cGxvYWRpbmc6ICdTbGFuamUuLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdVa2xvbmkgZmFqbCcsXG4gICAgdXBsb2FkRXJyb3I6ICdHcmXFoWthIHByaWxpa29tIHNsYW5qYScsXG4gICAgcHJldmlld0ZpbGU6ICdQb2dsZWRhaiBmYWpsJ1xuICB9LFxuICBFbXB0eToge1xuICAgIGRlc2NyaXB0aW9uOiAnTmVtYSBwb2RhdGFrYSdcbiAgfVxufTtcbiJdfQ==