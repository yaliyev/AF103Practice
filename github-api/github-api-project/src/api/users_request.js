import axios from "axios";
const API_URL = "https://api.github.com/users/";
const TOKEN = "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";
export default function getUser(username){
     return axios.get(API_URL+username,{
          headers: { Authorization: `Bearer ${TOKEN}` }
     }).then(response=>response.data);
}