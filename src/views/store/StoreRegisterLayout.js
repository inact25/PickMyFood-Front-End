import React, {Component} from 'react';
import RegisterContainer from "../../components/containers/Register/RegisterContainer";
import "../../assets/css/Login.css"
import RegisterForm from "../../components/forms/Register/RegisterForm";

class StoreRegisterLayout extends Component {
    render() {
        return (
            <div className='LoginStyle.css'>
                <RegisterContainer>
                    <RegisterForm/>
                </RegisterContainer>

            </div>
        );
    }
}

export default StoreRegisterLayout;