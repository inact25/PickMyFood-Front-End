import React, {Component} from 'react';
import LoginContainer from "../../components/containers/Login/LoginContainer";
import StoreLoginForm from "../../components/forms/Login/StoreLoginForm";
import '../../assets/css/Login.css'
import {isLogin} from "../../apis/Auth/AuthApis";

class StoreLoginLayout extends Component {
    componentDidMount() {
        isLogin(this.props.history, this.props.location)
    }
    render() {
        return (
            <div className='LoginStyle.css'>
                <LoginContainer>
                    <StoreLoginForm go={"/register"}/>
                </LoginContainer>

            </div>
        );
    }
}

export default StoreLoginLayout;