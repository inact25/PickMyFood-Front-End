import React, {Component} from 'react';

class Pagination extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-3"/>
                <div className="col d-flex justify-content-center">
                    <nav aria-label="...">
                        <ul className="pagination pagination-lg">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1">1</a>
                            </li>
                            <li className="page-item"><a className="page-link"
                                                         href="#">2</a></li>
                            <li className="page-item"><a className="page-link"
                                                         href="#">3</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-3"/>
            </div>
        );
    }
}

export default Pagination;