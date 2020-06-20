import React, { Component } from 'react';

export default class CourseCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                {/* <h2>{this.props.title}</h2>
                <div>{}this.props.text</div> */}
                <div class="toast show mt-3"  role="alert" aria-live="assertive">
                    <div class="toast-header">
                    <div class="rounded mr-2"/>
                        <strong class="mr-auto">{this.props.title}</strong>
                        <small class="text-muted">{this.props.date}</small>
                    </div>
                    <div class="toast-body">
                        {this.props.text}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
