import React, { Component } from 'react';
import Anunt from './Anunt'

export default class CourseCardList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1 class="header-lectii-video pl-2 mt-3 ml-4">Informatii</h1>
                </div>
                <div className="ml-5">
                    {this.props.course && this.props.course.anunturi.map((item, index) => {
                        return (
                            <div>
                                <Anunt
                                    title={item.title}
                                    text={item.text}
                                    date={item.date} >
                                </Anunt>
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        );
    }
}


