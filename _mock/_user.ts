
import * as Mock from 'mockjs';
var userList = [];
var total = 100;
var users = [
    '景天',
    '唐雪见',
    '龙葵',
    '紫萱',
    '徐长卿',
    '花楹',
    '邪剑仙',
    '重楼',
    '李逍遥',
    '赵灵儿',
    '林月如',
    '阿奴'
];
function getUsers(): any[] {
    for (let i = 0; i < total; i++) {
        userList.push({
            id: i + 1,
            userName: '',
            description: '这是个人介绍',
            age: Math.floor(Math.random() * 10) % 2,
        })
    }
    return userList;
}
var userInfo = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素

})
function getUserInfo() {

}
export const User = {
    '/userInfo': () => userInfo(),
    '/user': () => getUsers()
}