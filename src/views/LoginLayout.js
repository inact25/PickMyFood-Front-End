import React, {Component} from 'react';
import LoginContainer from "../components/containers/Login/LoginContainer";
import LoginForm from "../components/forms/Login/LoginForm";
import '../assets/css/Login.css'
import {isLogin} from "../apis/Auth/Auth";

class LoginLayout extends Component {
    componentDidMount() {
        isLogin(this.props.history, this.props.location)
    }
    render() {
        return (
            <div className='LoginStyle.css'>
                <LoginContainer>
                    <LoginForm go={"/register"}/>
                </LoginContainer>

            </div>
        );
    }
}

export default LoginLayout;