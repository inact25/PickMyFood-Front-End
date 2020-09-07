import React, {Component} from 'react';
import {Link, Redirect, useHistory} from "react-router-dom"
import {Auth, isLogin} from "../../../apis/Auth/Auth";
import Swal from "sweetalert2";
import {createBrowserHistory} from "history";

// const history = useHistory();

class LoginForm extends Component {

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
            const history = createBrowserHistory()
            Auth(this.state.user, this.state.pass)
                .then((res)=> {
                        Swal.fire("Good job!", "Login Successfully", "success").then(()=>{
                            localStorage.setItem('utoken', res.data.data.authentication.token);
                            localStorage.setItem('uid', res.data.data.userID);
                            localStorage.setItem('ulvID', res.data.data.userLevelID);
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
        console.log(this.state.user,this.state.pass)
        return (
            <div>
                <h5 className="card-title text-center">Login</h5>
                <form onSubmit={this.function.handleSubmit} className="form-signin">

                    <div className="form-label-group">
                        <input type="text" id="user" autoComplete="username" name="user" className="form-control" placeholder="Username"
                               required value={this.state.user} onChange={this.function.handleChangeInput}/>
                        <label htmlFor="user">Username</label>
                    </div>
                    <div className="form-label-group">
                        <input autoComplete="current-password" type="password" id="pass" name="pass" className="form-control" placeholder="Password" onChange={this.function.handleChangeInput} value={this.state.pass}
                               required/>
                        <label htmlFor="pass">Password</label>
                    </div>
                    <hr/>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login
                    </button>
                    <Link className="d-block text-center mt-2 small" to={go}>Dont have an account ? Register here</Link>
                </form>

            </div>
        );
    }
}

export default LoginForm;