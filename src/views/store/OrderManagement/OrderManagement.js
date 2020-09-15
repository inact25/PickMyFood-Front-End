import React, {Component} from 'react';
import {getStoreOrders} from "../../../apis/Order/OrdersApi";
import Swal from "sweetalert2";
import imageLoader from "../../../assets/img/loader/loader2.gif";
import withReactContent from "sweetalert2-react-content";
import StoreViewProfile from "../../admin/StoreManagement/StoreViewProfile";
import Invoice from "./Invoice";

class OrderManagement extends Component {
    state = {
        id: localStorage.getItem('uid'),
        isLoaded: false,
        storeOrder: [],
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
        }).then(()=>{
            this.getStoreOrders()
        })
    }


    getStoreOrders = () => {
        console.log("masuk un")
        getStoreOrders(this.state.id)
            .then((res) => {
                console.log("res")

                console.log(res)
                console.log("res.data")
                console.log(res.data)
                this.setState({
                    storeOrder: res.data,
                    isLoaded: true
                })
            }).catch(() => {
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        })
    }

    componentDidMount() {
        this.getStoreOrders()
    }

    render() {
        const data = this.state.storeOrder
        return (
            <div className="card card-small mb-4 pt-3">
                {this.state.isLoaded ?
                    <>
                        <div className="card-body border-bottom">
                            <div className="row">
                                {data.map(orderList =>
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
                                                <h5 className="mb-0">{orderList.soldItems[0].userFirstName}</h5>
                                                <span
                                                    className="text-muted d-block mb-2 font-weight-bold">{orderList.soldItems[0].orderDetailStatus}</span>
                                                <a onClick={(e)=>this.cardPopupRead(e)} id={orderList.orderID} className="stretched-link"/>
                                            </div>
                                            {orderList.soldItems[0].orderDetailStatus.toLowerCase() !== "unpaid" ?
                                                <div className="card-footer bg-success text-white text-center">
                                                    <span>{orderList.orderCreated}</span>
                                                </div>
                                                :
                                                <div className="card-footer bg-dark text-white text-center">
                                                    <span>{orderList.orderCreated}</span>
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

export default OrderManagement;