import React, {Component} from 'react';
import RegisterContainer from "../../components/containers/Register/RegisterContainer";
import "../../assets/css/Login.css"
import RegisterForm from "../../components/forms/Register/RegisterForm";
import {isLogin} from "../../apis/Auth/AuthApis";

class StoreRegisterLayout extends Component {
    componentDidMount() {
        isLogin(this.props.history)
    }

    render() {
        return (
            <div className='LoginStyle.css'>
                <RegisterContainer>
                    <RegisterForm go={"/login"}/>
                </RegisterContainer>

            </div>
        );
    }
}

export default StoreRegisterLayout;