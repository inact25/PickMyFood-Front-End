import React, {Component} from 'react';

class ListCard extends Component {
    render() {
        const {name, type, image, dataPopup, id} = this.props
        return (
            <div className="cardHoov">
                <div className="card card-small mb-4 pt-3">
                    <div className="card-body border-bottom text-center">
                        <div className="mb-3 mx-auto">
                            <img className="rounded-circle"
                                 src={image}
                                 style={{
                                     width: "120px",
                                     height: "120px",
                                     objectFit: "cover"
                                 }}
                                 alt="User Avatar" width="110"/>
                        </div>
                        <h6 className="mb-0">{name}</h6>
                        <span className="text-muted d-block mb-2">{type}</span>
                        <a onClick={(e)=>dataPopup(e)} className="stretched-link" id={id}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListCard;