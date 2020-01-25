const AUTH_URL =`http://localhost:9200/login`;
const SIGNUP_URL = `http://localhost:9200/register`;
const CREATE_GROUP_URL =`http://localhost:9200/create-group`;
const UPDATE_USER_URL =`http://localhost:9200/profile/:id`;


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
    return await result.json();
};

export const signUp = async (form) => {
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
    return await result.json();
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