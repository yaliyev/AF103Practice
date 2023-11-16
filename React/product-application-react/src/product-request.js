import axios from 'axios';
let BASE_URL = "https://northwind.vercel.app/api/products/";

export  function get(){
    return  axios.get(BASE_URL).then((response)=>response.data);
}
export async function post(product){
    return await axios.get(BASE_URL,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(product)
    });
}
export async function deleteProduct(id){
    return await axios.delete(BASE_URL+id);
}
export async function put(id,product){
    return await axios.get(BASE_URL+id,{
        method:"PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(product)
    });
}
export async function patch(id,product){
    return await axios.get(BASE_URL+id,{
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(product)
    });
}
