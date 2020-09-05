import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        const {title} = this.props
        return (
            <div>
                <div className="row">
                    <div className="col-10">
                        <div className="form-label-group">
                            <input type="text" id="inputData" className="form-control"
                                   placeholder={title}
                                   required/>
                            <label htmlFor="inputData">{title}</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <button style={{borderRadius: "10rem", maxHeight: "3rem"}}
                                className="btn btn-lg btn-primary btn-block"
                                type="submit">Search
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;