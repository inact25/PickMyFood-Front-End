import React, {Component} from 'react';
import AllStoreData from "../../../variables/admin/AllStoreData";
import Pagination from "../../../components/Pagination/Pagination";
import StoreSearch from "../../../variables/admin/StoreSearch";
import {getAllUsers} from "../../../apis/Admin/AdminUser";
import Swal from "sweetalert2";
import {getAllStores} from "../../../apis/Admin/AdminStore";
import {connect} from "react-redux";

class StoreManagement extends Component {

    state={
        isLoaded:false
    }

    getAllStoresData = () => {
        getAllStores()
            .then((res) => {
                this.props.UserListData(res)
                this.setState({
                    isLoaded: true,
                });
            })
            .catch((e) => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };
    componentDidMount() {
        this.getAllStoresData()
    }

    render() {
        const allStore = this.props.allStoreData
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <StoreSearch/>
                        <hr/>
                        <AllStoreData data={allStore} load={this.state.isLoaded}/>
                    </div>
                    <div className="card-footer">
                        <Pagination/>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allStoreData: state.fetchReducer.FetchAction.allStoreData

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        UserListData: (data) => {
            dispatch({
                type: 'GETALLSTORES',
                JsonData: data
            })
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps) (StoreManagement);