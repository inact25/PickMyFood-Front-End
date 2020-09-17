import React, {Component} from 'react';
import Pagination from "../../../components/Pagination/Pagination";
import StoreSearch from "../../../variables/admin/StoreSearch";
import Swal from "sweetalert2";
import imageLoader from "../../../assets/img/loader/loader2.gif";
import {getProductStore} from "../../../apis/Store/Store";
import withReactContent from "sweetalert2-react-content";
import Invoice from "../OrderManagement/Invoice";
import ProductDetail from "./ProductDetail";
import AddProduct from "./AddProduct";
import {GrAddCircle} from "react-icons/gr"
import {connect} from "react-redux";

class ProductManagement extends Component {
    state = {
        id: localStorage.getItem('uid'),
        isLoaded: false,
    }

    cardPopupRead = (e) => {
        const MySwal = withReactContent(Swal)
        localStorage.setItem("slt",e.target.id)
        MySwal.fire({
            html: (
                <>
                    <ProductDetail/>
                </>),
            customClass: 'swal-product-detail',
            showCancelButton: true,
            showConfirmButton: false,
           })
    }

    cardPopupWrite = () => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            html: (
                <>
                    <AddProduct/>
                </>),
            customClass: 'swal-product-detail',
            showCancelButton: true,
            showConfirmButton: false,
            onClose :
                this.getStoreProduct()
        })
    }

    getStoreProduct = () => {
        getProductStore(this.state.id)
            .then((res) => {
                this.props.StoreProductData(res)
                this.setState({
                    isLoaded: true
                })
            }).catch(() => {
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.storeProductData !== this.props.storeProductData) {
            this.getStoreProduct()
        }
    }


    componentDidMount() {
        this.getStoreProduct()
    }

    render() {
        const data = this.props.storeProductData
        return (
            <div className="card card-small mb-4 pt-3">
                {this.state.isLoaded ?
                    <>
                        <div className="card-body border-bottom">
                            <div className="row">
                                <div className="col-lg-2 col-sm-12 col-md-2">
                                    <button style={{maxHeight:"3rem"}} className="mb-2 btn btn-lg btn-pill btn-block btn-warning" onClick={()=>this.cardPopupWrite()}>
                                        <p style={{fontSize:"1rem", color:"white"}}><GrAddCircle/></p>
                                    </button>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <StoreSearch/>
                                </div>
                            </div>

                            <hr/>
                            <div className="row">
                                {data.map(productList =>
                                <div className="col-lg-3 col-md-4 col-sm-6 align-content-center cardHoov">
                                    <div className="card card-product-list card-small mb-4 pt-3"
                                         style={{backgroundColor: "linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(255,248,188,1) 50%, rgba(255,248,188,1) 100%) !important;"}}>
                                        <div className="card-body text-center">
                                            <div className="mb-3 mx-auto">
                                                <img style={{
                                                    width: "125px",
                                                    height: "125px",
                                                    objectFit: "cover"
                                                }} className="rounded-circle"
                                                     src={productList.productImage}
                                                     alt="User Avatar"/>
                                            </div>
                                            <h5 className="mb-0">{productList.productName}</h5>
                                            <span className="text-muted d-block mb-2">{productList.productCategory.productCategoryName}</span>
                                            <a id={productList.productID} className="stretched-link" onClick={(e)=>this.cardPopupRead(e)}/>
                                        </div>
                                        <div className="card-footer bg-dark text-white">
                                            <div className="row">
                                                <div className="col-5">
                                                    Price
                                                </div>
                                                <div className="col-7">
                                                    : Rp. {productList.productPrice.price}
                                                </div>
                                                <div className="col-5">
                                                    Stock
                                                </div>
                                                <div className="col-7">
                                                    : {productList.productStock} Left
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                )}

                            </div>
                        </div>
                        <div className="card-footer bg-dark">
                            <Pagination/>
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

const mapStateToProps = (state) => {
    return {
        storeProductData: state.fetchReducer.FetchAction.storeProductData

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        StoreProductData: (data) => {
            dispatch({
                type: 'GETSTOREPRODUCT',
                JsonData: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductManagement);