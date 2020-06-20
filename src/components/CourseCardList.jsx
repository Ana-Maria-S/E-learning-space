import React, {Component} from 'react';
import CourseCard from "./CourseCard";

export default class CourseCardList extends Component{
    render(){
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
        
                    {this.props.allCurrentCourses.map(item => {
                    return <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-5 mr-md-5 ml-md-5 mr-lg-6 ml-lg-6">
                        <CourseCard   
                            id={item.id}
                            title={item.title}
                            description = {item.description}
                            image = {item.image_source}> 
                        </CourseCard>
                    </div>
                    })}
            
                </div>
            </div>
        );
    }
}