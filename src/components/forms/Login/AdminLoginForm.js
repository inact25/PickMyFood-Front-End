import React, {Component} from 'react';
import {AuthApis} from "../../../apis/Auth/AuthApis";
import Swal from "sweetalert2";
import AdminLog from '../../../assets/img/default/adminLog.svg'
import Cookies from 'universal-cookie';
import {createHashHistory} from "history";


class AdminLoginForm extends Component {

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
            const history = createHashHistory()
            AuthApis(this.state.user, this.state.pass)
                .then((res)=> {
                    if(res.data.auth.userLevelID === 1){
                        Swal.fire("Oops", "Invalid Login", "error")
                    }
                    if(res.data.auth.userLevelID === 3){
                        Swal.fire("Good job!", "Login Successfully", "success").then(()=>{
                            localStorage.setItem('utoken', res.data.auth.authentication.token);
                            localStorage.setItem('uid', res.data.userID);
                            localStorage.setItem('ustype', res.data.auth.userLevelID);
                            cookies.set('btoken', res.data.auth.authentication.token, { path: '/' });
                            history.push('/dashboard');
                            history.go(0)
                        });
                    }
                })
                .catch(()=>{
                    Swal.fire("Oops", "Invalid Login", "error");
                })
        },

    }


    render() {
        return (
            <div>
                <h5 className="card-title text-center">Admin Login</h5>
                <div className="text-center mb-3">
                    <img style={{maxWidth:"10rem"}} src={AdminLog} alt="Admin-logo"/>
                </div>

                <form onSubmit={this.function.handleSubmit} className="form-signin">
                    <div className="form-label-group">
                        <input type="text" id="user" autoComplete="username" name="user" className="form-control" placeholder="Username"
                               required value={this.state.user} onChange={this.function.handleChangeInput}/>
                        <label htmlFor="user">Administrator</label>
                    </div>
                    <div className="form-label-group">
                        <input autoComplete="current-password" type="password" id="pass" name="pass" className="form-control" placeholder="Password" onChange={this.function.handleChangeInput} value={this.state.pass}
                               required/>
                        <label htmlFor="pass">Password</label>
                    </div>
                    <hr/>
                    <button className="btn btn-lg btn-warning btn-block text-uppercase" type="submit">Login
                    </button>
                </form>

            </div>
        );
    }
}

export default AdminLoginForm;