import React, { Component } from 'react';
import VideoTutorial from './VideoTutorial'

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
                    <div>
                     <h1 class="header-lectii-video pl-2 mt-3 ml-4">Lectii video</h1>
                    </div>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div class="carousel-inner" ref={this.slideVideosContainer}>
                            {this.props.course && this.props.course.video_tutorials.map((item, index) => {
                                if (index === 0)
                                    return (
                                        <div className="carousel-item active">
                                            <VideoTutorial
                                                link={item.link}
                                                title={item.title} >
                                            </VideoTutorial>
                                        </div>
                                    )
                                else
                                    return (
                                        <div className="carousel-item">
                                            <VideoTutorial
                                                link={item.link}
                                                title={item.title} >
                                            </VideoTutorial>

                                        </div>
                                    )
                            })}
                        </div>
                        <div className="row ml-5 pl-2">
                            <button onClick={this.goToPreviousVideo} id="previous-video" class="carousel-control-prev btn btn-dark mr-1" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span>Anterior</span>
                            </button>
                            <button onClick={this.goToNextVideo} id="next-video" class="carousel-control-next btn btn-dark" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span>Urmator</span>
                            </button>
                        </div>
                    </div>
          
                </React.Fragment>
        );
    }
}


