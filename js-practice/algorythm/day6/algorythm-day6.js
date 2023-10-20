function toSquare(arr) {
    return arr.map((element) => { return element * element });
}

function positiveSum(arr) {
    let sum = 0;
    arr.forEach((e) => { if (e > 0) { sum += e; } });
    return sum;
}

function averageNumAndMedianToObject(arr) {
    let obj = {};
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let cem = 0;
    arr.forEach((e) => {
        if (e > max) {
            max = e;
        }
        if (e < min) {
            min = e;
        }
        cem += e;
    });
    obj.averageNum = cem / arr.length;
    obj.median = ((min + max) / 2);

    return obj;
}

function concatWordFirstSymbol(str) {
    let result = "";
    str.split(" ").forEach((word) => {
        result += word[0];
    });
    return result;
}

function extractWordsAndMinimizeFromString(str) {
    let arr = str.split(" ");
    let arr2 = arr.map((e) => {
        if (e.length > 3) {
            return e[0] + (e.length - 2) + e[e.length - 1]
        } else {
            return e;
        }
    });
    return arr2.join(" ").toString();
}

function ageComparing(arr) {
    let minAge = Number.MAX_VALUE;
    let maxAge = Number.MIN_VALUE;

    arr.forEach((e) => {
        if (e.age > maxAge) {
            maxAge = e.age;
        }
        if (e.age < minAge) {
            minAge = e.age;
        }
    });
    return [maxAge - minAge, maxAge, minAge];
}

function calculateNFactorial(eded) {

    let hasil = 0;


    if (eded > 0) {
        hasil = 1;
    }

    for (let i = 1; i <= eded; i++) {
        hasil *= i;
    }

    return hasil;


}

function flatTwoDimensionalArrayAndGetCount(arr) {
    let flattedArr = arr.flat();
    let countObj = {};

    flattedArr.forEach((element)=>{
        if(countObj[element] == undefined ){
            countObj[element] = 0;
        }
        countObj[element]++;
    })

    return countObj;
}

let arr1 = [10, 20, 30];
const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
];


console.log(toSquare(arr1));
console.log(positiveSum(arr1));
console.log(averageNumAndMedianToObject(arr1));
console.log(concatWordFirstSymbol("Salam Dunya hfhjfthj fgjfgjhf cfhfg"));
console.log(extractWordsAndMinimizeFromString("Yunis son tapşırığın izahını istədi h"));
console.log(ageComparing([{ "name": "z1", "age": 10 }, { "name": "z1", "age": 15 }, { "name": "z1", "age": 12 }]));
console.log(calculateNFactorial(-4));
console.log(flatTwoDimensionalArrayAndGetCount(input));