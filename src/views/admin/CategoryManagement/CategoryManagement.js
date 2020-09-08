import React, {Component} from 'react';
import ProductCategoryTable from "../../../variables/admin/ProductCategoryTable";
import StoreCategoryTable from "../../../variables/admin/StoreCategoryTable";
import InputForm from "../../../components/forms/Input/InputForm";
import {getAllProductCategory, getAllStoreCategory} from "../../../apis/Admin/AdminStore";
import Swal from "sweetalert2";
import {connect} from "react-redux";
import imageLoader from "../../../assets/img/loader2.gif";

class CategoryManagement extends Component {

    state = {
        isProductLoaded: false,
        isStoreLoaded: false
    }

    getAllSoreCategory = () => {
        getAllStoreCategory()
            .then((res) => {
                this.props.GetStoreCategory(res)
                this.setState({
                    isStoreLoaded: true,
                });
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };
    getAllProductCategory = () => {
        getAllProductCategory()
            .then((res) => {
                this.props.GetProductCategory(res)
                this.setState({
                    isProductLoaded: true,
                });
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    };


    componentDidMount() {
        this.getAllProductCategory()
        this.getAllSoreCategory()
    }

    render() {
        const storeCategory = this.props.storeCategory
        const productCategory = this.props.productCategory

        return (
            <>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        <div className="card card-small mb-4 pt-3">
                            {this.state.isStoreLoaded ?
                                <>
                                    <div className="card-header border-bottom">
                                        <h5 className="mb-0">Store Category</h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <InputForm title={"Add Store Category"} id={"addStoreCategory"}/>
                                        </li>
                                        <li className="list-group-item">
                                            <StoreCategoryTable data={storeCategory} load={this.state.isStoreLoaded}/>
                                        </li>
                                    </ul>
                                </>
                                : <div className="text-center">
                                    <img width="150px" src={imageLoader} alt="loading"/>
                                    <p>loading...</p>
                                </div>
                            }
                        </div>


                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        <div className="card card-small mb-4 pt-3">
                            {this.state.isProductLoaded ?
                                <>
                                    <div className="card-header border-bottom">
                                        <h5 className="mb-0">Product Category</h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <InputForm title={"Add Product Category"} id={"addProductCategory"}/>
                                        </li>
                                        <li className="list-group-item">
                                            <ProductCategoryTable data={productCategory}
                                                                  load={this.state.isProductLoaded}/>
                                        </li>
                                    </ul>
                                </>
                                : <div className="text-center">
                                    <img width="150px" src={imageLoader} alt="loading"/>
                                    <p>loading...</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storeCategory: state.fetchReducer.FetchAction.storeCategoryData,
        productCategory: state.fetchReducer.FetchAction.productCategoryData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetStoreCategory: (data) =>
            dispatch({
                type: 'GETSTORECATEGORY',
                JsonData: data
            }),
        GetProductCategory: (data) =>
            dispatch({
                type: 'GETPRODUCTCATEGORY',
                JsonData: data
            })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManagement);