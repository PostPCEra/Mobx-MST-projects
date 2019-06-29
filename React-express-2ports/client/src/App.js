import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import OPT from "./OPT_live-html-code"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        // fetch("http://localhost:3009/LIVE_exec_py3.py")
        fetch("http://localhost:3009")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React 22</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            
            <OPT/>

            </div>
        );
    }
}

export default App;
