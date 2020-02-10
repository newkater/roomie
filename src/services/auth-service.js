import { encode } from "base-64";

const AUTH_URL =`http://api.roomie.kz/login`;
const SIGNUP_URL = `http://api.roomie.kz/register`;
const CREATE_GROUP_URL =`http://api.roomie.kz/create-group`;
const UPDATE_USER_URL =`http://api.roomie.kz/user/:id`;
const UPDATE_GROUP_URL =`http://api.roomie.kz/profile/:id`;
const DELETE_USER_URL =`http://api.roomie.kz/profile/:id`;

export const signIn = async (credentials) => {
    const auth = 'Basic '+ encode(credentials.email + ":" + credentials.password);
    const result = await fetch(AUTH_URL, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth,
        },
        //body: JSON.stringify({...credentials}),
    });
    if (!result.ok) {
        console.log(result);
        throw new Error('Sign in failed');
    }
    sessionStorage.setItem('email', credentials.email);
    sessionStorage.setItem('password', credentials.password);
    sessionStorage.setItem("auth", auth);
    return await result.json();
};

export const signUp = async (form) => {
    const auth = 'Basic '+ encode(form.email + ":" + form.password);
    console.log("form", form);
    const result = await fetch(SIGNUP_URL, {
        method: "POST",
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...form}),
    });
    if (!result.ok) {
        console.log(result);
        throw new Error(`Sign Up Failed`);
    }
    //console.log("register!!", result);
    sessionStorage.setItem('email', form.email);
    sessionStorage.setItem('password', form.password);
    sessionStorage.setItem("auth", auth);
    return await result.json();
};

export const groupCreation = async (form) => {
    const auth = sessionStorage.getItem('auth');
    const result = await fetch(CREATE_GROUP_URL, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth,
        },
        body: JSON.stringify({...form}),
    });
    if (!result.ok) {
        console.log(result);
        throw new Error(`Group Creation Failed`);
    }
    return await result.json();
};

export const groupUpdate = async (form) => {
    const auth = sessionStorage.getItem('auth');
    const result = await fetch(UPDATE_GROUP_URL, {
        method: "PUT",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth,
        },
        body: JSON.stringify({...form}),
    });
    if (!result.ok) {
        console.log(result);
        throw new Error(`User Update Failed`);
    }
    return await result.json();
};

export const userUpdate = async (form) => {
    const auth = sessionStorage.getItem('auth');
    const result = await fetch(UPDATE_USER_URL, {
        method: "PATCH",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth,
        },
        body: JSON.stringify({...form}),
    });
    if (!result.ok) {
        console.log(result);
        throw new Error(`User Update Failed`);
    }
    return await result.json();
};

export const userDelete = async (credentials) => {
    const auth = sessionStorage.getItem('auth');
    const result = await fetch(DELETE_USER_URL, {
        method: "DELETE",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth,
        },
        body: JSON.stringify({...credentials}),
    });
    if (!result.ok) {
        console.log(result);
        throw new Error(`User Update Failed`);
    }
    return await result.json();
};