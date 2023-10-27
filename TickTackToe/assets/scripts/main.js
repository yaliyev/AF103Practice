let xIcon = ' <i class="fa-solid fa-x fa-5x x-icon"></i>';
let oIcon = '<i class="fa-regular fa-circle fa-5x o-icon"></i>';

let gameRows = document.getElementsByClassName("game-row");
let gameElements = [];
let lastIcon = null;

console.log(gameRows);

for(let i = 0;i < gameRows.length;i++){
    for(let y = 0; y < gameRows[i].children.length;y++){
        gameElements.push(gameRows[i].children[y]);
    }  
}
gameElements.forEach((element)=>{
    element.addEventListener('click',function(){
        if(element.innerHTML.trim().length == 0){
            if(lastIcon == null){
                lastIcon = xIcon;
                this.innerHTML = xIcon;
            }
            else if(lastIcon == xIcon){
                lastIcon = oIcon;
                this.innerHTML = oIcon;
            }
            else if(lastIcon == oIcon){
                lastIcon = xIcon;
                this.innerHTML = xIcon;
            }

            isWon();

        }
       
    })
});

function isWon(){
    let won = false;

    // horizontal checking
    if(gameElements[0].innerHTML.trim().length > 0 ){
        if(gameElements[0].innerHTML==gameElements[1].innerHTML&&gameElements[0].innerHTML == gameElements[2].innerHTML){
            console.log('horizontal eynilik');
        }
    }else if(gameElements[2].innerHTML.trim().length > 0 ){
        if(gameElements[2].innerHTML==gameElements[3].innerHTML&&gameElements[2].innerHTML == gameElements[4].innerHTML){
            console.log('horizontal eynilik');
        }
    }

}