import React, {Component} from 'react';
import AdminProfileData from "../../../variables/admin/AdminProfileData";
import AdminProfileDataDetail from "../../../variables/admin/AdminProfileDataDetail";
import {connect} from "react-redux";
import Swal from "sweetalert2";
import {getAdminProfile} from "../../../apis/Admin/Admin";

class AdminProfile extends Component {
    state = {
        isLoaded: false,
        id: localStorage.getItem("uid"),
        isEditable:false
    }

    handleUpdate =()=>{
        this.setState({
            isEditable:!this.state.isEditable
        })

    }

    getAdminProfile = (id) => {
        getAdminProfile(id)
            .then((res) => {
                this.props.UserData(res)
            })
            .catch((e) => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };

    componentDidMount() {
        this.getAdminProfile(this.state.id)
    };
    render() {
        const adminData = this.props.usersData

        return (
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 align-content-center">
                    <AdminProfileData data={adminData}/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 align-content-center">
                    <AdminProfileDataDetail data={adminData} handle={this.handleUpdate} status={this.state.isEditable}/>
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


export default connect(mapStateToProps, mapDispatchToProps)  (AdminProfile);