import React from 'react';

export default class LeftBarItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="footer">
                <p>Copyright &#169; <a href="https://github.com/FaZeOlofmeister">Ye Jiachen</a>, SJTU. All rights reserved.</p>
            </div>
        );
    }
};