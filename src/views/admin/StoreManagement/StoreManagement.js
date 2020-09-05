import React, {Component} from 'react';
import AllStoreData from "../../../variables/admin/AllStoreData";
import Pagination from "../../../components/Pagination/Pagination";
import StoreSearch from "../../../variables/admin/StoreSearch";

class StoreManagement extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <StoreSearch/>
                        <hr/>
                        <AllStoreData/>
                    </div>
                    <div className="card-footer">
                        <Pagination/>
                    </div>
                </div>
            </>
        );
    }
}

export default StoreManagement;