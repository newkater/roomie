const AUTH_URL =`http://localhost:9301/login`;
const SIGNUP_URL = `http://localhost:9301/register`;
const CREATE_GROUP_URL =`http://localhost:9301/create-group`;
const UPDATE_USER_URL =`http://localhost:9301/profile/:id`;
const UPDATE_GROUP_URL =`http://localhost:9301/group/:id`;
const DELETE_USER_URL =`http://localhost:9301/profile/:id`;

export const signIn = async (credentials) => {
    const result = await fetch(AUTH_URL, {
        method: "POST",
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...credentials}),
    });
    if (!result.ok) {
        console.log(result);
        throw new Error('Sign in failed');
    }
    sessionStorage.setItem('email', credentials.email);
    sessionStorage.setItem('password', credentials.password);
    return await result.json();
};

export const signUp = async (form) => {
    const result = fetch(SIGNUP_URL, {
        method: "POST",
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...form}),
    }).then(result=> result.json()).then(result => {
        console.log(`signup result`);
        if (!result.ok) {
            throw new Error(`Sign Up Failed`);
        }
       return result
    });
    return result;
    // if (!result.ok) {
    //     console.log(result);
    //     throw new Error(`Sign Up Failed`);
    // }
    // sessionStorage.setItem('email', form.email);
    // sessionStorage.setItem('password', form.password);
    // return await result.json();
};

export const groupCreation = async (form) => {
    const result = await fetch(CREATE_GROUP_URL, {
        method: "POST",
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...form}),
    });
    if (!result.ok) {
        console.log(result);
        throw new Error(`Group Creation Failed`);
    }
    return await result.json();
};

export const groupUpdate = async (form) => {
    const result = await fetch(UPDATE_GROUP_URL, {
        method: "PUT",
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...form}),
    });
    if (!result.ok) {
        console.log(result);
        throw new Error(`User Update Failed`);
    }
    return await result.json();
};

export const userUpdate = async (form) => {
    const result = await fetch(UPDATE_USER_URL, {
        method: "PUT",
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...form}),
    });
    if (!result.ok) {
        console.log(result);
        throw new Error(`User Update Failed`);
    }
    return await result.json();
};

export const userDelete = async (credentials) => {
    const result = await fetch(DELETE_USER_URL, {
        method: "DELETE",
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...credentials}),
    });
    if (!result.ok) {
        console.log(result);
        throw new Error(`User Update Failed`);
    }
    return await result.json();
};