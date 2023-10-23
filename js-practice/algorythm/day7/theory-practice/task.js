// task 1
// let arr = ["Apple","Banana","Watermelon"];

// let button1 = document.getElementsByTagName("button")[0];
// let ul1 = document.getElementsByTagName("ul")[0];

// document.getElementsByTagName("button")[0].addEventListener('click',()=>{
//     if(arr.length >0){
//         let li = document.createElement("li");
//         li.innerText = arr[arr.length -1];
//         arr.splice(arr.length-1,1); // arr.pop()
//          ul1.appendChild(li);
//     }else{
//         alert("Butun elementler arrayden cixarildi");
//     }
    
// });

// task2

let div1 = document.createElement("div");


div1.style.width = "100px";

div1.style.height = "100px";

div1.style.backgroundColor = "red";

let h3 = document.createElement("h3");

h3.textContent = "Hello World";

h3.setAttribute("id","title");

document.querySelector("body").appendChild(div1);
document.querySelector("body").appendChild(h3);

