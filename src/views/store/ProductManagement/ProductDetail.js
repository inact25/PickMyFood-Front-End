import React, {Component} from 'react';
import {getSpecificProduct} from "../../../apis/Store/StoreApi";
import imageLoader from "../../../assets/img/loader/loader2.gif";
import Swal from "sweetalert2";
import {getAllProductCategory} from "../../../apis/Categories/CategoriesApi";
import {UploadApis} from "../../../apis/Base/UploadApis";
import {deleteStoreProduct, updateProduct} from "../../../apis/Product/ProductApis";
import {RiDeleteBin6Line} from "react-icons/ri";
import {FiSave} from "react-icons/fi"

class ProductDetail extends Component {

    state = {
        id: localStorage.getItem("slt"),
        productDetail: [],
        isLoaded: false,
        productCategory:[],
        isProductLoaded: false
    }

    updateProduct = () => {
        updateProduct(this.state.id,this.state.productDetail)
            .then(()=>{
                Swal.fire("Good job!", "Store Updated", "success")
            }).catch(()=>{
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        })
    }

    getAllProductCategory = () => {
        getAllProductCategory()
            .then((res)=>{

                this.setState({
                    isProductLoaded: true,
                    productCategory:res
                });
            })
            .catch(() => {
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            });
    }

    deleteStoreProduct = () =>{
        deleteStoreProduct(this.state.id)
            .then(()=>{
                Swal.fire("Good job!", "Product Deleted", "success")
            })
            .catch(()=>{
                Swal.fire("Oops", "Connection Timeout !!!", "error")
            })
    }

    getSpecificProduct = () => {
        getSpecificProduct(this.state.id)
            .then((res) => {
                this.setState({
                    productDetail: res,
                    isLoaded: true
                })
            })
    }

    handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        console.log(this.state.productDetail)
        this.setState(prevState => ({
            productDetail: {
                ...prevState.productDetail,
                [name]: [value]
            }
        }))

    }

    handleCategoryChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        console.log(this.state.productDetail)
        this.setState(prevState => ({
            productDetail: {
                ...prevState.productDetail,
                productCategory: {
                    ...prevState.productCategory.productCategory,
                    [name]: [value]
                }

            }
        }))

    }

    handlePriceChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        console.log(this.state.productDetail)
        this.setState(prevState => ({
            productDetail: {
                ...prevState.productDetail,
                productPrice: {
                    ...prevState.productDetail.productPrice,
                    [name]: [value]
                }

            }
        }))

    }

    uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'pickMyFood')
        this.setState({
            imgUploading: true
        })
        UploadApis(data).then((res) => {
            this.setState(prevState => ({
                productDetail: {
                    ...prevState.productDetail,
                    productImage: res.secure_url
                }
            }))

        })
    }

    componentDidMount() {
        this.getSpecificProduct()
        this.getAllProductCategory()
    }
    render() {
        const data = this.state.productDetail
        const category = this.state.productCategory
        return (
            <>
            {
                this.state.isLoaded ?
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 align-content-center">
                            <div className="card card-small mb-4 pt-3">
                                <div className="card-body text-center">
                                    <div className="mb-3 mx-auto">
                                        <img style={{
                                            objectFit: "cover",
                                            height: "8rem",
                                            width: "8rem"
                                        }} className="rounded-circle img-fluid"
                                             src={data.productImage}
                                             alt="User Avatar" width="110"/>
                                    </div>
                                    <div>
                                        <label htmlFor="file" className="btn btn-primary justify-content-center"
                                               style={{borderRadius: "10rem"}}>Change Picture</label>
                                        <input id="file" style={{visibility: "hidden"}}
                                               type="file"
                                               name="file"
                                               onChange={(e) => this.uploadImage(e)}
                                               placeholder="Upload Profile Image"
                                        />
                                    </div>

                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-label-group">
                                                <input type="number" id="productStock" name="productStock"
                                                       className="form-control"
                                                       value={data.productStock}
                                                       onChange={(e)=>this.handleChangeInput(e)}
                                                       required/>
                                                <label htmlFor="productStock">Stock</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 align-content-center">
                            <div className="card card-small mb-4 pt-3">
                                <div className="card-body">
                                    <h5 className="text-center">Product Description</h5>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-label-group">
                                                <input type="text" id="productName" name="productName"
                                                       className="form-control"
                                                       value={data.productName}
                                                       onChange={(e)=>this.handleChangeInput(e)}
                                                       required/>
                                                <label htmlFor="productName">Product Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-label-group">
                                                <div className="form-label-group">
                                                    <select name="productCategoryID"
                                                            onChange={(e) => this.handleCategoryChangeInput(e)}
                                                            className="custom-select"
                                                            style={{borderRadius: "10rem", height: "3rem"}}>
                                                        <option value={data.productCategory.productCategoryID} selected>{data.productCategory.productCategoryName}</option>
                                                        {category.map((categoryList,) =>

                                                        <option
                                                            value={categoryList.productCategoryID}>{categoryList.productCategoryName}
                                                        </option>
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-label-group">
                                                <input type="number" id="price" name="price"
                                                       className="form-control"
                                                       value={data.productPrice.price}
                                                       onChange={(e)=>this.handlePriceChangeInput(e)}
                                                       required/>
                                                <label htmlFor="price">productPrice</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <button onClick={()=>{this.deleteStoreProduct()}} className="btn btn-lg btn-block btn-danger btn-pill"><RiDeleteBin6Line/></button>
                                        </div>
                                        <div className="col-6">
                                            <button onClick={()=>{this.updateProduct()}} className="btn btn-lg btn-block btn-primary btn-pill"><FiSave/></button>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div> : <div className="text-center">
                        <img width="150px" src={imageLoader} alt="loading"/>
                        <p>loading...</p>
                    </div>
            }
            </>


        );
    }
}

export default ProductDetail;