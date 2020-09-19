import React, {Component} from 'react';
import {Bar, Doughnut,Bubble,Line,Polar} from 'react-chartjs-2';
import {getActiveStores} from "../../../apis/Store/Store";
import Swal from "sweetalert2";
import {connect} from "react-redux";
import {getAllUsers} from "../../../apis/User/UserApis";
import {getTopupList} from "../../../apis/Wallet/WalletApi";

class Stats extends Component {

    state = {
        isLoaded:false,
        data: {
            labels:  ['Store', 'User', 'Feedback','Wallet'],
            datasets:[
                {
                    label: ['Store', 'User', 'Feedback','Wallet'],
                    fill: true,
                    lineTension: 5,
                    backgroundColor: '#ffb508',
                    borderColor: '#16181B',
                    borderWidth: 10,
                    data: [
                        50,32,21,45
                    ]
                }]
        }

    }

    getAllStoresData = () => {
        getActiveStores()
            .then((res) => {
                console.log(res)
                this.props.StoreListData(res)
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };

    getAllUsersData = () => {
        getAllUsers()
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

    getTopup = () => {
        getTopupList()
            .then((res) => {
                this.props.TopUpData(res)
                this.setState({
                    isLoaded: true
                })
            }).catch(() => {
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        })
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allStoreData !== this.props.allStoreData) {
            this.getAllStoresData()
        }
        if (prevProps.allUsersData !== this.props.allUsersData) {
            this.getAllUsersData()
        }
        if (prevProps.topupData !== this.props.topupData) {
            this.getTopup()
        }
    }

    componentDidMount() {
        this.getAllStoresData()
        this.getAllUsersData()
        this.getTopup()
    }

    render() {
        const storeCount = this.props.allStoreData.length
        const userCount = this.props.allUsersData.length
        const topupCount = this.props.topupData.length



        return (
            <div className="row">
                <div className="col-lg col-md-6 col-sm-6 mb-4">
                    <div className="stats-small stats-small--1 card card-small">
                        <div className="card-body p-0 d-flex">
                            <div className="d-flex flex-column m-auto">
                                <div className="stats-small__data text-center">
                                    <span className="stats-small__label text-uppercase">Store</span>
                                    <h6 className="stats-small__value count my-3">{storeCount}</h6>
                                </div>
                            </div>
                            <canvas height="120" className="blog-overview-stats-small-1"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg col-md-6 col-sm-6 mb-4">
                    <div className="stats-small stats-small--1 card card-small">
                        <div className="card-body p-0 d-flex">
                            <div className="d-flex flex-column m-auto">
                                <div className="stats-small__data text-center">
                                    <span className="stats-small__label text-uppercase">User</span>
                                    <h6 className="stats-small__value count my-3">{userCount}</h6>
                                </div>
                            </div>
                            <canvas height="120" className="blog-overview-stats-small-2"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg col-md-4 col-sm-6 mb-4">
                    <div className="stats-small stats-small--1 card card-small">
                        <div className="card-body p-0 d-flex">
                            <div className="d-flex flex-column m-auto">
                                <div className="stats-small__data text-center">
                                    <span className="stats-small__label text-uppercase">Feedback</span>
                                    <h6 className="stats-small__value count my-3">8,147</h6>
                                </div>
                                <div className="stats-small__data">
                                    <span
                                        className="stats-small__percentage stats-small__percentage--decrease">3.8%</span>
                                </div>
                            </div>
                            <canvas height="120" className="blog-overview-stats-small-3"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg col-md-4 col-sm-6 mb-4">
                    <div className="stats-small stats-small--1 card card-small">
                        <div className="card-body p-0 d-flex">
                            <div className="d-flex flex-column m-auto">
                                <div className="stats-small__data text-center">
                                    <span className="stats-small__label text-uppercase">Wallet</span>
                                    <h6 className="stats-small__value count my-3">{topupCount}</h6>
                                </div>
                            </div>
                            <canvas height="120" className="blog-overview-stats-small-4"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                    <div className="stats-small stats-small--1 card card-small">
                        <div className="card-body p-0 d-flex">
                            <div className="d-flex flex-column m-auto">

                                <Bar
                                                    data={this.state.data}
                                                    options={{
                                                        title: {
                                                            display: true,
                                                            fontSize: 20
                                                        },
                                                        legend: {
                                                            display: false,
                                                            position: 'left'
                                                        }
                                                    }}
                                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            // <div>
            //     <div style={{display: 'flex', justifyContent: 'center'}}>
            //         <div
            //             className="card"
            //         >
            //             <div className="card-header" style={{color: 'white', fontSize: '25px'}}>
            //                 Latest Currency
            //             </div>
            //             <div style={{display: 'flex', marginLeft: '30%', marginTop: '20px', marginBottom: '20px'}}>
            //             </div>
            //             <div style={{background: 'white', marginTop: '0px', borderRadius: '20px'}} className="img-fluid">
            //                 <Bar
            //                     data={this.state.data}
            //                     options={{
            //                         title: {
            //                             display: true,
            //                             fontSize: 20
            //                         },
            //                         legend: {
            //                             display: false,
            //                             position: 'left'
            //                         }
            //                     }}
            //                 />
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        allStoreData: state.fetchReducer.FetchAction.allStoreData,
        allUsersData: state.fetchReducer.FetchAction.allUserData,
        topupData: state.fetchReducer.FetchAction.topupData

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        StoreListData: (data) => {
            dispatch({
                type: 'GETALLSTORES',
                JsonData: data
            })
        },
        UserListData: (data) => {
            dispatch({
                type: 'GETALLUSERS',
                JsonData: data
            })
        },
        TopUpData: (data) => {
            dispatch({
                type: 'GETALLTOPUP',
                JsonData: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Stats);