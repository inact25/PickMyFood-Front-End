import React, {Component} from 'react';

class Header extends Component {
    render() {
    const {title} = this.props
        return (
            <div className="page-header row no-gutters py-4">
                <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                    <span className="text-uppercase page-subtitle">Dashboard</span>
                    <h3 className="page-title">{title}</h3>
                </div>
            </div>
        );
    }
}

export default Header;