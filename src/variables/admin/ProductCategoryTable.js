import React, {Component} from 'react';
import {FaRegEdit} from "react-icons/fa";
import {RiDeleteBin2Line} from "react-icons/ri";

class ProductCategoryTable extends Component {
    render() {
        const {data} = this.props
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

                {data.map((productList,index) =>
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{productList.productCategoryName}</td>
                    <td><a className="text-warning"><FaRegEdit/></a></td>
                    <td><a className="text-danger"><RiDeleteBin2Line/></a></td>
                </tr>
                )}
                </tbody>
            </table>
        );
    }
}

export default ProductCategoryTable;