import React, {Component} from 'react'
import LoginForm from "../components/login-form";
import * as PropTypes from "prop-types";

class LoginPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        let {login, authData} = this.props;
        const {error} = authData;
        return (
            <div>
                <LoginForm login={login} authData={authData}/>
                {error && <div>{error.toString()}</div>}
            </div>
        );
    }
}

LoginPage.propTypes = {
    login: PropTypes.any,
    authData: PropTypes.any
}

export default LoginPage;