import React, {Component} from 'react';

class AdminProfileDataDetail extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-label-group">
                                    <input type="text" id="inputName" className="form-control"
                                           value="Angga Adji"
                                           required disabled={true}/>
                                    <label htmlFor="inputFirstname">Firstname </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-label-group">
                                    <input type="text" id="inputName" className="form-control"
                                           value="Surya"
                                           required disabled={true}/>
                                    <label htmlFor="inputLastname">Lastname </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-label-group">
                                    <input type="text" id="inputUsername"
                                           className="form-control" value="Angga25"
                                           required disabled={true}/>
                                    <label htmlFor="inputUsername">Username </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-label-group">
                                    <input type="password" id="inputPassword"
                                           className="form-control" value="Anggaadji"
                                           required disabled={true}/>
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-label-group">
                                                            <textarea style={{borderRadius: "1rem", minHeight: "98px"}}
                                                                      type="text"
                                                                      id="inputAddress"
                                                                      className="form-control"
                                                                      value="Klaten, Jawa Tengah, Indonesia"
                                                                      required disabled={true}/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-label-group">
                                                            <textarea style={{borderRadius: "1rem", minHeight: "98px"}}
                                                                      type="text"
                                                                      id="inputStatus"
                                                                      className="form-control"
                                                                      value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
                                                                      required disabled={true}/>
                                </div>
                            </div>
                            <div className="col-12">
                                <button style={{borderRadius: "10rem"}}
                                        className="btn btn-lg btn-primary btn-block text-uppercase"
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