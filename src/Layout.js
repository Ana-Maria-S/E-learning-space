import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
//import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./style/e-learning-space-theme.css"

class Layout extends Component {
    static displayName = Layout.name;
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location && window.scrollTo) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <div>
                {
                    <React.Fragment>
                        <Navbar />
                        <div>{this.props.children}</div>
                        {/* <Footer  /> */}
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default withRouter(Layout);
