import React, { Component } from "react";
import { Route } from "react-router";
import { Router } from "react-router-dom";
import Layout from "./Layout";
import history from "./utilities/History";
import HomePage from "./components/HomePage";
import appState from "./AppState";
import httpCaller from "./utilities/httpCaller";
import LoginPage from "./components/LoginPage";
import CoursePage from "./components/CoursePage";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                currentCourses: [],
                userLoggedIn: false,
                loginFailed: false,
                currentCourseSection: ""
            };
    }

    async componentDidMount() {
        if (!sessionStorage.getItem("currentCourses")) {
            const currentCourses = await httpCaller.getCurrentCourses();
            sessionStorage.setItem("currentCourses", JSON.stringify(currentCourses));
        }
        this.setState({
            currentCourses: (JSON.parse(sessionStorage.getItem("currentCourses"))).currentCourses
        });
        // history.replace("/Home");
    }


    getQueryParamCourse() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let courseId = urlParams.get('id');
        const urlSection = urlParams.get('section');
        let courseSection;
        if(urlSection)
            courseSection = urlSection;
        else
            courseSection = "anunturi";

        for (var i = 0; i < this.state.currentCourses.length; i++) {
            if (this.state.currentCourses[i].id === courseId) {
                this.state.currentCourses[i].section = courseSection;
                return this.state.currentCourses[i];
            }
        }
        if(this.state.currentCourses[0])
        {
            this.state.currentCourses[0].section = courseSection;
            return this.state.currentCourses[0];
        }
        return undefined;
    }
    getQueryParamSection() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const courseSection = urlParams.get('section');
        if(courseSection)
            return courseSection;
        else
            return "anunturi";
    }

    async handleLoginSubmit(username, pass) {
        const currentStudent = await httpCaller.getCurrentStudent(username, pass);
        if (currentStudent) {
            this.setState({
                loginFailed: false,
                userLoggedIn: true
            });
            history.replace("/Home");
        }
        else
            this.setState({
                loginFailed: true
            });
    }

    render() {
        return (
            <Router history={history}>
                <Layout>
                    <Route
                        exact path={"/Login"}
                        render={routerProps => (
                            <LoginPage
                                userLoggedIn={this.state.userLoggedIn}
                                loginFailed={this.state.loginFailed}
                                onSubmit={async (user,pass) => await this.handleLoginSubmit(user,pass)}>
                            </LoginPage>)}>
                    </Route>
                    <Route
                        exact path={"/Home"}
                        render={routerProps => (
                            <HomePage
                                allCurrentCourses={this.state.currentCourses}>
                            </HomePage>)}>
                    </Route>
                    <Route
                        path={"/Course"}
                        render={routerProps => (
                            <CoursePage
                                course={this.getQueryParamCourse()}>
                            </CoursePage>)}>
                    </Route>
                </Layout>
            </Router>
        );
    }
}

