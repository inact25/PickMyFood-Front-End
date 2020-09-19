import React, {Component} from 'react';
import {BiSearchAlt} from 'react-icons/bi'

class SearchBar extends Component {
    render() {
        const {title} = this.props
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <div className="form-label-group">
                            <input type="text" id="inputData" className="form-control"
                                   placeholder={title}
                                   required/>
                            <label htmlFor="inputData">{title}</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <button style={{maxHeight: "3rem"}}
                                className="btn btn-lg btn-dark  btn-pill"
                                type="submit"><h5 className="text-white"><BiSearchAlt/></h5>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;