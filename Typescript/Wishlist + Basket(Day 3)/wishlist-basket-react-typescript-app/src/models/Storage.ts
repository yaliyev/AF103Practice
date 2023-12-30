import Furniture from "./Furniture";

const Furnitures:Furniture[] = [];

let furniture1 = new Furniture("2 Chairs","2 Chairs with colors",150,"https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

let sofa = new Furniture("Sofa","Comfort Sofa",200,"https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");



Furnitures.push(furniture1);
Furnitures.push(sofa);

export default Furnitures;