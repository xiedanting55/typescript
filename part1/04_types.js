// object 表示一个js对象
var a;
a = {};
a = function () { };
// {} 用来指定对象中可以包含哪些熟悉
// 语法 {属性名:属性值,属性名:属性值}
// 在属性名后面加上?.表示属性值是可选的
var b;
b = {
    name: "test"
};
// [propName: string]: any 表示任意类型的属性
var c;
c = { name: "test", age: 18, gender: "男" };
/**
 * 设置函数结构的类型声明
 * 语法:(形参:类型,形参:类型 ...)=> 返回值
 */
var d;
d = function (a1, a2) {
    return a1 + a2;
};
/**
 * 数组的类型声明
 * 类型[]
 * Array<类型>
 */
// string[] 表示字符串数组
var e;
e = ['a', 'b', 'c'];
// number[] 表示字符串数组
var f;
f = [1, 2, 3];
var g;
g = [1, 2, 3];
/**
 * 元组,元组就是固定长度的数组
 * 语法
 * [类型,类型,类型]
 */
var h;
h = ['hello', 123];
/**
 * enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: "test",
    gender: Gender.Male //male
};
console.log(i.gender === Gender.Male);
