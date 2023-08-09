import axios from 'axios';
const baseURL="https://jsonplaceholder.typicode.com/users";
export function getCotanctList(){
    return axios.get(baseURL)
}
export function createContact(id,name,email,phone){
    return axios.post(baseURL,{
     id:id,
     name:name,
     email:email,
     phone:phone
    })
}
export function updateContact(id,name,email,phone){
    return axios.put(`${baseURL}/${id}`,{
        id:id,
        name:name,
        email:email,
        phone:phone
    })
}
export function deleteContact(id){
    return axios.delete(`${baseURL}/${id}`)
}
