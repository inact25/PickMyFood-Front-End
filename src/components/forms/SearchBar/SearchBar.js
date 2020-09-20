import React, {Component} from 'react';
import {BiSearchAlt} from 'react-icons/bi'

class SearchBar extends Component {
    render() {
        const {title,handle,value} = this.props
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-label-group">
                            <input type="text" id="inputData" className="form-control"
                                   placeholder={title}
                                   value={value}
                                   onChange={handle}
                                   required/>
                            <label htmlFor="inputData">{title}</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;