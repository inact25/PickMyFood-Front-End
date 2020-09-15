import React, {Component} from 'react';
import imageLoader from "../../assets/img/loader/loader2.gif";

class AdminProfileData extends Component {
    render() {
        const {data, load, changePicture, changeInput} = this.props

        return (
            <>
                <div className="card card-small mb-4 pt-3">
                    {load ?
                        <>
                            <div className="card-header border-bottom text-center">
                                <div className="mb-3 mx-auto">
                                    <img style={{
                                        width:"120px",
                                        height:"120px",
                                        objectFit:"cover"
                                    }} className="rounded-circle"
                                         src={data.userImage}
                                         alt="User Avatar" width="110"/>
                                </div>
                                <div>
                                    <label htmlFor="file" className="btn btn-dark justify-content-center" style={{borderRadius:"10rem"}}>Change Profile</label>
                                    <input id="file" style={{visibility:"hidden"}} type="file" name="file" placeholder="Upload Profile Image" onChange={(e)=>changePicture(e)}/>
                                </div>
                                <h4 className="mb-0">{data.userFirstName + " " + data.userLastName}</h4>
                                <span className="text-muted d-block mb-2">App Admin</span>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-4">
                                    <strong className="text-muted d-block mb-2">Status</strong>
                                    <div className="form-label-group">
                                                            <textarea style={{borderRadius: "1rem", minHeight: "98px"}}
                                                                      name="userStatus"
                                                                      onChange={(e)=>changeInput(e)}
                                                                      className="form-control"
                                                                      value={data.userStatus}
                                                                      required/>
                                    </div>
                                </li>
                            </ul>
                        </>
                        : <div className="text-center">
                            <img width="150px" src={imageLoader} alt="loading"/>
                            <p>loading...</p>
                        </div>
                    }
                </div>

            </>
        );
    }
}

export default  AdminProfileData;