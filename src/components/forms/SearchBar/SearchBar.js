import React, {Component} from 'react';
import {BiSearchAlt} from 'react-icons/bi'

class SearchBar extends Component {
    render() {
        const {title} = this.props
        return (
            <div>
                <div className="row">
                    <div className="col-9">
                        <div className="form-label-group">
                            <input type="text" id="inputData" className="form-control"
                                   placeholder={title}
                                   required/>
                            <label htmlFor="inputData">{title}</label>
                        </div>
                    </div>
                    <div className="col">
                        <button style={{maxHeight: "3rem"}}
                                className="btn btn-lg btn-dark  btn-pill"
                                type="submit"><p style={{fontSize:"1rem"}}><BiSearchAlt/></p>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;