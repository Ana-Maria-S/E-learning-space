import React, { Component } from "react";
import CoursesPresentationsCards from "./CourseCardList";


export default class HomePage extends Component {
    state = {
        
    };
  
    render() {
        return (
            <React.Fragment>
                <CoursesPresentationsCards allCurrentCourses = {this.props.allCurrentCourses}/>
            </React.Fragment>
        );
    }
}
