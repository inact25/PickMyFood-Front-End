import React, {Component} from 'react';
import LoginContainer from "../components/containers/Login/LoginContainer";
import LoginForm from "../components/forms/Login/LoginForm";
import '../assets/css/Login.css'

class LoginLayout extends Component {
    render() {
        return (
            <div className='LoginStyle.css'>
                <LoginContainer>
                    <LoginForm/>
                </LoginContainer>

            </div>
        );
    }
}

export default LoginLayout;