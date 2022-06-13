# TypeScript

## 1. TypeScript是什么？

- 以JavaScript为基础构建的语言
- 一个JavaScript的超集
- 可以在任何支持JavaScript的平台中执行，TS不能被JS解析器直接执行，TS需要**编辑**成JS
- TypeScript扩展了JavaScript，并添加了类型

## 2. TypeScript增加了什么？

- 类型
- 支持ES的新特性
- 添加ES不具备的新特性
- 丰富的配置选项
- 强大的开发工具

## 3. TypeScript开发环境搭建？

- 下载Node.js
- 安装Node.js
- 使用npm全局安装typescript  `npm i -g typescript`
- 创建一个ts文件
- 使用tsc对ts文件进行编译

## 4. 基本类型

- 类型声明

  - 
    类型声明是TS非常重要的一个特点


  - 通过类型声明可以指定TS中的变量(参数，形参)的类型


  - 指定类型后，当为边框赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错


  - 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值


  - 语法：

    ```
    let 变量: 类型;
    
    let 变量: 类型 = 值;
    
    function fn(参数:类型,参数:类型):类型 {
    ...
    }
    ```

- 自动类型判断

  - TS拥有自动的类型判断机制


  - 当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型


  - 所以如果你的变量声明和赋值是同时进行的，可以省略掉类型声明


- 类型

| 类型    | 例子             | 描述                           |
| ------- | ---------------- | ------------------------------ |
| number  | 1, -33, 2.5      | 任意数字                       |
| string  | 'hi', "hi", `hi` | 任意字符串                     |
| boolean | true, false      | 布尔值true或false              |
| 字面量  | 其本身           | 限制变量的值就是该字面量的值   |
| any     | *                | 任意类型                       |
| unknown | *                | 类型安全的any                  |
| void    | 空值(undefined)  | 没有值(或undefined)            |
| never   | 没有值           | 不能是任何值                   |
| object  | {name: "test"}   | 任意的JS对象                   |
| array   | [1,2,3]          | 任意的JS数组                   |
| tuple   | [4,5]            | 元素，TS新增类型，固定长度数组 |
| enum    | enum(A,B)        | 枚举，TS新增类型               |

- number

  ```
  let decimal: number = 6;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;
  let big:bigint = 100n;
  ```

- boolean

  ```
  let isDone: boolean = false;
  ```

- string

  ```
  let color: string = "blue";
  color = "red";
  
  let fullName: string = "Bob Job";
  let age: number = 18;
  let sentence: string = `Hello, my name is ${fullName}. I will be ${age+1} years old next month.`;
  ```

- 字面量

  - 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围


  ```
  let color: 'red' | 'blue' | 'black';
  let num: 1 | 2 | 3 | 4 | 5;
  ```

- any

  ```
  let d: any = 4;
  d = "hello";
  d = true;
  ```

- unknown

  ```
  let notSure: unknown = 4;
  notSure = "hello";
  ```

- void

  ```
  let unusable: void = undefined;
  ```

- never

  ```
  function error(message: string): never{
  	throw new Error(message);
  }
  ```

- object（没啥用）

  ```
  let obj: object = {};
  ```

- array

  ```
  let list: number[] = [1,2,3];
  let list: Array<number> = [1,2,3];
  ```

- tuple

  ```
  let x: [string, number];
  x = ["hello", 10]
  ```

- enum

  ```
  enum Color {
  	Red,
  	Green,
  	Blue
  }
  let c: Color = Color.Green;
  
  enum Color {
  	Red = 1,
  	Green,
  	Blue
  }
  let c: Color = Color.Green;
  
  enum Color {
  	Red = 1,
  	Green = 2,
  	Blue = 3
  }
  let c: Color = Color.Green;
  ```

- 类型断言

  - 有些情况下，变量的类型对于我们来说是很明确的，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式
  - 第一种：
  

  ```
  let someValue: unknown = "this is a string";
  let strlength: number = (someValue as string).length;
  ```
  
    - 第二种：	
  
  ```
  let someValue: unknown = "this is a string";
  let strlength: number = (<string>someValue).length;
  ```

## 5. 编译选项

- 自动编译文件

  - 编译文件时，使用-w指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译

  - 示例

    ```
    tsc xxx.ts -w
    ```


- 自动编译整个项目

  - 如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件

  - 但是能直接使用tsc命令的前提时，要在项目的根目录下创建一个ts的配置文件tsconfig.json

  - tsconfig.json是一个json文件，添加配置文件后，只需只需tsc命令即可完成对整个项目的编译

  - 配置选项：

    - include:

      - 定义希望被编译文件所在的目录

      - 默认值: ["**/*"]

      - 示例：

        ```
        "include": ["src/**/*", "tests/**/*"]
        ```

      - 上述示例中，所有的src目录和tests目录下的文件都会被编译			

    - exclude

      - 定义需要排除在外的目录
      
      - 默认值: ["node_modules", "brower_components", "jspm_packages"]
      
      - 示例：
      
        ```
        "exclude": ["./src/hello/**/*"]
        ```
      
      - 上述示例中，scr下的hello目录下的文件都不会被编译
      
    - exclude
    
      - 定义被继承的配置文件
    
      - 示例：
    
        ```
        "extends": "./configs/base"
        ```
    
      - 上述示例中，当配置文件中会自动包含config目录下的base.json中的所有配置信息
    
    - files
    
      - 指定被编译文件的列表，只有需要编译的文件少时才会用到
    
      - 示例：
    
        ```
        "files": [
            	"core.ts",
            	"sys.ts",
            	"types.ts",
            	"scanner.ts",
            	"parser.ts",
            	"utilities.ts",
            	"binder.ts",
            	"checker.ts",
            	"tsc.ts"
            ]
        ```
    
      - 列表中的文件都会被TS编译器所编译
    
    - compilerOptions
    
      - 配置选项时配置文件中非常重要也比较复杂的配置选项
    
      - 在compilerOptions中包含多个子选项，用来完成对编译的配置
    
        -  项目选项
    
          - target
    
            - 设置ts代码编译的目标版本
    
            - 可选项：(ES3(默认)，ES5，ES6/ES2015，ES7/ES2016，ES2017，ES2018，ES2019，ES2020，ESNext)
    
            - 示例
    
              ```
              "compilerOptions": {
                          	"target": "ES6"
                          }
              ```
    
            - 如上设置，我们所编写的ts代码将会编译为ES6版本的js代码
    
          - lib
    
            - 指定代码运行时所包含的库(宿主环境)
    
            - 可选值：(ES5，ES6/ES2015，ES7/ES2016，ES2017，ES2018，ES2019，ES2020，ESNext，DOM，WebWorker，ScriptHost......)
    
            - 示例
    
              ```
              "compilerOptions": {
                          	"target": "ES6",
                          	"lib": ["ES6", "DOM"],
                          	"outDir": "dist",
                          	"outFile": "dist/aa.js"
                          }
              ```
    
          - module
    
            - 设置编译后代码使用的模块化系统
    
            - 可选值：(CommonJS，UMD，AMD，System，ES2020，ESNext，None)
    
            - 示例：
    
              ```
              "compilerOptions": {
                        	"module": "CommonJS",
                        }
              ```
    
          - dutDir
    
            - 编译后文件的所在目录


​              
​            
​            ​    


​			









