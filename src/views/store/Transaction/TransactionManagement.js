import React, {Component} from 'react';
import {getStoreTransaction} from "../../../apis/Transaction/TransactionApi";
import Swal from "sweetalert2";
import imageLoader from "../../../assets/img/loader/loader2.gif";
import withReactContent from "sweetalert2-react-content";

import Invoice from "../OrderManagement/Invoice";
class TransactionManagement extends Component {
    state = {
        id: localStorage.getItem('uid'),
        isLoaded: false,
        storeTransaction: [],
    }

    cardPopupRead = (e) => {
        const MySwal = withReactContent(Swal)
        localStorage.setItem("sltOrders",e.target.id)
        MySwal.fire({
            html: (
                <>
                    <Invoice/>
                </>),
            customClass: 'swal-invoices',
            showCancelButton: true,
            showConfirmButton: false,
        })
    }


    getStoreTransaction = () => {
        console.log("masuk un")
        getStoreTransaction(this.state.id)
            .then((res) => {
                console.log("res")

                console.log(res)
                console.log("res.data")
                console.log(res.data)
                this.setState({
                    storeTransaction: res.data,
                    isLoaded: true
                })
            }).catch(() => {
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        })
    }

    componentDidMount() {
        this.getStoreTransaction()
    }

    render() {
        const data = this.state.storeTransaction
        return (
            <div className="card card-small mb-4 pt-3">
                {this.state.isLoaded ?
                    <>
                        <div className="card-body border-bottom">
                            <div className="row">
                                {data.map(transactionList =>
                                    <div className="col-lg-2 col-md-4 col-sm-6 align-content-center cardHoov">
                                        <div className="card card-small mb-4 pt-3"
                                             style={{backgroundColor: "linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(255,248,188,1) 50%, rgba(255,248,188,1) 100%) !important;"}}>
                                            <div className="card-body text-center">
                                                <div className="mb-3 mx-auto">
                                                    <img style={{
                                                        width: "125px",
                                                        height: "125px",
                                                        objectFit: "cover"
                                                    }} className="rounded-circle"
                                                         src="https://image.freepik.com/free-vector/online-food-order_18591-36097.jpg"
                                                         alt="User Avatar"/>
                                                </div>
                                                <h5 className="mb-0">{transactionList.userFirstName}</h5>
                                                <span
                                                    className="text-muted d-block mb-2 font-weight-bold">{transactionList.transactionStatus}</span>
                                                <a onClick={(e)=>this.cardPopupRead(e)} id={transactionList.orderID} className="stretched-link"/>
                                            </div>
                                            {transactionList.transactionStatus.toLowerCase() !== "unpick" ?
                                                <div className="card-footer bg-success text-white text-center">
                                                    <span>{transactionList.transactionCreated}</span>
                                                </div>
                                                :
                                                <div className="card-footer bg-dark text-white text-center">
                                                    <span>{transactionList.transactionCreated}</span>
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

export default TransactionManagement;