import React, {Component} from 'react';
import AdminProfileData from "../../../variables/admin/AdminProfileData";
import AdminProfileDataDetail from "../../../variables/admin/AdminProfileDataDetail";

class AdminProfile extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 align-content-center">
                    <AdminProfileData/>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 align-content-center">
                    <AdminProfileDataDetail/>
                </div>
            </div>
        );
    }
}
//a

export default AdminProfile;