import React, {Component} from 'react';
import RegisterContainer from "../../components/containers/Register/RegisterContainer";
import "../../assets/css/Login.css"
import RegisterForm from "../../components/forms/Register/RegisterForm";
import {isRegister} from "../../apis/Auth/Auth";

class StoreRegisterLayout extends Component {
    componentDidMount() {
        isRegister(this.props.history, this.props.location)
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