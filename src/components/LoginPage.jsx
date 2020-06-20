
import React, { Component } from 'react'; 
import history from "../utilities/History";      

export class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        };
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePass(event) {
        this.setState({password: event.target.value});
    }
    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }

    async handleSubmit(e){
        e.preventDefault();
        await this.props.onSubmit(this.state.username, this.state.password);
    }

    render() {
        if(this.props.userLoggedIn)
            history.replace("/Home");
        return (
            <React.Fragment>
                <div className="login-container mt-5 container">
                    <img className="login-image" src="../assets/cursuri-online.png"></img>
                    <div className="d-flex justify-content-center h-100">
                        <div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input
                                            value={this.state.username}
                                            onChange={this.handleChangeUsername}
                                            type="text"
                                            className="form-control"
                                            placeholder="username"></input>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input
                                            value={this.state.password}
                                            onChange={this.handleChangePass}
                                            type="password"
                                            className="form-control"
                                            placeholder="password"></input>
                                    </div>
                                    <input 
                                        type="submit" 
                                        onClick={this.handleSubmit} 
                                        value="Login" 
                                        className="btn btn-dark float-right">
                                    </input>
                                </form>
                            </div>
                        </div>
                    </div>
                    {this.props.loginFailed && <div>Username sau parola gresita. <br/> Mai incearca!</div>}
                </div>


            </React.Fragment>
        );
    }
}

export default LoginPage;