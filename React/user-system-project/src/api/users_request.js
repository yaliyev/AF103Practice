import axios from "axios";
let API_URL = "https://655ed2c7879575426b43fe97.mockapi.io/users/";

export async function getUsers(){
    return axios.get(API_URL).then(response=>response.data);
}

export async function login(user){
    let users =  await axios.get(API_URL).then(response=>response.data);
    return users.find((iteratedUser)=>user.name === iteratedUser.name &&user.pass === iteratedUser.pass );
}
export async function editCurrentUserAndAddFriend(currentUser){
    await axios.put(API_URL+currentUser.id,currentUser);
}