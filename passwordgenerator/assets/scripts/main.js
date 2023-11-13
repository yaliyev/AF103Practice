const uppercaseLetters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps;
})();
const lowercaseLetters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
    return caps;
})();
let numbers = (() => {
    const caps = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));
    return caps.concat(caps.map(letter => letter.toLowerCase()));
})();
let symbolsFirst = (() => {
    const caps = [...Array(14)].map((val, i) => String.fromCharCode(i + 33));
    return caps.concat(caps.map(letter => letter.toLowerCase()));
})();
let symbolsSecond = (() => {
    const caps = [...Array(6)].map((val, i) => String.fromCharCode(i + 58));
    return caps.concat(caps.map(letter => letter.toLowerCase()));
})();
let symbolsThird = (() => {
    const caps = [...Array(6)].map((val, i) => String.fromCharCode(i + 91));
    return caps.concat(caps.map(letter => letter.toLowerCase()));
})();

let symbols = symbolsFirst.concat(symbolsSecond).concat(symbolsThird);
let passwordInput = document.getElementById('password-input');

let passwordLengthInput = document.getElementById('password-length-input');

let requirementsInputs = Array.from(document.getElementsByClassName('requirements-inputs'));

let copyPasswordButton = document.getElementById('copy-password-btn');

let generatePasswordButton = document.getElementById('generate-password-btn');

copyPasswordButton.addEventListener('click',function(){
    navigator.clipboard.writeText(passwordInput.value);
})

generatePasswordButton.addEventListener('click', function () {
    generatePassword();
})

function generatePassword() {
    let pass = '';

    let requirements = [];

    let maxRange = Number(passwordLengthInput.value);

    requirementsInputs.forEach((element, index) => {
        if (element.checked) {
            requirements.push(index);
            maxRange--;
        }
    });
    if(requirements.length != 0){
        while(pass.length != Number(passwordLengthInput.value)){
            let randomRequirementIndex = randomInteger(0,requirements.length-1);
            let requirement = requirements[randomRequirementIndex];
                switch (requirement) {
                    case 0:
                        pass += uppercaseLetters[randomInteger(0, uppercaseLetters.length - 1)];
                        break;
                    case 1:
                        pass += lowercaseLetters[randomInteger(0, lowercaseLetters.length - 1)];
                        break;
                    case 2:
                        pass += numbers[randomInteger(0, numbers.length - 1)];
                        break;
                    case 3:
                        pass += symbols[randomInteger(0, symbols.length - 1)];    
                        break;
                }
            
        }
       
        passwordInput.value = pass;
    }
    



}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
