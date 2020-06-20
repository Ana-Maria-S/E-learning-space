import React, { Component } from 'react';

export default class NotesList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container-fluid">   
                {this.props.courseID && this.props.course.video_tutorials.map(item => {
                    return <div className="row mb-10">
                        <VideoTutorial
                            link={item.link}
                            title={item.title} >
                        </VideoTutorial>

                    </div>
                })}
            </div>
        );
    }
}