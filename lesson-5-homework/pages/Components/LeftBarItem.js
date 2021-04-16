import React from 'react';

export default class LeftBarItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = (this.props.active == 1) ? "leftBar-item active" : "leftBar-item";
        return (
            <li>
                <a className={className} href={this.props.data.href}>{this.props.data.title}</a>
            </li>
        );
    }
};