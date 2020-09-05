import React, {Component} from 'react';
import StoreSearch from "../../../variables/admin/StoreSearch";
import AllStoreData from "../../../variables/admin/AllStoreData";
import Pagination from "../../../components/Pagination/Pagination";
import UserSearch from "../../../variables/admin/UserSearch";
import AllUserData from "../../../variables/admin/AllUserData";

class UserManagement extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <UserSearch/>
                        <hr/>
                        <AllUserData/>
                    </div>
                    <div className="card-footer">
                        <Pagination/>
                    </div>
                </div>
            </>
        );
    }
}

export default UserManagement;