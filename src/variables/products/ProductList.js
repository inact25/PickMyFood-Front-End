import React, {Component} from 'react';

class ProductList extends Component {
    render() {
        const {data, popup, restore} = this.props
        return (
            <>
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
                                <span
                                    className="text-muted d-block mb-2">{productList.productCategory.productCategoryName}</span>
                                {productList.productStatus !== "NA" ?
                                    <a id={productList.productID} className="stretched-link"
                                       onClick={(e) => popup(e)}/>
                                    :
                                    <a id={productList.productID} className="stretched-link"
                                       onClick={(e) => restore(e)}/>
                                }
                            </div>
                            {productList.productStatus !== "NA" ?
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

                                : <div className="card-footer bg-danger text-white">
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
                            }

                        </div>
                    </div>
                )
                }
            </>
        );
    }
}

export default ProductList;