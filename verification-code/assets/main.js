let boxInputs = Array.from( document.getElementsByClassName('box-input'));
let lastKey = null;

boxInputs.forEach((boxInput,index)=>{
    boxInput.addEventListener('input',function(){
        if(boxInput.value.length == 0 && lastKey == 'Backspace'){
            boxInputs[index-1].focus();
        }
        if(boxInput.value.length > 1){
            boxInput.value = boxInput.value.slice(0,1);
        }
        if(!boxInput.value.match('[0-9]{1}')){
            boxInput.value = "";
        }else{
            if(index != boxInputs.length - 1){
                boxInputs[index+1].focus();
            }
            
        }
    });
});

window.addEventListener('keyup',function(event){
    lastKey = event.key;
    console.log(lastKey);
})