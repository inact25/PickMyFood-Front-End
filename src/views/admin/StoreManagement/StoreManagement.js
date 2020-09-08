import React, {Component} from 'react';
import AllStoreData from "../../../variables/admin/AllStoreData";
import Pagination from "../../../components/Pagination/Pagination";
import StoreSearch from "../../../variables/admin/StoreSearch";
import Swal from "sweetalert2";
import {getAllStores} from "../../../apis/Admin/AdminStore";
import {connect} from "react-redux";
import imageLoader from "../../../assets/img/loader2.gif";
import withReactContent from 'sweetalert2-react-content'
import AdminProfileData from "../../../variables/admin/AdminProfileData";
import AdminProfileDataDetail from "../../../variables/admin/AdminProfileDataDetail";

class StoreManagement extends Component {

    state = {
        isLoaded: false
    }

    cardPopup = () => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            html:
          <div className="row">
              <div className="col-lg-4">
                  <AdminProfileData/>
              </div>
              <div className="col-lg-8">
                  <AdminProfileDataDetail/>
              </div>
          </div>,
            customClass: 'swal-detail',
            showCancelButton: false,
            showConfirmButton: false
    })
    }

    getAllStoresData = () => {
        getAllStores()
            .then((res) => {
                this.props.UserListData(res)
                this.setState({
                    isLoaded: true,
                });
            })
            .catch(() => {
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
                <div className="card card-small mb-4 pt-3">
                    {this.state.isLoaded ?
                        <>
                            <div className="card-body border-bottom">
                                <StoreSearch/>
                                <hr/>
                                <AllStoreData data={allStore}
                                              load={this.state.isLoaded}
                                              dataPopup={this.cardPopup}
                                />
                            </div>
                            <div className="card-footer">
                                <Pagination/>
                            </div>
                        </>
                        : <div className="text-center">
                            <img width="150px" src={imageLoader} alt="loading"/>
                            <p>loading...</p>
                        </div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(StoreManagement);