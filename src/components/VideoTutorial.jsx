import React, { Component } from 'react';

export default class VideoTutorial extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="container video-container">
                <h2>{this.props.title}</h2>
                <div panel panel-default>
                    <div panel-body>
                        <iframe
                            width="900"
                            height="600"
                            allowfullscreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen"
                            msallowfullscreen="msallowfullscreen"
                            oallowfullscreen="oallowfullscreen"
                            webkitallowfullscreen="webkitallowfullscreen"
                            src={this.props.link}>
                        </iframe>
                        
                    </div>
                </div>
            </div>
        );
    }
}