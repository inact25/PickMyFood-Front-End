import React, {Component} from 'react';
import {Link} from "react-router-dom"
import {StoreLogin} from "../../../apis/Auth/AuthApis";
import Swal from "sweetalert2";
import {createBrowserHistory} from "history";
import StoreLog from '../../../assets/img/default/StoreLog.svg'
import Cookies from "universal-cookie";

class StoreLoginForm extends Component {

    state = {
        user:'',
        pass:'',
        isLoaded:false
    }

    function = {
        handleChangeInput: (event) => {
            const name = event.target.name;
            this.setState({
                ...this.state,
                [name]: event.target.value,
            });
        },
        handleSubmit : event => {
            event.preventDefault();
            const cookies = new Cookies();
            const history = createBrowserHistory()
            StoreLogin(this.state.user, this.state.pass)
                .then((res)=> {
                        Swal.fire("Good job!", "Login Successfully", "success").then(()=>{
                            localStorage.setItem('utoken', res.data.token.token);
                            localStorage.setItem('uid', res.data.storeID);
                            localStorage.setItem('ustype', "0");
                            cookies.set('btoken', res.data.token.token, { path: '/' });
                            history.push('/dashboard');
                            history.go(0)
                        });
                })
                .catch(()=>{
                    Swal.fire("Oops", "Invalid Login", "error");
                })
        },

    }


    render() {
        const {go} = this.props
        return (
            <div>
                <h5 className="card-title text-center">Store Login</h5>
                <div className="text-center mb-3">
                    <img style={{maxWidth:"10rem"}} src={StoreLog} alt="Admin-logo"/>
                </div>
                <form onSubmit={this.function.handleSubmit} className="form-signin">

                    <div className="form-label-group">
                        <input type="text" id="user" autoComplete="username" name="user" className="form-control" placeholder="Username"
                               required value={this.state.user} onChange={this.function.handleChangeInput}/>
                        <label htmlFor="user">Store Username</label>
                    </div>
                    <div className="form-label-group">
                        <input autoComplete="current-password" type="password" id="pass" name="pass" className="form-control" placeholder="Password" onChange={this.function.handleChangeInput} value={this.state.pass}
                               required/>
                        <label htmlFor="pass">Password</label>
                    </div>
                    <hr/>
                    <button className="btn btn-lg btn-warning btn-block text-uppercase" type="submit">Login
                    </button>
                    <Link className="d-block text-center mt-2 small" to={go}>Dont have an account ? Register here</Link>
                </form>

            </div>
        );
    }
}

export default StoreLoginForm;