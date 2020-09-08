import React, {Component} from 'react';
import AdminProfileData from "../../../variables/admin/AdminProfileData";
import AdminProfileDataDetail from "../../../variables/admin/AdminProfileDataDetail";
import {connect} from "react-redux";
import Swal from "sweetalert2";
import {getAdminProfile, updateAdminProfile} from "../../../apis/Admin/Admin";
import {UploadApis} from "../../../apis/Base/UploadApis";

class AdminProfile extends Component {
    state = {
        isLoaded: false,
        id: localStorage.getItem("uid"),
        isEditable: false,
        imgUploading: false,
        imageUrl: "",
        restData: [],

    }

    handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        console.log(`${name} + ${value}`)
        this.setState(prevState => ({
            restData: {
                ...prevState.restData,
                [name]: [value]
            }
        }))

    }
    handleAuthChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        this.setState(prevState => ({
            restData: {
                ...prevState.restData,
                auth: {
                    ...prevState.restData.auth,
                    [name]: [value]
                }

            }
        }))

    }


    updateProfile = () => {
       updateAdminProfile(this.state.id,this.state.restData)
            .then(() => {
                Swal.fire("Good job!", "Profile Updated", "success").then(() => {
                });
            })
            .catch(() => {
                Swal.fire("Oops", "Something when wrong", "error");
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
                restData: {
                    ...prevState.restData,
                   userImage: res.secure_url
                }
            }))

        })
    }

    getAdminProfile = (id) => {
        getAdminProfile(id)
            .then((res) => {
                this.props.UserData(res)
                this.setState({
                    isLoaded: true,
                    restData: res
                })
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };

    componentDidMount() {
        this.getAdminProfile(this.state.id)
    };

    render() {

        const adminData = this.state.restData
        return (
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 align-content-center">
                    <AdminProfileData data={adminData} load={this.state.isLoaded} changePicture={this.uploadImage}
                                      changeInput={this.handleChangeInput}/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 align-content-center">
                    <AdminProfileDataDetail load={this.state.isLoaded} data={adminData}
                                            status={this.state.isEditable} changeInput={this.handleChangeInput}
                                            authChangeInput={this.handleAuthChange} onUpdate={this.updateProfile}/>
                </div>
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        usersData: state.fetchReducer.FetchAction.userData

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        UserData: (data) => {
            dispatch({
                type: 'GETADMINDATA',
                JsonData: data
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile);