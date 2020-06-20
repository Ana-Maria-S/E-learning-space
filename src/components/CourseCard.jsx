import React, {Component} from 'react';
import history from "../utilities/History";

export default class CourseCard extends Component {
    constructor(props){
        super(props);
    }

    cardCourseNavigate(id) {
        history.push(`/Course?id=${id}`)
    }

    render(){
         return(
            <div className="course-card-container card text-center">
                <div className="overflow">
                    {/* <img src={require("../assets/blockchains.jpg")} alt="" className="card-img-top"/> */}
                    <img src={`${this.props.image}`} alt="" className="card-img-top"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{this.props.title}</h4>
                    <div className = "card-text text-secondary">
                    {this.props.description}
                     </div>
                    <button onClick={() => this.cardCourseNavigate(this.props.id)} className="btn btn-outline-success">Detalii</button>
                </div>
            </div>
    );
}}
