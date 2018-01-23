# typeScript-try

### typescript init

```
tsc init
```

## script basic

如果你先给了一个变量的值
let myAge = 'Max' 然后有幅值了 myAge = 28,
变量的 type 是不能狗随便变得。

## varibale 的 类型：

string
number
boolean

如果你没有 声明 types，给 varibale，你后你可以给它们任何值

## 怎么声明 assing types

let myRealAge: number
let myRealAge: any

## array

array 里面的所有内容必须一致：

```typescript
let hobbies = ["Cooking", "Sports"];
hobbies =[100]; //这样会报错的。

let hobbies: any[] = ["Cooking", "Sports"]
hobbies = [100];
hobbies = 100 这样子的情况下就不会报错
```

tuples typescript 特别的类型

```typescript
let address = ["strntr", 99];
let address: [string, number] = [99, "strntr"];
```

### enum

enum Color {
Gray,//0
Gree =120, //100
Blue//2
}

你可以给他给写成 100 或者 120.

###

try to aviod user any

### function

function returnMyname(): string {
return myName;
}
function returnMyname(): void {
console.log("hello");
}
