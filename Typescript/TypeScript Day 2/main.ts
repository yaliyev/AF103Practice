// task 1
let name1: string = '';
let age1: number = 0;

console.log(name1);
console.log(age1);

//task 3

let num1: number;
let str1: string;
let bool1: boolean;
let var50: undefined;

// task 4

// let var4:number;
// var4 = 'salam';

// task 5

let var5: any;

console.log(var5);

// task 6

let d = '14';
let e = parseInt(d);


// task 7
type mouseEvent = 'click' | 'dblclick';

let element: mouseEvent;

// task 8

let lehrers: string[] = [];

lehrers.push('GURBAN MUALLIM');
lehrers.push('ELNUR MUALLIM');

// task 9

enum colors {
    Red = 'red',
    Green = 'green',
    White = 'white',
    Blue = 'blue'
};

// task 10

let isNull: null = null;
let isUndefined: undefined = undefined;

// task 11
class Bus {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log('The bus is starting');
    }
}

class SUV extends Bus {
    isSuitableForOffRoad: boolean;

    constructor(make: string, model: string, year: number, isSuitableForOffRoad: boolean) {
        super(make, model, year);
        this.isSuitableForOffRoad = isSuitableForOffRoad;
    }

}

class Car{
    engine:Engine


    constructor(engine:Engine){
        this.engine = engine;
    }
}

class Engine {
    horsepower: number;
    fuelType: string;
    




    constructor(horsepower: number, fuelType: string) {
        this.horsepower = horsepower;
        this.fuelType = fuelType;
    }
}








