import React, {Component} from 'react';
import Swal from "sweetalert2";
import imageLoader from "../../../assets/img/loader2.gif";
import {confirmTopup, getTopupList} from "../../../apis/TopupApi";

class TopupManagement extends Component {
    state = {
        id: localStorage.getItem('uid'),
        isLoaded: false,
        topupList: [],
    }


    cardPopupRead = (e) => {
        const id = e.target.id
        const data = e.target.name
        console.log(id + data)
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success btn-pill m-1',
                cancelButton: 'btn btn-danger btn-pill m-1'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Confirm this transaction ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Transaction Confirmed!',
                    '',
                    'success'
                )
                this.confirmTopup(id, data)
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    '',
                    'error'
                )
            }
        })
    }

    confirmTopup = (id, price) => {
        confirmTopup(id, price).then(() => {
            this.getTopup()
        })
    }


    getTopup = () => {
        getTopupList()
            .then((res) => {
                console.log("hasil res")
                console.log(res)
                this.setState({
                    topupList: res,
                    isLoaded: true
                })
            }).catch(() => {
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        })
    }

    componentDidMount() {
        console.log("data")
        this.getTopup()
    }

    render() {
        const data = this.state.topupList
        return (
            <div className="card card-small mb-4 pt-3">
                {this.state.isLoaded ?
                    <>
                        <div className="card-body border-bottom">
                            <div className="row">
                                {data.map(list =>
                                    <div className="col-lg-2 col-md-4 col-sm-6 align-content-center cardHoov">
                                        <div className="card card-small mb-4 pt-3"
                                             style={{backgroundColor: "linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(255,248,188,1) 50%, rgba(255,248,188,1) 100%) !important;"}}>
                                            <div className="card-header">
                                                <h5 className="text-center text-muted d-block mb-2 font-weight-bold">Rp. {list.topUpAmount}</h5>
                                            </div>
                                            <div className="card-body text-center">
                                                <div className="mb-3 mx-auto">
                                                    <img style={{
                                                        width: "125px",
                                                        height: "125px",
                                                        objectFit: "cover"
                                                    }} className="rounded-circle"
                                                         src="https://image.freepik.com/free-vector/flat-money-saving-concept-background_23-2148150744.jpg"
                                                         alt="User Avatar"/>
                                                </div>
                                                <h5 className="mb-0">{list.userFirstName}</h5>
                                                <span
                                                    className="text-muted d-block mb-2 font-weight-bold">{list.topUpStatus}</span>
                                                {list.topUpStatus.toLowerCase() !== "paid" ?
                                                    <a onClick={(e) => this.cardPopupRead(e)} id={list.userID}
                                                       name={list.topUpAmount} className="stretched-link"/>
                                                    :
                                                    <a className="stretched-link"/>
                                                }
                                            </div>
                                            {list.topUpStatus.toLowerCase() !== "unpaid" ?
                                                <div className="card-footer bg-success text-white text-center">
                                                    <span>{list.topUpDate}</span>
                                                </div>
                                                :
                                                <div className="card-footer bg-dark text-white text-center">
                                                    <span>{list.topUpDate}</span>
                                                </div>}

                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>

                    : <div className="text-center">
                        <img width="150px" src={imageLoader} alt="loading"/>
                        <p>loading...</p>
                    </div>}
            </div>

        );
    }
}

export default TopupManagement;