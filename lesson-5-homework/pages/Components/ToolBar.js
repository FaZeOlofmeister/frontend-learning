import React from 'react';

export default class ToolBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="toolbar">
                <div className="download shadow"><img src="https://sf3-dycdn-tos.pstatp.com/obj/eden-cn/pipieh7nupabozups/toutiao_web_pc/download.png" alt="" />
                    <p>扫码下载今日头条</p>
                </div>
                <ul className="tool-container shadow">
                    <li className="tool-item report-item"><a href="https://www.12377.cn/" rel="noopener noreferrer"><img
                        src="https://s3a.pstatp.com/toutiao/resource/ntoutiao_web/static/image/other/report_logo_15cc24e.png" /><span>网上有害信息举报</span></a>
                    </li>
                    <li className="tool-item" onClick={this.props.refresh}><img className="icon" src="https://sf3-dycdn-tos.pstatp.com/obj/eden-cn/pipieh7nupabozups/toutiao_web_pc/refreshicon.jpg" alt="" /></li>
                </ul>
            </div>
        );
    }
};