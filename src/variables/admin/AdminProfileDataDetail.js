import React, {Component} from 'react';
import imageLoader from "../../assets/img/loader2.gif";

class AdminProfileDataDetail extends Component {

    render() {
        const {data, load, changeInput,authChangeInput, onUpdate} = this.props
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        {load ?
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-label-group">
                                        <input type="text" id="userFirstName" name="userFirstName" className="form-control"
                                                onChange={(e)=>changeInput(e)}
                                               value={data.userFirstName}
                                               required />
                                        <label htmlFor="userFirstName">Firstname </label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-label-group">
                                        <input type="text" id="userLastName" name="userLastName" className="form-control"
                                               onChange={(e)=>changeInput(e)}
                                               value={data.userLastName}
                                               required />
                                        <label htmlFor="userLastName">Lastname </label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-label-group">
                                        <input type="text" id="username"
                                               name="username"
                                               onChange={(e)=>authChangeInput(e)}
                                               className="form-control" value={data.auth.username}
                                               required />
                                        <label htmlFor="username">Username </label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword"
                                               name="password"
                                               className="form-control" value={data.auth.password}
                                               onChange={(e)=>authChangeInput(e)}
                                               required/>
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-label-group">
                                                            <textarea style={{borderRadius: "1rem", minHeight: "255px"}}
                                                                      id="userAddress"
                                                                      name="userAddress"
                                                                      className="form-control"
                                                                      onChange={(e)=>changeInput(e)}
                                                                      value={data.userAddress}
                                                                      required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button style={{borderRadius: "10rem"}}
                                            className="btn btn-lg btn-primary btn-block "
                                            onClick={() => onUpdate()}
                                            type="submit">Update
                                    </button>
                                </div>

                            </div>
                            : <div className="text-center">
                                <img width="150px" src={imageLoader} alt="loading"/>
                                <p>loading...</p>
                            </div>
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default AdminProfileDataDetail;