import React, {Component} from 'react';
import {GrAddCircle} from 'react-icons/gr'

class InputForm extends Component {
    render() {
        const {title,id,name,handleChange,value,submit,isAdding} = this.props
        return (
            <div className="row">
                <div className="col-8">
                    <div className="form-label-group">
                        <input type="text"
                               id={id}
                               className="form-control"
                               placeholder={title}
                               name={name}
                               onChange={(e)=>handleChange(e)}
                               required
                               value={value}
                               disabled={isAdding}
                    />
                        <label htmlFor={id}>{title}</label>
                    </div>
                </div>
                <div className="col-4">
                    <button style={{borderRadius: "10rem", maxHeight: "3rem"}}
                            className="btn btn-lg btn-dark btn-block"
                            type="submit"
                            disabled={isAdding}
                    onClick={()=>submit()}><p style={{fontSize:"1rem"}}><GrAddCircle/></p>
                    </button>
                </div>
            </div>
        );
    }
}

export default InputForm;