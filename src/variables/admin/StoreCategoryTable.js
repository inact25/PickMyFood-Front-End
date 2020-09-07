import React, {Component} from 'react';
import {FaRegEdit} from "react-icons/fa";
import {RiDeleteBin2Line} from "react-icons/ri";

class StoreCategoryTable extends Component {
    render() {
        const {data, load} = this.props
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Store Category</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {load ?
                    data.map(storeCategory =>
                        <tr>
                            <th scope="row">1</th>
                            <td>{storeCategory.store_category_name}</td>
                            <td><a href=""><FaRegEdit/></a></td>
                            <td><a href=""><RiDeleteBin2Line/></a></td>
                        </tr>
                    ) : <p>loading</p>}
                </tbody>
            </table>
        );
    }
}

export default StoreCategoryTable;