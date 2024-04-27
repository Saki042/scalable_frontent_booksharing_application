import React, { Component } from 'react';
import './LoginForm.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Message: '',
            name: '',
            passwd: ''
        };
    }

    handlenameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handlePasswdChange = (event) => {
        this.setState({ passwd: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, passwd } = this.state;

        // Simple authentication check
        if (name === "Test" && passwd === "Test@123") {
            this.setState({ Message: ""});
            history.push("/dashboard");
            window.location.reload();
            alert("Login successful!");
        } else {
            this.setState({ Message: "Username or password doesnt exist" });
        }
    }
    render() {
        const { name, passwd, Message } = this.state;
        return (
            <div className="container-login">
                <h1>Scalable Services Assignment</h1>
                <h5>Gaganpreet Singh</h5>
                <h5>Sakshi Mishra</h5>
                <h5>Diptangshu Chattopadhyay</h5>
                <h5>Mukund Krishna</h5>
                <form id="login-form" onSubmit={this.handleSubmit}>
                    <h4>Login</h4>
                    <div className="input-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={this.handlenameChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            id="passwd"
                            name="passwd"
                            value={passwd}
                            onChange={this.handlePasswdChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p id="error-message">{Message}</p>
            </div>
        );
    }
}

export default LoginForm;
