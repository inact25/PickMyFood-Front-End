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
                {data.map((storeCategory,index) =>
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{storeCategory.storeCategoryName}</td>
                            <td><a className="text-warning"><FaRegEdit/></a></td>
                            <td><a className="text-danger"><RiDeleteBin2Line/></a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

export default StoreCategoryTable;