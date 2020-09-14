import React, {Component} from 'react';
import {getUserProfile, updateUserProfile} from "../../../apis/User/UserApis";
import Swal from "sweetalert2";
import imageLoader from "../../../assets/img/loader2.gif";
import {UploadApis} from "../../../apis/Base/UploadApis";

class UserViewProfile extends Component {

    state = {
        id: sessionStorage.getItem("strSelected"),
        userProfile: [],
        isLoaded: false
    }

    handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        this.setState(prevState => ({
            userProfile: {
                ...prevState.userProfile,
                [name]: [value]
            }
        }))
    }
    handleAuthChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        this.setState(prevState => ({
            userProfile: {
                ...prevState.userProfile,
                auth: {
                    ...prevState.userProfile.auth,
                    [name]: [value]
                }
            }
        }))
    }

    updateUserProfile = () => {
        updateUserProfile(this.state.id,this.state.userProfile)
            .then(()=>{
                Swal.fire("Good job!", "Store Updated", "success")
            })
            .catch(()=>{
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            })
    }

    getUserProfile = (id) => {
        getUserProfile(id)
            .then((res) => {
                this.setState({
                    userProfile: res,
                    isLoaded: true,
                })
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            })
    }

    uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'pickMyFood')
        this.setState({
            imgUploading: true
        })
        UploadApis(data).then((res) => {
            this.setState(prevState => ({
                userProfile: {
                    ...prevState.userProfile,
                    userImage: res.secure_url
                }
            }))

        })
    }

    componentDidMount() {
        this.getUserProfile(sessionStorage.getItem("strSelected"))
    }

    render() {
        const data = this.state.userProfile
        return (
            <>
                {this.state.isLoaded ?
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 align-content-center">
                            <div className="card card-small mb-4 pt-3">
                                <div className="card-header border-bottom text-center">
                                    <div className="mb-3 mx-auto">
                                        <img style={{
                                            width: "120px",
                                            height: "120px",
                                            objectFit: "cover"
                                        }} className="rounded-circle"
                                             src={data.userImage}
                                             alt="User Avatar" width="110"/>
                                    </div>
                                    <div>
                                        <label htmlFor="file" className="btn btn-primary justify-content-center"
                                               style={{borderRadius: "10rem"}}>Change Profile</label>
                                        <input id="file" style={{visibility: "hidden"}}
                                               type="file"
                                               name="file"
                                               onChange={(e) => this.uploadImage(e)}
                                               placeholder="Upload Profile Image"
                                        />
                                    </div>
                                    <h4 className="mb-0">{data.userFirstName + " " +data.userLastName}</h4>
                                    <span
                                        className="btn btn-warning btn-sm rounded-pill mt-2 disabled font-weight-bold">Poin : {data.userPoin}</span>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item p-4">
                                        <strong className="text-muted d-block mb-2">Status</strong>
                                        <div className="form-label-group">
                                                            <textarea style={{borderRadius: "1rem", minHeight: "98px"}}
                                                                      name="userStatus"
                                                                      onChange={(e) => this.handleChangeInput(e)}
                                                                      className="form-control"
                                                                      value={data.userStatus}
                                                                      required/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 align-content-center mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-label-group">
                                                <input type="text" id="userFirstName" name="userFirstName"
                                                       className="form-control"
                                                       value={data.userFirstName}
                                                       onChange={(e) => this.handleChangeInput(e)}
                                                       required/>
                                                <label htmlFor="userFirstName">Firstname</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-10">
                                            <div className="form-label-group">
                                                <input type="text" id="userLastName" name="userLastName"
                                                       className="form-control"
                                                       value={data.userLastName}
                                                       onChange={(e) => this.handleChangeInput(e)}
                                                       required/>
                                                <label htmlFor="userLastName">Lastname</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-label-group">
                                                <input type="email" id="userEmail" name="userEmail"
                                                       className="form-control"
                                                       value={data.userEmail}
                                                       onChange={(e) => this.handleChangeInput(e)}
                                                       required/>
                                                <label htmlFor="userEmail">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-label-group">
                                                <input type="number" id="userPhone" name="userPhone"
                                                       className="form-control"
                                                       value={data.userPhone}
                                                       onChange={(e) => this.handleChangeInput(e)}
                                                       required/>
                                                <label htmlFor="userPhone">Phone</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-label-group">
                                                <input type="text" id="username"
                                                       name="username"
                                                       onChange={(e) => this.handleAuthChangeInput(e)}
                                                       className="form-control" value={data.auth.username}
                                                       required/>
                                                <label htmlFor="username">Username </label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-label-group">
                                                <input type="password" id="password"
                                                       name="password"
                                                       className="form-control"
                                                       value={data.auth.password}
                                                       onChange={(e) => this.handleAuthChangeInput(e)}
                                                       required/>
                                                <label htmlFor="password">Password</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-label-group">
                                                            <textarea style={{borderRadius: "1rem", minHeight: "205px"}}
                                                                      id="userAddress"
                                                                      name="userAddress"
                                                                      className="form-control"
                                                                      onChange={(e) => this.handleChangeInput(e)}
                                                                      value={data.userAddress}
                                                                      placeholder=" User Address"
                                                                      required/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <button style={{borderRadius: "10rem"}}
                                                    className="btn btn-lg btn-danger btn-block "
                                                    onClick=""
                                                    type="submit">Delete
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <button style={{borderRadius: "10rem"}}
                                                    className="btn btn-lg btn-primary btn-block "
                                                    onClick={() => this.updateUserProfile()}
                                                    type="submit">Update
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className="text-center">
                        <img width="150px" src={imageLoader} alt="loading"/>
                        <p>loading...</p>
                    </div>}
            </>
        );
    }
}

export default UserViewProfile;