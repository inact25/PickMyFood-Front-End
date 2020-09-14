import React, {Component} from 'react';
import ProductCategoryTable from "../../../variables/admin/ProductCategoryTable";
import StoreCategoryTable from "../../../variables/admin/StoreCategoryTable";
import InputForm from "../../../components/forms/Input/InputForm";
import {getAllProductCategory, getAllStoreCategory,addProductCategory,addStoreCategory} from "../../../apis/Categories/CategoriesApi";
import Swal from "sweetalert2";
import {connect} from "react-redux";
import imageLoader from "../../../assets/img/loader2.gif";

class CategoryManagement extends Component {

    state = {
        isProductLoaded: false,
        isStoreLoaded: false,
        addStCategoryForm:"",
        addPrCategoryForm:"",
        productsubmitProgress :false,
        storesubmitProgress:false
    }

    handleChange =(e)=>{
        const name = e.target.name
        const value = e.target.value
        console.log(name + value)
        this.setState({
            [name]:[value]
        })
    }
    addStoreCategory =()=>{
        this.setState({
            storesubmitProgress:true
        })

        addStoreCategory(this.state.addStCategoryForm)
            .then((res)=>{
               this.setState({
                   addStCategoryForm:""
               })
                Swal.fire("Good job!", "Store Updated", "success").then(()=>{
                    this.getAllSoreCategory()
                    this.setState({
                        storesubmitProgress:false
                    })
                })
            })
            .catch(()=>{
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            })
    }

    addProductCategory =()=>{
        this.setState({
            productsubmitProgress:true
        })

        addProductCategory(this.state.addPrCategoryForm)
            .then((res)=>{
               this.setState({
                   addPrCategoryForm:""
               })
                Swal.fire("Good job!", "Store Updated", "success").then(()=>{
                    this.getAllProductCategory()
                    this.setState({
                        productsubmitProgress:false
                    })
                })
            })
            .catch(()=>{
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            })
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
                console.log("dari api")
                console.log(res)
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
        console.log("props")
        console.log(this.props.productCategory)

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
                                            <InputForm title={"Add Store Category"}
                                                       id={"addStoreCategory"}
                                                       name={"addStCategoryForm"}
                                                       handleChange={this.handleChange}
                                                       value={this.state.addStCategoryForm}
                                                       submit={this.addStoreCategory}
                                                       isAdding={this.state.storesubmitProgress}
                                            />
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
                                            <InputForm title={"Add Product Category"}
                                                       id={"addProductCategory"}
                                                       name="addPrCategoryForm"
                                                       handleChange={this.handleChange}
                                                       value={this.state.addPrCategoryForm}
                                                       submit={this.addProductCategory}
                                                       isAdding={this.state.productsubmitProgress}/>
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