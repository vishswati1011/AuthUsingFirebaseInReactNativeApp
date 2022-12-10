import axios from 'axios';

const API_KEY='AIzaSyCoLDdcXwvCr1nGNnYx-T6FH_aH1WN9kUY'

async function authenticate(mode,email,password){

    const url=`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    const response= await axios.post( url ,{
        email:email,
        password:password,
        returnSecureToken:true,
    })
    const token  =response.data.idToken;

    return token;
}

export function createUser (email,password) {
    return  authenticate('signUp',email,password)  
}

export async function Login (email,password) {
    const token = await authenticate('signInWithPassword',email,password)
    return token;
}