interface IFurniture{
   name:string;
   description:string;
   price:number;
   image:string;
}

export default class Furniture implements IFurniture{

    name:string;
    description:string;
    price:number;
    image:string;

    constructor(name:string,description:string,price:number,image:string){
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    get getName(){
        return this.name;
    }
    get getDescription(){
        return this.description;
    }
    get getPrice(){
        return this.description;
    }

    get getImage(){
        return this.image;
    }
}