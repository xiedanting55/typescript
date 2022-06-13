// 声明变量a,同时指定它的类型为number
let a: number;

// a的类型设置为number,在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a = "hello";  //报错,变量a的类型是number,不能赋值字符串

let b: string;
b = "hello";
// b = 123;

// 声明完变量直接进行赋值
let c: boolean = true;

// JS中的函数是不考虑参数的类型和个数的
function sum(a1: number, b1: number): number{
    return a1 + b1;
}

let result = sum(123,456)