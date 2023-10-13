// task1
for (let i = 10; i <= 99; i++) {
    if (i % 10 == 7) {
        console.log(i);
    }
}
console.log("--------")
// task 2
for (let i = 10; i <= 99; i++) {
    if (i % 10 == ((i / 10)-((i / 10)%1)) ) {
        console.log(i);
    }
}
// task 3
let t3Deyer = prompt("Ededi daxil edin");
let result = "";
for(let i = 0;i< t3Deyer.length;i++){
    result += t3Deyer[i] + " ";
}
console.log(result);

// task 4

let t4Deyer = prompt("Ededi daxil edin");
let max4 = 0;
for(let i = 0;i< t4Deyer.length;i++){
   if(Number(t4Deyer[i])> max4){
    max4 = Number(t4Deyer[i]);
   }
}
console.log(max4);

// task 5

let t5Deyer = prompt("Ededi daxil edin");

let cem5 =0;
let hasil5 = 1;
let edediOrta5 = 0;

for(let i = 0; i < t5Deyer.length;i++){
    cem5 += Number( t5Deyer[i]);
    hasil5 *= Number(t5Deyer[i]);
}
edediOrta5 = cem5 / t5Deyer.length;

console.log(cem5);
console.log(hasil5);
console.log(edediOrta5);

// task6

let t6Deyer = Number(prompt("Ededi daxil edin:"));


for(let i = 1; i <= t6Deyer;i++){
   if(t6Deyer % i == 0){
    console.log("Bolen: "+i);
   }
}

// task7

let t7Deyer = Number(prompt("Ededi daxil edin:"));

let bolenSayi = 0;

for(let i = 1; i <= t6Deyer;i++){
   if(t6Deyer % i == 0){
    bolenSayi++;
   }
}
console.log(bolenSayi);

// task 8
let arr = [3,8,2,5,4,10,7,6];

for(let i = 0; i < arr.length;i++){
    if(arr[i] % 2 ==1){
        console.log("Task 8(tek eded indeksi): "+i);
    }
}

// task 9

let arr9 = [3,8,2,5,4,10,7,6];

for(let i = 0; i < arr9.length;i++){
    if(arr9[i] % 2 ==1){
        console.log("Task 8(tek eded): "+arr9[i]);
    }
}

// task 10
let arr10 = [3,8,2,5,4,10,7,6];

let max10 = 0;

for(let i =0;i< arr10.length;i++){
if(arr10[i] > max10){
    max10 = arr10[i];
}
}
console.log(`Tapsirig 10.Maksimum  eded ${max10}`)

// task 11

let arr11 = [2,5,4,7,6,9];

let max11 = 0;

for(let i = 0; i < arr11.length;i++){
    if(arr11[i] % 2 == 0){
      if(arr11[i] > max11){
        max11 = arr11[i];
      }
    }
}
console.log(`Tapsirig 11.Cut ededler arasinda maksimum ${max11}`);

// task 12

let arr12 = [2,5,1,7,6,9];

let minElement = arr12[0];
let minElementIndex = 0;

for(let i = 0; i < arr12.length;i++){
    if(arr12[i] < minElement){
        minElement = arr12[i];
        minElementIndex = i;
    }
}
console.log(`Tapsirig 11.Minimum ededin indeksi ${minElementIndex}`);


// extra
let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident debitis pariatur, possimus quibusdam corrupti ratione et repellendus ex ad laborum dolor a ipsa, molestiae exercitationem earum! Provident ipsam sit dicta exercitationem, labore quae ex et possimus explicabo ullam iste repudiandae sint est voluptatem error, voluptas incidunt eius? Nemo laboriosam voluptatum recusandae quas blanditiis. Sit porro corrupti consectetur! Perferendis iusto eaque, soluta omnis reprehenderit dolorem aut, neque et voluptatibus suscipit deleniti facere ad optio explicabo qui officia est rerum eligendi sunt iste ullam nobis. Quaerat iure autem, aperiam vel modi vitae, numquam suscipit quasi rem itaque rerum molestiae quas, magni quidem.";

let resultExtra = "";

let startMaximum = text.length / 2;

let randomStart = Math.floor(Math.random() * startMaximum);
console.log(text.length);
console.log(0,startMaximum);
console.log(randomStart);


for(let i = randomStart;i<randomStart+50;i++){
    resultExtra += text[i];
}
console.log(resultExtra);
console.log(`Text uzunlugu ${resultExtra.length}`);


