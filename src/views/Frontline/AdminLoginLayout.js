import React, {Component} from 'react';
import LoginContainer from "../../components/containers/Login/LoginContainer";
import AdminLoginForm from "../../components/forms/Login/AdminLoginForm";
import '../../assets/css/Login.css'
import {isLogin} from "../../apis/Auth/AuthApis";

class AdminLoginLayout extends Component {
    componentDidMount() {
        isLogin(this.props.history)
    }
    render() {
        return (
            <div className='LoginStyle.css'>
                <LoginContainer>
                    <AdminLoginForm go={"/register"}/>
                </LoginContainer>

            </div>
        );
    }
}

export default AdminLoginLayout;