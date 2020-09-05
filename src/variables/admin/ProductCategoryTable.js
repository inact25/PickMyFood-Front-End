import React, {Component} from 'react';
import {FaRegEdit} from "react-icons/fa";
import {RiDeleteBin2Line} from "react-icons/ri";

class ProductCategoryTable extends Component {
    render() {
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
                <tr>
                    <th scope="row">1</th>
                    <td>Buah dan Sayur</td>
                    <td><a href=""><FaRegEdit/></a></td>
                    <td><a href=""><RiDeleteBin2Line/></a></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Food and Drink</td>
                    <td><a href=""><FaRegEdit/></a></td>
                    <td><a href=""><RiDeleteBin2Line/></a></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Cake and Bakery</td>
                    <td><a href=""><FaRegEdit/></a></td>
                    <td><a href=""><RiDeleteBin2Line/></a></td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default ProductCategoryTable;