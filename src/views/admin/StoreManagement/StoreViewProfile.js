import React, {Component} from 'react';
import '../../../assets/css/shards-dashboards.1.1.0.min.css'
import '../../../assets/css/Dashboard.css'
import '../../../assets/css/Login.css'
import {downloadQRStoreImage, getQRStoreImage} from "../../../apis/Base/QRApis";
import Swal from "sweetalert2";
import {getStoreProfile, updateStoreProfile} from "../../../apis/Store/Store";
import imageLoader from "../../../assets/img/loader2.gif";
import {UploadApis} from "../../../apis/Base/UploadApis";
import {getAllStoreCategory} from "../../../apis/Categories/CategoriesApi";

class StoreViewProfile extends Component {
    state = {
        id: sessionStorage.getItem("strSelected"),
        storeProfile: [],
        storeCategory:[],
        isLoaded: false,
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
                storeProfile: {
                    ...prevState.storeProfile,
                    storeImage: res.secure_url
                }
            }))

        })
    }

    getAllSoreCategory = () => {
        getAllStoreCategory()
            .then((res) => {
                this.setState({
                    storeCategory: res,
                });
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };

    updateStoreProfile = () => {
        updateStoreProfile(this.state.id, this.state.storeProfile)
            .then(() => {
                Swal.fire("Good job!", "Store Updated", "success").then(() => {
                });
            })
            .catch((e) => {
                Swal.fire("Oops", "Something when wrong", "error");
            })
    }

    getQrStore = (e) => {
        getQRStoreImage(e.target.id)
            .then((res) => {
                this.setState(prevState => ({
                    storeProfile: {
                        ...prevState.storeProfile,
                        storeQrPath: res.toString()
                    }
                }))
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            })
    }
    downloadQrStore = (e) => {
        downloadQRStoreImage(e.target.id)
            .then((res) => {
                Swal.fire("Good job!", "QRPick Downloaded", "success")
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            })
    }

    handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        this.setState(prevState => ({
            storeProfile: {
                ...prevState.storeProfile,
                [name]: [value]
            }
        }))
    }
    handleCategoryChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        console.log(name + " " + value)
        console.log(this.state.storeProfile)
        this.setState(prevState => ({
            storeProfile: {
                ...prevState.storeProfile,
                storeCategory: {
                    ...prevState.storeProfile.storeCategory,
                    [name]: [value]
                }
            }
        }))
    }
    getStoreProfile = (uid) => {
        console.log("masuk fun")
        console.log(uid)
        getStoreProfile(uid)
            .then((res) => {
                this.setState({
                    storeProfile: res,
                    isLoaded: true
                })
            }).catch(() => {
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        });
    }

    componentDidMount() {
        this.getStoreProfile(sessionStorage.getItem("strSelected"))
        console.log("key :", sessionStorage.getItem("strSelected"))
        this.getAllSoreCategory()
    }

    render() {
        const data = this.state.storeProfile
        const qr = data.storeQrPath
        console.log("data from store")
        console.log(data)

        return (
            <>
                {this.state.isLoaded ?
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12 align-content-center">
                            <div className="card card-small mb-4 pt-3">
                                <div className="card-header border-bottom text-center">
                                    <div className="mb-3 mx-auto">
                                        <img style={{
                                            width: "120px",
                                            height: "120px",
                                            objectFit: "cover"
                                        }} className="rounded-circle"
                                             src={data.storeImage}
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
                                    <h4 className="mb-0">{data.storeName}</h4>
                                    <span className="text-muted d-block mb-2">Store</span>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item p-4">
                                        <strong className="text-muted d-block mb-2">Status</strong>
                                        <div className="form-label-group">
                                                            <button style={{borderRadius: "1rem", minHeight: "98px"}}
                                                                      name="storeStatus"
                                                                      className="form-control btn btn-warning font-weight-bold"><h1 style={{color:"white"}}>{data.storeStatus}</h1></button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 align-content-center mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-label-group">
                                                <input type="text" id="storeName" name="storeName"
                                                       className="form-control"
                                                       value={data.storeName}
                                                       onChange={(e) => this.handleChangeInput(e)}
                                                       required/>
                                                <label htmlFor="storeName">Store Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-label-group">
                                                <select name="storeCategoryID" onChange={(e) => this.handleCategoryChangeInput(e)}
                                                        className="custom-select" style={{borderRadius: "10rem", height: "3rem"}}>
                                                    <option value={data.storeCategory.storeCategoryID} selected>{data.storeCategory.storeCategoryName}</option>
                                                    {this.state.storeCategory.map((storeCategory) =>
                                                        <option
                                                            value={storeCategory.storeCategoryID}>{storeCategory.storeCategoryName}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-label-group">
                                                <input type="text" id="storeOwner" name="storeOwner"
                                                       className="form-control"
                                                       onChange={(e) => this.handleChangeInput(e)}
                                                       required
                                                       value={data.storeOwner}/>
                                                <label htmlFor="storeOwner">Owner Name </label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-label-group">
                                                <input type="text" id="storeUsername"
                                                       name="storeUsername"
                                                       onChange={(e) => this.handleChangeInput(e)}
                                                       className="form-control" value={data.storeUsername}
                                                       required/>
                                                <label htmlFor="storeUsername">Store Username </label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-label-group">
                                                <input type="password" id="storePassword"
                                                       name="storePassword"
                                                       className="form-control" value={data.storePassword}
                                                       onChange={(e) => this.handleChangeInput(e)}
                                                       required/>
                                                <label htmlFor="storePassword">Store Password</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-label-group">
                                                            <textarea style={{borderRadius: "1rem", minHeight: "200px"}}
                                                                      id="storeAddress"
                                                                      name="storeAddress"
                                                                      className="form-control"
                                                                      onChange={(e) => this.handleChangeInput(e)}
                                                                      value={data.storeAddress}
                                                                      placeholder=" Store Address"
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
                                                    onClick={() => this.updateStoreProfile()}
                                                    type="submit">Update
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 align-content-center ">
                            <div className="card card-small mb-4 pt-3">
                                <div className="card-header text-center">
                                    <div className="mb-3 mx-auto">
                                        <div id="QRCode"
                                        />
                                        {qr !== "0" ?
                                            <div className="qrStore" dangerouslySetInnerHTML={{__html: qr}}/> :
                                            <img style={{maxWidth: "125px"}}
                                                 src="https://i.pinimg.com/originals/77/c3/66/77c366436d8bd35fe8b3ce5b8c66992e.png"/>}
                                    </div>
                                    <div>
                                        <div className="row">
                                            {qr === "0" ?
                                                <div className="col-12">
                                                    <button className="btn btn-primary"
                                                            id={data.storeID}
                                                            style={{borderRadius: "10rem"}}
                                                            onClick={(e) => this.getQrStore(e)}>Generate
                                                    </button>
                                                </div>
                                                :
                                                <div className="col-12">
                                                    <button className="btn btn-warning"
                                                            id={data.storeID}
                                                            style={{borderRadius: "10rem"}}
                                                            onClick={(e) => this.downloadQrStore(e)}>Download
                                                    </button>
                                                </div>
                                            }
                                        </div>


                                    </div>
                                    <br/>
                                    <h4 className="mb-0">Qr Picking</h4>
                                    <span className="text-muted d-block mb-2">Store</span>

                                </div>
                                {qr === "0" ?
                                    <>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item p-4">
                                                <strong className="text-muted d-block mb-2">Description</strong>
                                                <div className="form-label-group">
                                                    <p style={{borderRadius: "1rem", minHeight: "98px"}}
                                                       className="form-control"
                                                    >You can use this QR code for picking food scan
                                                        service. <br/> Costumer must
                                                        scan
                                                        this Qr Code if want to pick their food </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </>
                                    : <div style={{padding:"0.5rem"}} className="card-body"/>}
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


export default StoreViewProfile;