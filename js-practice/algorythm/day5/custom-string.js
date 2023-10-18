function CustomString(contentString) {

    this.contentString = contentString;

    this.length = function () {
        let i = 0;
        while (true) {
            if (contentString[i] == undefined) {
                break;
            }

            i++;
        }
        return i;
    }

    this.slice = function (startIndex, endIndex = this.contentString.length) {

        if (endIndex > startIndex) {
            let result = "";

            for (let i = startIndex; i < endIndex; i++) {
                result += this.contentString[i];
            }

            return result;
        } else {
            console.log("Slice ucun duzgun indeskler daxil edin");
        }



    }

    this.indexOf = function (str) {
        let startingIndex = null;

        for (let i = 0; i < this.contentString.length; i++) {
            if (this.contentString[i] === str[0]) {
                if (this.contentString.slice(i, i + str.length) == str) {
                    startingIndex = i;
                    break;
                }
            }
        }
        return startingIndex;
    }

    this.replace = function (locatingPart, changingTo) {

        let locatingPartIndex = this.indexOf(locatingPart);

        return this.contentString.slice(0, locatingPartIndex) + changingTo + this.contentString.slice(locatingPartIndex + locatingPart.length);
    }

    this.toUpperCase = function () {
        let result = "";
        for (let i = 0; i < this.contentString.length; i++) {
            let letter = this.contentString[i];
            let letterChar = letter.charCodeAt();
            if(letterChar>=97 && letterChar <= 122){
                letterChar -= 32;
            }
            result += String.fromCharCode(letterChar);
        }

        return result;
    }

    this.toLowerCase = function () {
        let result = "";
        for (let i = 0; i < this.contentString.length; i++) {
            let letter = this.contentString[i];
            let letterChar = letter.charCodeAt();
            if(letterChar>=65 && letterChar <= 90){
                letterChar += 32;
            }
            result += String.fromCharCode(letterChar);
        }

        return result;
    }

    this.concat = function(){
        let result = this.contentString;
        for(let i = 0;i<arguments.length;i++){
            if(typeof arguments[i] == 'string'){
                result += arguments[i];
            }
        }
        return result;
    }

    this.trimStart = function(){
        let symbol = this.contentString[0];
        let index  = 0;
        while(symbol == " "){
            symbol = this.contentString[index];
            index++;
        }
        return this.contentString.slice(index-1);
    }

    this.trimEnd = function(){
        let index  = this.contentString.length;
        let symbol = this.contentString[index];
        while(symbol == " "){
            symbol = this.contentString[index];
            index--;
        }
        return this.contentString.slice(0,index);
    }



}

let customString = new CustomString("Hello World");

console.log(customString.length());
console.log(customString.slice(6, 11));
console.log(customString.indexOf("World"));
console.log(customString.replace(" ", " Big "));
console.log(customString.toUpperCase());
console.log(customString.toLowerCase());
console.log(customString.concat(" Bye ","World"));

let customStringAlternateVariant = new CustomString("      Hello World    ")
console.log(customStringAlternateVariant.trimStart());
console.log(customStringAlternateVariant.trimEnd());