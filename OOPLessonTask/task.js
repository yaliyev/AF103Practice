class Human {
    name;
    surname;
    #birthYear;
    birthPlace = { city:"", country:"" };

    constructor(name,surname,birthYear,birthPlace){
        this.name = name;
        this.surname = surname;
        this.#birthYear = birthYear;
        this.birthPlace = birthPlace;
    }

    getFullName() {
        return this.name + " " + this.surname;
    }
    getAge() {
        return new Date().getFullYear() - this.#birthYear;
    }
    get age() {
        return this.getAge();
    }
    get fullName() {
        return this.getFullName();
    }


    static compareAge(obj1, obj2) {
        let returnableObject;
        if (obj1.age > obj2.age) {
            returnableObject = obj1;
        } else {
            returnableObject = obj2;
        }
        return returnableObject;
    }
    static compareSameBirthCity(obj1, obj2) {
        let result;
        if (obj1.birthPlace.city === obj2.birthPlace.city) {
            result = true;
        } else {
            result = false;
        }
        return result;
    }

}

class User extends Human{
    username;
    email;
    #password;
    isLogged = false;

    constructor(name,surname,birthYear,birthPlace,username,email,password = birthPlace.city.slice(0,2).toUpperCase()+birthYear){
        super(name,surname,birthYear,birthPlace);
        this.username = username;
        this.email = email;
        this.#password = password;
    }

    login(username,password){
        if(username === this.username && password === this.#password){
            alert(`Welcome back ${super.fullName}`);
            this.isLogged = true;
        }else{
            alert(`incorrect username or password`);
        }
    }
    logOut(){
        if(this.isLogged == true){
            alert(`You logged out successfully`);
            this.isLogged = false;
        }else{
            alert(`You didn't login`);
        }
    }
}
let human1 = new Human('Yaqub','Aliyev',2003,{city:'Baku',country:'Azerbaijan'});
console.log(human1.age);
console.log(human1.fullName);

let user1 = new User('Yaqub','Aliyev',2009,{city:'Moscow',country:'Azerbaijan'},'Yaqub155','yaqub227@gmail.com');
console.log(user1);
user1.login("Yaqub155","MO2009");
user1.logOut();

let user2 = new User('Turkhan','Tomayev',2004,{city:'Baku',country:'Azerbaijan'},'Turkhan100','turkhan@gmail.com');
console.log(User.compareAge(user1,user2));
console.log(User.compareSameBirthCity(user1,user2));




