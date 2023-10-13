
    let restart = false;

do {
    
    let monthNum = Number(prompt("enter month NO: "));
    switch (monthNum) {
        case 1:
        case 2:

        case 3:
        case 4:
        case 5:
            restart = false
            alert("Spring");
            break;
        case 6:
        case 7:
        case 8:
            restart = false
            alert("Summer");
            break;
        case 9:
        case 10:
        case 11:
            restart = false
            alert("Fall");
            break;
        case 12:

        default:
            alert("invalid input!")
            restart = true;
            break;
    }


} while (restart == true);

//loops - for, while, do while, foreach, for in, for of

// let num = Number(prompt("enter number:")); //3
// let counter = 0;
// let students = "";

// while (counter<num) {
//     counter++;
//     students += (prompt(`enter name ${counter}: `)+" ");
// }
// alert(students);