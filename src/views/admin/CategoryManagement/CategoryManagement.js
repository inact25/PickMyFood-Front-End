import React, {Component} from 'react';
import ProductCategoryTable from "../../../variables/admin/ProductCategoryTable";
import StoreCategoryTable from "../../../variables/admin/StoreCategoryTable";
import InputForm from "../../../components/forms/Input/InputForm";

class CategoryManagement extends Component {
    render() {

        return (
            <>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="card card-small mb-4 pt-3">
                            <div className="card-header border-bottom">
                                <h5 className="mb-0">Store Category</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <InputForm title={"Add Store Category"} id={"addStoreCategory"}/>
                                </li>
                                <li className="list-group-item">
                                    <StoreCategoryTable/>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="card card-small mb-4 pt-3">
                            <div className="card-header border-bottom">
                                <h5 className="mb-0">Product Category</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <InputForm title={"Add Product Category"} id={"addProductCategory"}/>
                                </li>
                                <li className="list-group-item">
                                    <ProductCategoryTable/>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CategoryManagement;