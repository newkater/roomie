import React from 'react'
import LoginForm from "../components/login-form";

const LoginPage = ({login, authData}) => {
    const {userId, token, userEmail, loading, error} = authData;
    return (
        <div>
            <LoginForm login={login}/>
            {error && <div>{error.toString()}</div>}
        </div>
    );
};

export default LoginPage;