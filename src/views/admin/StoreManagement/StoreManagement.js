import React, {Component} from 'react';
import AllStoreData from "../../../variables/store/AllStoreData";
import Pagination from "../../../components/Pagination/Pagination";
import StoreSearch from "../../../variables/store/StoreSearch";
import Swal from "sweetalert2";
import {getActiveStores, getNonactiveStores} from "../../../apis/Store/StoreApi";
import {connect} from "react-redux";
import imageLoader from "../../../assets/img/loader/loader2.gif";
import withReactContent from 'sweetalert2-react-content'
import StoreViewProfile from "./StoreViewProfile";
import {RiDeleteBin6Line, RiStore2Line} from "react-icons/ri";
import {reactiveStore} from "../../../apis/Store/StoreApi";

class StoreManagement extends Component {

    state = {
        isLoaded: false,
        switch:0
    }

    switch = (e) => {
        this.setState({
            switch: parseInt(e.target.id)
        })
    }

    cardPopupChange = (e) => {
        const id = e.target.id
        const myswal = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success btn-pill m-1',
                cancelButton: 'btn btn-danger btn-pill m-1'
            },
            buttonsStyling: false
        })
        myswal.fire({
            title: 'Wanna reactive this store ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, restore it!'
        }).then((result) => {
            if (result.isConfirmed) {
                reactiveStore(id)
                    .then(() => {
                            myswal.fire(
                                'Actived!',
                                'Store has been reactived.',
                                'success'
                            )

                        }
                    ).catch((e) => {
                    Swal.fire("Oops", "Connection Timeout !!!", "error")
                })


            }
        })

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
        if (prevProps.activeStoreData !== this.props.activeStoreData) {
            this.getActiveStoresData()
        }
        if (prevProps.deletedStoreData !== this.props.deletedStoreData) {
            this.getDeletedStoresData()
        }
    }

    getActiveStoresData = () => {
        getActiveStores()
            .then((res) => {
                this.props.StoreActiveData(res)
                this.setState({
                    isLoaded: true,
                });
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };

    getDeletedStoresData = () => {
        getNonactiveStores()
            .then((res) => {
                this.props.StoreDeletedData(res)
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
        this.getDeletedStoresData()
    }

    render() {
        const activeStore = this.props.activeStoreData
        const deletedStore = this.props.deletedStoreData
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
                                {this.state.switch !== 1 ?
                                <AllStoreData data={activeStore}
                                              load={this.state.isLoaded}
                                              dataPopup={this.cardPopupRead}

                                />
                                :
                                    <AllStoreData data={deletedStore}
                                                  load={this.state.isLoaded}
                                                  dataPopup={this.cardPopupChange}

                                    />
                                }
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
        activeStoreData: state.storeReducer.StoreAction.activeStoreData,
        deletedStoreData: state.storeReducer.StoreAction.deletedStoreData

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        StoreActiveData: (data) => {
            dispatch({
                type: 'GETACTIVESTORES',
                JsonData: data
            })
        },
        StoreDeletedData: (data) => {
            dispatch({
                type: 'GETDELETEDSTORES',
                JsonData: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreManagement);