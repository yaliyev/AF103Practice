//5
// let a: boolean = false;
// let b: string = '';
// let c: any;
// let d: number = 15;

// 5
// let tuple1:[string] = ['salam'];

// 10
// function sum(a:number,b:number):void{
//     console.log(a + b);
// }

// 0
enum week{
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY'
};

console.log(week.TUESDAY);

// 10

// let z:string|number;

// 10

// type vb = string;

// let df:vb;

// ? bal

function fm():never{
    throw "nm";
}

// 0

type mouseEvent = ['click','dblclick'];

let event1:mouseEvent;

// 10

function bc(a:string='salam',b?:number){
    return b;
}

// 15

class Human implements IHuman{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    fnc(name: any, age: any) {
        
    }
}

class Student extends Human{
    groupName:string;

    constructor(name:string,age:number,groupName:string){
        super(name,age);
        this.groupName = groupName;
    }
}
// 

interface IHuman{
    fnc(name,age);
}








