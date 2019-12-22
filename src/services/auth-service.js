import React from 'react';
const AUTH_URL =`http://localhost:9200/login`;
const SIGNUP_URL = `http://localhost:9200/register`;

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