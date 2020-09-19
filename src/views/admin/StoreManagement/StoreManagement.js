import React, {Component} from 'react';
import AllStoreData from "../../../variables/store/AllStoreData";
import Pagination from "../../../components/Pagination/Pagination";
import StoreSearch from "../../../variables/store/StoreSearch";
import Swal from "sweetalert2";
import {getActiveStores, getNonactiveStores} from "../../../apis/Store/Store";
import {connect} from "react-redux";
import imageLoader from "../../../assets/img/loader/loader2.gif";
import withReactContent from 'sweetalert2-react-content'
import StoreViewProfile from "./StoreViewProfile";
import {RiDeleteBin6Line, RiStore2Line} from "react-icons/ri";

class StoreManagement extends Component {

    state = {
        isLoaded: false,
    }


    cardPopupRead = (e) => {
        const MySwal = withReactContent(Swal)
        sessionStorage.setItem("strSelected", e.target.id)
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
                                <div className="row">
                                    <div className="col-lg-9 col-md-9 col-sm-12 text-center">
                                        <StoreSearch/>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label style={{maxHeight: "3rem"}}
                                                   className="btn btn-lg btn-warning active btn-pill">
                                                <input onClick={(e) => {
                                                    this.switch(e)
                                                }} type="radio" name="options" id="0" autoComplete="off"/><h5
                                                className='text-dark'><RiStore2Line/></h5>
                                            </label>
                                            <label style={{maxHeight: "3rem"}}
                                                   className="btn btn-lg btn-danger btn-pill">
                                                <input onClick={(e) => {
                                                    this.switch(e)
                                                }} type="radio" name="options" id="1" autoComplete="off"/><h5
                                                className='text-white'><RiDeleteBin6Line/></h5>
                                            </label>
                                        </div>
                                    </div>
                                </div>

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