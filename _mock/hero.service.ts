/*
 * @Author: honghong
 * @Date: 2020-02-27 13:11:24
 * @LastEditors: honghong
 * @LastEditTime: 2020-03-01 11:32:03
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

@Injectable()
export class HeroService {
    // static fruitsCategories = [
    //     {
    //         name: 'Achene'
    //     }, {
    //         name: 'Berry'
    //     }, {
    //         name: 'Caryopisis'
    //     }, {
    //         name: 'Drupe'
    //     }, {
    //         name: 'Legume'
    //     }, {
    //         name: 'Nut'
    //     }
    // ];
    static fruitsCategories = [
             'Achene',
         'Berry',
         'Caryopisis',
          'Drupe',
          'Legume',
            'Nut'
    ];
    static animalsCategories = [
        'Mammals',
        'Birds',
        'Reptiles',
        'Amphibians',
        'Fishes',
        'Insects',
        'Crustaceans'
    ];
    static citysCategories = [
        'Beijing',
        'Tianjing',
        'Shanghai',
        'Hangzhou',
        'Nanjing',
        'Chengdu',
        'Shenzhen'
    ];
    /**
     * 水果分类
     */
    static getFruitsCategories(): Observable<any> {
        return observableOf(HeroService.fruitsCategories);
    }
    /**
     * 动物分类
     */
    static getAnimalsCategories(): Observable<any> {
        return observableOf(HeroService.animalsCategories);
    }
    /**
     * 城市分类
     */
    static getCitysCategories(): Observable<any> {
        return observableOf(HeroService.citysCategories);
    }
}
