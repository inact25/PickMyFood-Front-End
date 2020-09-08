import React, {Component} from 'react';
import {FaRegEdit} from "react-icons/fa";
import {RiDeleteBin2Line} from "react-icons/ri";
import imageLoader from "../../assets/img/loader2.gif";

class ProductCategoryTable extends Component {
    render() {
        const {data, load} = this.props
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Category</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {load ?
                    data.map(productList =>
                <tr>
                    <th scope="row">1</th>
                    <td>{productList.product_category_name}</td>
                    <td><a><FaRegEdit/></a></td>
                    <td><a><RiDeleteBin2Line/></a></td>
                </tr>
                    ) :  <tr>
                        <td colSpan="4" className="text-center">
                            <img width="150px" src={imageLoader} alt="loading"/>
                            <br/>
                            <p>Loading...</p>
                        </td>
                    </tr>}
                </tbody>
            </table>
        );
    }
}

export default ProductCategoryTable;