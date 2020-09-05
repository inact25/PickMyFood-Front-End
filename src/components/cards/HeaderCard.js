import React, {Component} from 'react';

class HeaderCard extends Component {
    render() {
        const {title} = this.props
        return (
            <div className="card-header border-bottom">
                <h5 className="mb-0">{title}</h5>
            </div>
        );
    }
}

export default HeaderCard;