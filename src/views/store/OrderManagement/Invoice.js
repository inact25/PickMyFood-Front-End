import React, {Component} from 'react';
import {getSpecificOrders} from "../../../apis/Order/OrdersApi";
import imageLoader from "../../../assets/img/loader/loader2.gif";


class Invoice extends Component {
    state = {
        id: localStorage.getItem("sltOrders"),
        ordersDetail: [],
        isLoaded: false
    }

    getSpecificOrders = () => {
        getSpecificOrders(this.state.id)
            .then((res) => {
                console.log("res orders")
                console.log(res)
                this.setState({
                    ordersDetail: res.data,
                    isLoaded: true
                })
            })
    }

    componentDidMount() {
        this.getSpecificOrders()
    }

    render() {
        const data = this.state.ordersDetail
        console.log("data orders")
        console.log(data)
        const soldItems = data.soldItems
        let total = 0
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 align-content-center">

                    <div className="card card-small mb-4">
                        {this.state.isLoaded ?
                            <>
                                {data.soldItems[0].orderDetailStatus.toLowerCase() !== "unpaid" ?
                                    <div className="card-header border-bottom bg-success text-white">
                                        <div className="text-center">
                                            <h8 className="m-0 font-weight-bold">pickMyFood</h8>
                                        </div>
                                        <div className="text-center">
                                            <p className="m-0" style={{fontSize: "11px"}}>OrderID
                                                : {data.orderID}</p>
                                        </div>

                                        <hr style={{borderColor: "white"}}/>
                                        <div className="data" style={{fontSize: "12px"}}>
                                            <div className="row">
                                                <div className="col-6 font-weight-bold text-left">
                                                    Nama
                                                </div>
                                                <div className="col-6 font-weight-bold text-left">
                                                    : {data.soldItems[0].userFirstName}
                                                </div>
                                                <div className="col-6 font-weight-bold text-left">
                                                    Order date
                                                </div>
                                                <div className="col-6 font-weight-bold text-left">
                                                    : {data.orderCreated}
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    :
                                    <div className="card-header border-bottom bg-dark text-white">
                                        <div className="text-center">
                                            <h8 className="m-0 font-weight-bold">pickMyFood</h8>
                                        </div>
                                        <div className="text-center">
                                            <p className="m-0" style={{fontSize: "11px"}}>OrderID
                                                : {data.orderID}</p>
                                        </div>

                                        <hr style={{borderColor: "white"}}/>
                                        <div className="data" style={{fontSize: "12px"}}>
                                            <div className="row">
                                                <div className="col-6 font-weight-bold text-left">
                                                    Nama
                                                </div>
                                                <div className="col-6 font-weight-bold text-left">
                                                    : {data.soldItems[0].userFirstName}
                                                </div>
                                                <div className="col-6 font-weight-bold text-left">
                                                    Order date
                                                </div>
                                                <div className="col-6 font-weight-bold text-left">
                                                    : {data.orderCreated}
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                }
                                <div className="card-body p-0 pb-3">
                                    <table className="table mb-0 table-responsive text-left">
                                        <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">Product</th>
                                            <th scope="col" className="border-0">Qty</th>
                                            <th scope="col" className="border-0">Price</th>
                                            <th scope="col" className="border-0">SubTotal</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {soldItems.map(items =>

                                            <tr>
                                                <td>{items.productName}</td>
                                                <td>{items.Qty}</td>
                                                <td>Rp. {items.price}</td>
                                                <td>Rp. {items.subtotal}</td>
                                                <span
                                                    style={{display: "none"}}>{total += Number(items.subtotal)}</span>


                                            </tr>
                                        )}
                                        {data.soldItems[0].orderDetailStatus.toLowerCase() !== "unpaid" ?
                                            <tr className="text-success">
                                                <th colSpan="3">Total</th>
                                                <th>Rp. {total}</th>
                                            </tr>
                                            : <tr className="text-dark">
                                                <th colSpan="3">Total</th>
                                                <th>Rp. {total}</th>
                                            </tr>
                                        }
                                        </tbody>
                                    </table>
                                </div>
                                {data.soldItems[0].orderDetailStatus.toLowerCase() !== "unpaid" ?
                                    <div className="card-footer bg-success">
                                        <div className="text-center text-white font-weight-bold">
                                            <h8>Paid</h8>
                                        </div>
                                    </div>
                                    :
                                    <div className="card-footer bg-dark">
                                        <div className="text-center text-white font-weight-bold">
                                            <h8>Unpaid</h8>
                                        </div>
                                    </div>
                                }
                            </>
                            : <div className="text-center">
                                <img width="150px" src={imageLoader} alt="loading"/>
                                <p>loading...</p>
                            </div>
                        }
                    </div>
                 

                </div>
            </div>
        );
    }
}

export default Invoice;