import React, {Component} from 'react';

class AdminProfileDataDetail extends Component {

    render() {
        const {data, status,handle} = this.props
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-label-group">
                                    <input type="text" id="inputLastName" className="form-control"
                                           value={data.userFirstName}
                                           required disabled={!status}/>
                                    <label htmlFor="inputFirstname">Firstname </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-label-group">
                                    <input type="text" id="inputLastName" className="form-control"
                                           value={data.userLastName}
                                           required disabled={!status}/>
                                    <label htmlFor="inputLastname">Lastname </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-label-group">
                                    <input type="text" id="inputUsername"
                                           className="form-control" value="{data.auth.username"
                                           required disabled={!status}/>
                                    <label htmlFor="inputUsername">Username </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-label-group">
                                    <input type="password" id="inputPassword"
                                           className="form-control" value="{data.auth.password}"
                                           required disabled={!status}/>
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-label-group">
                                                            <textarea style={{borderRadius: "1rem", minHeight: "98px"}}
                                                                      id="inputAddress"
                                                                      className="form-control"
                                                                      value={data.userAddress}
                                                                      required disabled={!status}/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-label-group">
                                                            <textarea style={{borderRadius: "1rem", minHeight: "98px"}}
                                                                      id="inputStatus"
                                                                      className="form-control"
                                                                      value={data.userStatus}
                                                                      required disabled={!status}/>
                                </div>
                            </div>
                            <div className="col-12">
                                <button style={{borderRadius: "10rem"}}
                                        className="btn btn-lg btn-primary btn-block text-uppercase"
                                        onClick={() => handle()}
                                        type="submit">Update
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AdminProfileDataDetail;