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
import Calendar from './calendar/fr_BE';
import DatePicker from './date-picker/fr_BE';
import Pagination from './pagination/fr_BE';
import TimePicker from './time-picker/fr_BE';
export default {
    locale: 'fr',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Filtrer',
        filterConfirm: 'OK',
        filterReset: 'Réinitialiser'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annuler',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annuler'
    },
    Transfer: {
        searchPlaceholder: 'Recherche',
        itemUnit: 'élément',
        itemsUnit: 'éléments'
    },
    Empty: {
        description: 'Aucune donnée'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJfQkUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJsYW5ndWFnZXMvZnJfQkUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxlQUFlO0lBQ2IsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBQ1IsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLFNBQVM7UUFDdEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsV0FBVyxFQUFFLGVBQWU7S0FDN0I7SUFDRCxLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsU0FBUztLQUN0QjtJQUNELFFBQVEsRUFBRTtRQUNSLGlCQUFpQixFQUFFLFdBQVc7UUFDOUIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsU0FBUyxFQUFFLFVBQVU7S0FDdEI7SUFDRCxLQUFLLEVBQUU7UUFDTCxXQUFXLEVBQUUsZUFBZTtLQUM3QjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvZnJfQkUnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9kYXRlLXBpY2tlci9mcl9CRSc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24vZnJfQkUnO1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci9mcl9CRSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9jYWxlOiAnZnInLFxuICBQYWdpbmF0aW9uLFxuICBEYXRlUGlja2VyLFxuICBUaW1lUGlja2VyLFxuICBDYWxlbmRhcixcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ0ZpbHRyZXInLFxuICAgIGZpbHRlckNvbmZpcm06ICdPSycsXG4gICAgZmlsdGVyUmVzZXQ6ICdSw6lpbml0aWFsaXNlcidcbiAgfSxcbiAgTW9kYWw6IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0FubnVsZXInLFxuICAgIGp1c3RPa1RleHQ6ICdPSydcbiAgfSxcbiAgUG9wY29uZmlybToge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQW5udWxlcidcbiAgfSxcbiAgVHJhbnNmZXI6IHtcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1JlY2hlcmNoZScsXG4gICAgaXRlbVVuaXQ6ICfDqWzDqW1lbnQnLFxuICAgIGl0ZW1zVW5pdDogJ8OpbMOpbWVudHMnXG4gIH0sXG4gIEVtcHR5OiB7XG4gICAgZGVzY3JpcHRpb246ICdBdWN1bmUgZG9ubsOpZSdcbiAgfVxufTtcbiJdfQ==