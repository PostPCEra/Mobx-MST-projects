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

/*

TWO sets of  Response Headers :   first one Browser did NOT display Visualization, 2 nd one DOES
-----
access-control-allow-origin: *
connection: close
content-length: 528
content-type: text/html; charset=utf-8
date: Mon, 01 Jul 2019 09:48:58 GMT
etag: W/"210-Ff3Tg7vjNn2Go3zHasTEQ7v0+TI"   ----> Node js running on 3009 as Proxy
Vary: Accept-Encoding
x-powered-by: Express


connection: keep-alive
content-length: 771
content-type: text/html; charset=UTF-8
date: Mon, 01 Jul 2019 09:55:50 GMT
server: WSGIServer/0.2 CPython/3.7.1   // asr: ------->  with Python server port 4999
Vary: Accept-Encoding
X-Powered-By: Express


*/