import React from 'react'
import LoginForm from "../components/login-form";

const LoginPage = ({login, authData}) => {
    const {error} = authData;
    return (
        <div>
            <LoginForm login={login} authData={authData}/>
            {error && <div>{error.toString()}</div>}
        </div>
    );
};

export default LoginPage;