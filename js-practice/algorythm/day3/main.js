// // task 1(lesson)
// let arr = [2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4];

// let cem = 0;
// let minTask1 = Number.MAX_VALUE;
// let maxTask1 = Number.MIN_VALUE;

// for(let i =0; i < arr.length;i++){
//     let element = arr[i];
//     if(element > maxTask1){
//         maxTask1 = element;
//     }
//     if(element < minTask1){
//         minTask1 = element;
//     }
// }
// for(let j = 0;j< arr.length;j++){
//     let element = arr[j];
//     if(element != minTask1 && element != maxTask1){
//         cem += element;
//     }
// }
// console.log(cem);

// task2

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// let counter = 0;
// let lastCheckPoint = 0;

// for (let i = 0; i < arr.length; i++) {
//     lastCheckPoint = 0;
//     let element = arr[i];
//     for (let j = 0; j < element.length; j++) {
//         // console.log(`j = ${j}`);
//         let herf = element[j];
//         if(herf == herf.toUpperCase()){
//             console.log(` counter: ${counter} herf: ${herf} `);
//             counter++;
//         }else if(herf == ' '){

//                 console.log(element.slice(lastCheckPoint,counter));
//                 lastCheckPoint = j + 1;

//         }else if(herf != herf.toUpperCase()){
//             counter = 0;
//         }



//         if(j == element.length - 1){
//             counter = 0;
//         }

//     }
//     console.log(`lastcheckpoint ${lastCheckPoint}`);
//     console.log(`counter ${counter}`);
//     if(counter > 0){
//         console.log(element.slice(lastCheckPoint,counter));
//     }
// }


// task3

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// let task3MinCut = Number.MAX_VALUE;
// let task3MinCutIndex = 0;
// let task3MaxTek = Number.MIN_VALUE;
// let task3MaxTekIndex = 0;

// for(let i = 0; i < arr.length;i++){
//     let element = arr[i];
//     if(element %2 == 0 && element < task3MinCut){
//         task3MinCut = element;
//         task3MinCutIndex = i;
//     }
//     if(element % 2 == 1 && element > task3MaxTek){
//         task3MaxTek = element;
//         task3MaxTekIndex = i;
//     }
// }

// arr[task3MinCutIndex] = task3MaxTek;
// arr[task3MaxTekIndex] = task3MinCut;

// console.log(arr);


// task 4 

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];

//     if (element == true || element == false) {
//         if (i == 0) {
//             console.log(arr[i + 1]);
//         } else if (i == arr.length - 1) {
//             console.log(arr[i - 1]);
//         } else {
//             console.log(arr[i - 1]);
//             console.log(arr[i + 1]);
//         }

//     }

// }

// task 5

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// let counter = 0;

// for(let i =0; i < arr.length;i++){
//     let element = arr[i];
//     counter = 0;
//     for(let j = 0; j < element.length;j++){
//         let herf = element[j];

//         if(herf == herf.toUpperCase() && herf != ''){
//             counter++;
//         }
//     }
//     if(counter > 2){
//         console.log(element);
//     }
// }


// task 2 again

let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4]

let boyukHerfSaygac = 0;

for(let i = 0; i < arr.length;i++){
    let element = arr[i];
    let result = "";
    

    for(let j = 0; j  < element.length;j++){
        let herf = element[j];
        if(herf == herf.toUpperCase() && herf != ''){
            result += herf;
        }else if(herf != herf.toUpperCase()){
            

             break;
        }
        if(j == element.length - 1){
            console.log(result);
        }
    }

}