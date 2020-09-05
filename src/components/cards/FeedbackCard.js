import React, {Component} from 'react';

class FeedbackCard extends Component {
    render() {
        const {image,name,type,data} = this.props
        return (
                <div className="card card-small mb-4 pt-3">
                    <div className="card-header border-bottom">
                        <div className="row">
                            <div className="col-4 text-center">
                                <div className="mb-3 mx-auto">
                                    <img className="rounded-circle"
                                         src={image}
                                         alt="User Avatar" width="35"/>
                                </div>
                            </div>
                            <div className="col-8">
                                <h6 className="mb-0">{name}</h6>
                                <span className="text-muted d-block mb-2">{type}</span>

                            </div>
                        </div>
                        <hr/>
                        <p>{data}</p>
                        <a href="" className="stretched-link"/>
                    </div>
                </div>
        );
    }
}

export default FeedbackCard;