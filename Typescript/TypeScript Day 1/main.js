//5
// let a: boolean = false;
// let b: string = '';
// let c: any;
// let d: number = 15;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 5
// let tuple1:[string] = ['salam'];
// 10
// function sum(a:number,b:number):void{
//     console.log(a + b);
// }
// 0
var week;
(function (week) {
    week["MONDAY"] = "MONDAY";
    week["TUESDAY"] = "TUESDAY";
    week["WEDNESDAY"] = "WEDNESDAY";
})(week || (week = {}));
;
console.log(week.TUESDAY);
// 10
// let z:string|number;
// 10
// type vb = string;
// let df:vb;
// ? bal
function fm() {
    throw "nm";
}
var event1;
// 10
function bc(a, b) {
    if (a === void 0) { a = 'salam'; }
    return b;
}
// 15
var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.fnc = function (name, age) {
    };
    return Human;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, groupName) {
        var _this = _super.call(this, name, age) || this;
        _this.groupName = groupName;
        return _this;
    }
    return Student;
}(Human));
