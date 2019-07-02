import axios from 'axios';



export function fetchLogin(params) {
    const API = 'https://secure-cliffs-60858.herokuapp.com/api/login'
    let url = API;
    axios.post(url, {
        userName: params.username,
        password: params.password
    })
    .then(res => {
        if (res.data) {
           console.log("login" , res.data)
        }  
    })
    .catch(err => {
        console.log(err);
    });
}