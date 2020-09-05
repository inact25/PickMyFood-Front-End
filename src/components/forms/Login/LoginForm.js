import React, {Component} from 'react';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <h5 className="card-title text-center">Login</h5>
                <form className="form-signin">

                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                               required/>
                        <label htmlFor="inputEmail">Username</label>
                    </div>
                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                               required/>
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <hr/>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login
                    </button>
                    <a className="d-block text-center mt-2 small" href="#">Dont have an account ? Register here</a>
                </form>

            </div>
        );
    }
}

export default LoginForm;