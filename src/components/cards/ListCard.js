import React, {Component} from 'react';

class ListCard extends Component {
    render() {
        const {name, type, image} = this.props

        return (
            <div className="card card-small mb-4 pt-3">
                <div className="card-header border-bottom text-center">
                    <div className="mb-3 mx-auto">
                        <img className="rounded-circle"
                             src={image}
                             alt="User Avatar" width="110"/>
                    </div>
                    <h4 className="mb-0">{name}</h4>
                    <span className="text-muted d-block mb-2">{type}</span>
                    <a href="" className="stretched-link"/>
                </div>
            </div>
        );
    }
}

export default ListCard;