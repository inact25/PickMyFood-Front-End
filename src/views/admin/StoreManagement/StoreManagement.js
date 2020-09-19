import React, {Component} from 'react';
import AllStoreData from "../../../variables/admin/AllStoreData";
import Pagination from "../../../components/Pagination/Pagination";
import StoreSearch from "../../../variables/admin/StoreSearch";
import Swal from "sweetalert2";
import {getActiveStores, getNonactiveStores} from "../../../apis/Store/Store";
import {connect} from "react-redux";
import imageLoader from "../../../assets/img/loader/loader2.gif";
import withReactContent from 'sweetalert2-react-content'
import StoreViewProfile from "./StoreViewProfile";

class StoreManagement extends Component {

    state = {
        isLoaded: false,
    }


    cardPopupRead = (e) => {
        const MySwal = withReactContent(Swal)
        sessionStorage.setItem("strSelected",e.target.id)
        MySwal.fire({
            html: (
                <>
                <StoreViewProfile/>
            </>),
            customClass: 'swal-detail',
            showCancelButton: true,
            showConfirmButton: false,
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allStoreData !== this.props.allStoreData) {
            this.getActiveStoresData()
        }
    }

    getActiveStoresData = () => {
        getActiveStores()
            .then((res) => {
                this.props.StoreListData(res)
                this.setState({
                    isLoaded: true,
                });
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };

    getAllStoresData = () => {
        getNonactiveStores()
            .then((res) => {
                this.props.StoreListData(res)
                this.setState({
                    isLoaded: true,
                });
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };

    componentDidMount() {
        this.getActiveStoresData()
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
                                              dataPopup={this.cardPopupRead}

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
        StoreListData: (data) => {
            dispatch({
                type: 'GETALLSTORES',
                JsonData: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreManagement);