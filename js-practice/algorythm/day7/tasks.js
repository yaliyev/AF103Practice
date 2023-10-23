// task 36
console.log("----task 36----");
const students = [
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Mammal", scores: [75, 80, 85] },
    { name: "Camil", scores: [90, 95, 85] },
    { name: "Davud", scores: [100, 100, 100] }
];
let maxOrtalamaBal = 0;
let ortalamasiDoxsanYuksekOlan = [];
students.forEach((telebe) => {
    let cem = 0;
    telebe.scores.forEach((bal) => {
        cem += bal;
    })
    let ortalama = (cem / telebe.scores.length);
    if (ortalama > 90) {
        ortalamasiDoxsanYuksekOlan.push(telebe);
    }
    if (ortalama > maxOrtalamaBal) {
        maxOrtalamaBal = ortalama;
    }
});

console.log(maxOrtalamaBal);
console.log(ortalamasiDoxsanYuksekOlan.reverse());

// task 37
console.log("----task 37----");

const products = [
    { name: "one Product 1", price: 20, category: "Electronics" },
    { name: "two Product 2", price: 30, category: "Clothes" },
    { name: "three Product 3", price: 40, category: "Electronics" },
    { name: "four Product 4", price: 50, category: "Clothes" },
    { name: "five Product 5", price: 60, category: "Clothes" },
    { name: "six Product 6", price: 70, category: "Electronics" },
    { name: "seven Product 7", price: 80, category: "Clothes" },
    { name: "eight Product 8", price: 90, category: "Electronics" },
];

function findWithParameter(searchingValue, arr, whatYouWantToFind) {
    switch (whatYouWantToFind) {
        case 1:
            arr.forEach((obj) => {
                if (obj.name.includes(searchingValue)) {
                    console.log(obj);
                }

            })
            break;
        case 2:
            arr.forEach((obj) => {
                if (obj.price === searchingValue) {
                    console.log(obj);
                }

            })
            break;
        case 3:
            arr.forEach((obj) => {
                if (obj.category.includes(searchingValue)) {
                    console.log(obj);
                }

            })
            break;
    }

}

findWithParameter("th", products, 1);
console.log(products.sort((a, b) => {
    return a.price - b.price;
}));
console.log(products.sort((a, b) => {
    return b.price - a.price;
}));

// task 38
console.log("----task 38----");
const employees = [
    { name: "Jamil", salary: 50000, department: "IT" },
    { name: "Jale", salary: 60000, department: "HR" },
    { name: "Bayram", salary: 55000, department: "IT" },
    { name: "Sahil", salary: 75000, department: "HR" },
    { name: "Maryam", salary: 65000, department: "IT" },
    { name: "Elnara", salary: 80000, department: "HR" },
    { name: "Davud", salary: 70000, department: "IT" },
];

console.log(employees.filter((element) => {
    return element.salary > 65000;
}).sort((a, b) => {
    return a.salary - b.salary;
}));

// task 39
console.log("----task 39----");

let nestedArrays = [[0, 1, [2, 4]], [[2, 3], [4, 5]]];

let arrCount = 0;

function checkEntireArray(arr) {

    if (Array.isArray(arr) == true) {
        arr.forEach((elementArr) => {
            if (Array.isArray(elementArr) == true) {
                console.log(elementArr);
                arrCount++;
                checkEntireArray(elementArr);
            }

        })
    }

}
console.log(nestedArrays);
checkEntireArray(nestedArrays);
console.log(arrCount);

// task 40
console.log("----task 40----");

let factorialArr = [2, 4, 8, 8];

let isFactorial = true;
let previousElement = null;
let dividedNumber = factorialArr[1] / factorialArr[0];
factorialArr.forEach((element, index) => {
    if (previousElement != null) {
        if (element / previousElement != dividedNumber) {
            isFactorial = false;
            return;
        }
    }
    previousElement = element;

});
console.log(isFactorial);

// task 41
console.log("----task 41----");
let numbers = [60,100,100,70,80,90,100];
let numbersWithoutDuplicate = [];
numbers.sort((a,b)=>{
   return b - a;
}).filter((element,index)=>{
   if(numbersWithoutDuplicate.indexOf(element)==-1){
     numbersWithoutDuplicate.push(element)
   }
});
console.log(numbersWithoutDuplicate[2]);