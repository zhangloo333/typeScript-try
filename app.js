"use strict";
console.log("this is console log");
//string
var myName = "Max";
// myName = 28;
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//只能提示
var zhang = new Person();
zhang.name = "zhang";
zhang.age = 12;
