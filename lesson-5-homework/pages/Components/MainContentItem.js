import React from 'react';

export default class MainContentItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <div className="mainContent-item">
                    <p id="title">{this.props.data.title}</p>
                    <span id="description">
                        {this.props.data.type} &nbsp; {this.props.data.author} &nbsp; {this.props.data.comment}评论
                    </span>
                </div>
                <hr />
            </li>
        );
    }
};