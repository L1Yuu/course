/*
 * @Author: Blue
 * @Date: 2019-05-28 14:01:26
 * @Last Modified by: Blue
 * @Last Modified time: 2019-06-29 17:35:23
 */

 //link: https://www.tslang.cn/docs/handbook/generics.html



 //泛型 可能传入的参数和返回的值类型不相同
 function getColor(type:any):any { };

 
//类型变量 使传入的参数和返回的值类型相同、此处的 T 是类型变量
 
function getColor1<T>(type: T ): T {
    return type;
};

// getColor1<String>('123') //调用泛型
// getColor1(123)           //类型推论 编译器会根据传参来确认、类型变量

//getColor1 可以把这个函数叫做泛型、因为它可以适用与多种类型


//isArray

function getColor20<T>( type: T[] ): T[] {
    console.log( type.length );
    return type;
}


//extend

class GenericeNumber<T> {
    zeroValue: T;
    add(x:T, y:T) {
        
    }
}










