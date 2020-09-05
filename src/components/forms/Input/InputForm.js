import React, {Component} from 'react';

class InputForm extends Component {
    render() {
        const {title,id} = this.props
        return (
            <div className="row">
                <div className="col-8">
                    <div className="form-label-group">
                        <input type="text" id={id} className="form-control"
                               placeholder={title}
                               required/>
                        <label htmlFor={id}>{title}</label>
                    </div>
                </div>
                <div className="col-4">
                    <button style={{borderRadius: "10rem", maxHeight: "3rem"}}
                            className="btn btn-lg btn-primary btn-block"
                            type="submit">Add
                    </button>
                </div>
            </div>
        );
    }
}

export default InputForm;