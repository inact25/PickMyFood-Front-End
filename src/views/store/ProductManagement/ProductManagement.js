import React, {Component} from 'react';
import StoreSearch from "../../../variables/store/StoreSearch";
import Swal from "sweetalert2";
import imageLoader from "../../../assets/img/loader/loader2.gif";
import notFound from "../../../assets/img/default/notfound.svg";
import {getActiveProductStore, getDeletedProductStore,reactiveProductStore} from "../../../apis/Product/ProductApis";
import withReactContent from "sweetalert2-react-content";
import ProductDetail from "./ProductDetail";
import AddProduct from "./AddProduct";
import {connect} from "react-redux";
import {RiDeleteBin6Line, RiPlayListAddLine, RiStore2Line} from 'react-icons/ri'
import ProductList from "../../../variables/products/ProductList";

class ProductManagement extends Component {
    state = {
        id: localStorage.getItem('uid'),
        isLoaded: false,
        switch: 0
    }

    switch = (e) => {
        this.setState({
            switch: parseInt(e.target.id)
        })
    }

    cardPopupChange =(e) => {
        const id = e.target.id
        const myswal = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success btn-pill m-1',
                cancelButton: 'btn btn-danger btn-pill m-1'
            },
            buttonsStyling: false
        })
        myswal.fire({
            title: 'Wanna restore this product ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, restore it!'
        }).then((result) => {
            if (result.isConfirmed) {
                reactiveProductStore(id)
                    .then(()=>{
                            myswal.fire(
                                'Restored!',
                                'Product has been restored.',
                                'success'
                            )

                    }
                        ).catch((e)=>{Swal.fire("Oops", "Connection Timeout !!!", "error")
                        console.log(e)} )


            }
        })

    }

    cardPopupRead = (e) => {
        const MySwal = withReactContent(Swal)
        localStorage.setItem("slt", e.target.id)
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
        })
    }

    getActiveStoreProduct = () => {
        getActiveProductStore(this.state.id)
            .then((res) => {
                this.props.StoreActiveProductData(res)
                this.setState({
                    isLoaded: true
                })
            }).catch(() => {
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        })
    }

    getStoreDeletedProduct = () => {
        getDeletedProductStore(this.state.id)
            .then((res) => {
                this.props.StoreDeletedProductData(res)
                this.setState({
                    isLoaded: true
                })
            }).catch(() => {
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.storeActiveProductData !== this.props.storeActiveProductData) {
            this.getActiveStoreProduct()
        }
        if (prevProps.storeDeletedProductData !== this.props.storeDeletedProductData) {
            this.getStoreDeletedProduct()
        }
    }


    componentDidMount() {
        this.getActiveStoreProduct()
        this.getStoreDeletedProduct()
    }

    render() {
        const ActiveData = this.props.storeActiveProductData
        const DeletedData = this.props.storeDeletedProductData

        return (
            <div className="card card-small mb-4 pt-3">
                <div className="card-body border-bottom">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 col-md-3 text-center">
                            <button style={{maxHeight: "3rem"}}
                                    className="mb-2 btn btn-lg btn-pill btn-block btn-warning"
                                    onClick={() => this.cardPopupWrite()}>
                                <h5 className='text-dark'><RiPlayListAddLine/></h5>
                            </button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                            <StoreSearch/>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-3 text-center">
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label style={{maxHeight: "3rem"}} className="btn btn-lg btn-warning active btn-pill">
                                    <input onClick={(e) => {
                                        this.switch(e)
                                    }} type="radio" name="options" id="0" autoComplete="off"/><h5
                                    className='text-dark'><RiStore2Line/></h5>
                                </label>
                                <label style={{maxHeight: "3rem"}} className="btn btn-lg btn-danger btn-pill">
                                    <input onClick={(e) => {
                                        this.switch(e)
                                    }} type="radio" name="options" id="1" autoComplete="off"/><h5
                                    className='text-white'><RiDeleteBin6Line/></h5>
                                </label>
                            </div>
                        </div>
                    </div>
                    {this.state.isLoaded ?
                        <>
                            <hr/>
                            {this.state.switch === 0 ?
                                <div className="row">
                                    {ActiveData.length !== 0 ?
                                        <ProductList data={ActiveData} popup={this.cardPopupRead} restore={this.cardPopupChange}/>
                                        : <div className="text-center mb-5 mt-5">
                                            <img width="150px" src={notFound} alt="loading"/>
                                            <p>no data</p>
                                        </div>
                                    }
                                </div>
                                :
                                <div className="row">
                                    {DeletedData.length !== 0 ?
                                        <ProductList data={DeletedData} popup={this.cardPopupRead} restore={this.cardPopupChange}/>
                                        : <div className="text-center mb-5 mt-5">
                                            <img width="150px" src={notFound} alt="loading"/>
                                            <p>no data</p>
                                        </div>
                                    }
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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storeActiveProductData: state.productReducer.ProductAction.storeActiveProductData,
        storeDeletedProductData: state.productReducer.ProductAction.storeDeletedProductData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        StoreActiveProductData: (data) => {
            dispatch({
                type: 'GETACTIVESTOREPRODUCT',
                JsonData: data
            })
        },
        StoreDeletedProductData: (data) => {
            dispatch({
                type: 'GETDELETEDSTOREPRODUCT',
                JsonData: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductManagement);