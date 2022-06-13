// object 表示一个js对象
let a: object;
a = {};
a = function() {};

// {} 用来指定对象中可以包含哪些熟悉
// 语法 {属性名:属性值,属性名:属性值}
// 在属性名后面加上?.表示属性值是可选的
let b: {name: string, age?: number};
b = {
    name: "test",
    // age: 18
};

// [propName: string]: any 表示任意类型的属性
let c: {name: string, [propName: string]: any};
c = {name: "test", age: 18, gender: "男"}

/**
 * 设置函数结构的类型声明
 * 语法:(形参:类型,形参:类型 ...)=> 返回值
 */
let d: (a: number, b: number)=> number;
d = function(a1: number, a2: number) {
    return a1 + a2;
}

/**
 * 数组的类型声明
 * 类型[]
 * Array<类型>
 */

// string[] 表示字符串数组
let e: string[];
e = ['a', 'b', 'c'];

// number[] 表示字符串数组
let f: number[];
f = [1, 2, 3];

let g: Array<number>;
g = [1, 2, 3];

/**
 * 元组,元组就是固定长度的数组
 * 语法
 * [类型,类型,类型]
 */
let h: [string, number];
h = ['hello', 123];

/**
 * enum 枚举
 */
enum Gender{
    Male,
    Female
}
let i: {name: string, gender: Gender}
i = {
    name: "test", 
    gender: Gender.Male  //male
}
console.log(i.gender === Gender.Male)

// & 表示同时
let j: {name: string} & {age: number};
j = {name: "test", age: 18}

// 类型别名
type  myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;