import React, {Component} from 'react';
import {FaRegEdit} from "react-icons/fa";
import {RiDeleteBin2Line} from "react-icons/ri";


class StoreCategoryTable extends Component {
    render() {
        const {data} = this.props
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
                {data.map(storeCategory =>
                        <tr>
                            <th scope="row">1</th>
                            <td>{storeCategory.store_category_name}</td>
                            <td><a><FaRegEdit/></a></td>
                            <td><a><RiDeleteBin2Line/></a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

export default StoreCategoryTable;