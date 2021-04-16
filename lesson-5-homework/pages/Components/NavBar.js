import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">下载app</a>
                        </li>
                        <div className="nav-divider"></div>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">注册头条号</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.props.weather}
                            </a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <a className="nav-link" href="#">侵权投诉</a>
                    </span>
                    <span className="navbar-text">
                        <a className="nav-link" href="#">头条产品</a>
                    </span>
                </div>
            </nav>
        );
    }
};