import React, {Component} from 'react';

class LoginContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-xl-4 mx-auto">
                        <div className="card card-signin flex-row my-5">
                            <div className="card-body">
                                {this.props.children}
                                <div className='userData'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginContainer;