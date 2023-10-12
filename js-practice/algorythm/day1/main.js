// task1
// let a  = Number(prompt("1 Ededi daxil edin"));
// let b  = Number(prompt("2 Ededi daxil edin"));
// let c  = Number(prompt("3 Ededi daxil edin"));

// if(a + b > c && a + c > b && b + c > a){
//     alert("ucbucaqdir");
// }else{
//     alert("ucbucaq deyil");
// }
// task2
// let a1  = Number(prompt("1 Ededi daxil edin"));
// let b1  = Number(prompt("2 Ededi daxil edin"));
// let c1  = Number(prompt("3 Ededi daxil edin"));

// if(a1 === b1 && b1 === c1){
//     alert("beraberterefli ucbucaqdir");
// }
// task3
// let a2  = Number(prompt("1 Ededi daxil edin"));
// let b2  = Number(prompt("2 Ededi daxil edin"));

// if(a2 > b2){
//     alert(a2);
// }else if(b2 > a2){
//     alert(b2);
// }
// task4
// let a3  = Number(prompt("1 Ededi daxil edin"));
// let b3  = Number(prompt("2 Ededi daxil edin"));
// let c3  = Number(prompt("3 Ededi daxil edin"));

// if(a3 > b3 && a3 > c3){
//     alert(a3);
// }
// if(b3 > a3 && b3 > c3){
//     alert(b3);
// }
// if(c3 > a3 && c3 > b3){
//     alert(c3);
// }
// task5
// let min = 0;
// let max = 0;

// let a4  = Number(prompt("1 Ededi daxil edin"));
// let b4  = Number(prompt("2 Ededi daxil edin"));
// let c4  = Number(prompt("3 Ededi daxil edin"));

// if(a4 > b4 && a4 > c4){
//     max = a4;
// }
// if(b4 > a4 && b4 > c4){
//     max = b4;
// }
// if(c4 > a4 && c4 > b4){
//     max = c4;
// }

// if(a4 < b4 && a4 < c4){
//     min = a4;
// }
// if(b4 < a4 && b4 < c4){
//     min = b4;
// }
// if(c4 < a4 && c4 < b4){
//     min = c4;
// }

// let otherNum = 0;

// if(a4 != max && a4 != min){
//     otherNum = a4;
// }
// if(b4 != max && b4 != min){
//     otherNum = b4;
// }
// if(c4 != max && c4 != min){
//     otherNum = c4;
// }

// alert(min+" "+otherNum+" "+max);

// task6

// let yash = Number(prompt("Yashinizi qeyd edin"));

// if (yash > 18) {
//     let biletSayi = Number(prompt("Bilet sayini daxil edin"));
//     alert(`Odenis ${10 * biletSayi} AZN(${biletSayi} bilet)`);
//     let odenis = Number(prompt("Buyurun,bu qeder mebleg odeyirem"));
//     if (odenis < 10 * biletSayi) {
//         alert("Bilet alina bilmez.Vesait bilet alinmasi ucun kifayet etmir");
//     }
// } else if (yash == 18) {
//     let biletSayi = Number(prompt("Bilet sayini daxil edin"));
//     if (biletSayi < 3) {
//         alert("Minimum 3 bilet alinmalidir")
//     } else {
//         alert(`Odenis ${10 * biletSayi} AZN(${biletSayi} bilet)`);
//         let odenis = Number(prompt("Buyurun,bu qeder mebleg odeyirem"));
//         if (odenis < 10 * biletSayi) {
//             alert("Bilet alina bilmez.Vesait bilet alinmasi ucun kifayet etmir");
//         }
//     }

// } else {
//     alert("Bilet alina bilmez");
// }

// task 7
alert("Bank proqramina xos gelmisiniz");
let emeliyyat = Number(prompt("Bank emeliyyat nomresini daxil edin"));

let balans = 100;


switch (emeliyyat) {
    case 1:
        alert(balans + 'AZN');
        break;
    case 2:
        let medaxilOlunacaqPul = Number(prompt("Daxil edilecek mebleg"));
        if (medaxilOlunacaqPul > 0) {
            balans += medaxilOlunacaqPul;
            alert(balans + 'AZN');
        } else {
            balans += medaxilOlunacaqPul;
            if(balans != balans * 1 || !(medaxilOlunacaqPul >0)) 
            alert("Duzgun vesait daxil edin :D")
        }

        break;
    case 3:
        let mexaricOlunacaqPul = Number(prompt("Mexaric edilecek mebleg"));
        if (mexaricOlunacaqPul > 0) {
            if (balans - mexaricOlunacaqPul >= 0) {
                balans -= mexaricOlunacaqPul;
                alert("Emeliyyat icra edildi.Balans: " + balans);

            } else {
                alert("Balansda kifayet qeder vesait yoxdur.Balans: " + balans);
            }
        } else {
            alert("Duzgun vesait daxil edin :D");
        }
        break;
    case 4:
        alert("Sagol");
        break;
}







