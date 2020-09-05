import React, {Component} from 'react';

class RegisterForm extends Component {
    render() {
        return (
            <div>
                <h5 className="card-title text-center">Register Store</h5>
                <form className="form-signin">
                    <div className="row">
                        <div className="col-8">
                            <div className="form-label-group">
                                <input type="text" id="storeName" className="form-control" placeholder="Store Name"
                                       required/>
                                <label htmlFor="storeName">Store Name</label>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-label-group">
                                <select className="custom-select" style={{borderRadius:"10rem",height:"3rem"}}>
                                    <option selected>Select Category</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-label-group">
                                <input type="text" id="storeOwner" className="form-control" placeholder="Store Owner"
                                       required/>
                                <label htmlFor="storeOwner">Store Owner</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-label-group">
                                <input type="text" id="storeUsername" className="form-control" placeholder="storeUsername"
                                       required/>
                                <label htmlFor="storeUsername">Store Username</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-label-group">
                                <input type="password" id="storePassword" className="form-control" placeholder="Store Password"
                                       required/>
                                <label htmlFor="storePassword">Store Password</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-label-group" >
                                <textarea style={{borderRadius:"1rem"}} type="text" id="storeAddress" className="form-control" placeholder="Store Address"
                                       required/>

                            </div>
                        </div>
                    </div>
                    <hr/>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register
                    </button>
                    <a className="d-block text-center mt-2 small" href="#">Have an account ? Login here</a>
                </form>

            </div>
        );
    }
}

export default RegisterForm;