/*
 * @Author: your name
 * @Date: 2022-04-28 17:14:10
 * @LastEditTime: 2022-04-28 17:16:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3-ts-cms/src/api/login/test.ts
 */
import Test from './class';

const test = new Test();

console.log(test.status);
test.setStatus(123);
console.log(test.status);
