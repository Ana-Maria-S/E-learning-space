import React, { Component } from 'react';
import VideoTutorialList from './VideoTutorialList'
import AnunturiList from './AnunturiList'

export default class CourseCardList extends Component {
    constructor(props) {
        super(props);
        this.goToPreviousVideo = this.goToPreviousVideo.bind(this);
        this.goToNextVideo = this.goToNextVideo.bind(this);
        this.slideVideosContainer = React.createRef();
    }


    goToNextVideo() {
        const videos = this.slideVideosContainer.current.getElementsByClassName("carousel-item");
        if (videos.length > 0) {
            for (var i = 0; i < videos.length; i++) {
                if (videos[i].classList.contains('active')) {
                    videos[i].classList.remove('active')
                    if (i + 1 == videos.length)
                        videos[0].classList.add('active')
                    else
                        videos[i + 1].classList.add('active')
                    return;
                }
            }
        }
    }
    goToPreviousVideo() {
        const videos = this.slideVideosContainer.current.getElementsByClassName("carousel-item");
        if (videos.length > 0) {
            for (var i = 0; i < videos.length; i++) {
                if (videos[i].classList.contains('active')) {
                    videos[i].classList.remove('active')
                    if (i - 1 === -1)
                        videos[videos.length - 1].classList.add('active')
                    else
                        videos[i - 1].classList.add('active')
                    return;
                }
            }
        }
    }


    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light  nav-welcome">
                    <div class="collapse navbar-collapse" id="navbarText">

                        <span class="welcome navbar-text">
                            {`Bine ai venit la cursul de ${this.props.course && this.props.course.title}!`}
                        </span>
                    </div>
                </nav>
                <nav class="navbar navbar-expand-lg navbar-light subnav-course">
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item active">
                                <a class="btn btn-outline-success mr-1 mb-1" href={`/Course?id=${this.props.course && this.props.course.id}&section=anunturi`}>Anunturi<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="btn btn-outline-success mr-1 mb-1" href={`/Course?id=${this.props.course && this.props.course.id}&section=video`}>Video</a>
                            </li>
                            <li class="nav-item">
                                <a class="btn btn-outline-success mr-1" href={`/Course?id=${this.props.course && this.props.course.id}&section=documente`}>Documente</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                    {this.props.course && this.props.course.section === "anunturi" &&
                        <div>
                            <AnunturiList
                                course={this.props.course}>
                            </AnunturiList>
                        </div>}
                    {this.props.course && this.props.course.section  === "video" &&
                     <div className="row">
                        <div className="col-lg-9 col-md-9">
                            <VideoTutorialList
                                course={this.props.course}>
                            </VideoTutorialList>
                        </div>
                        <div className="col-lg-4 col-md-4">ghe</div>
                        </div>
                    }
                    {this.props.course && this.props.course.section === "documente" && <div>Documente</div>}
            </React.Fragment>
        );
    }
}


