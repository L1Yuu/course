"use strict";
/*
 * @Author: Blue
 * @Date: 2019-05-23 16:49:09
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-24 15:08:39
 */
exports.__esModule = true;
function parint(colors) {
    console.log(colors.sky);
}
;
var colors = {
    sky: 'blue',
    tree: 'green'
};
var colors2 = {
    sky: true,
    tree: false
};
parint(colors);
// parint( colors2 );
//类型“{ sky: boolean; tree: boolean; }”的参数不能赋给类型“{ sky: String; }”的参数。
exports.parint3 = function (colors5) {
    console.log(colors5);
};
