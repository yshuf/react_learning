import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LayOut from '../src/component/LayOut/index'

import { withRouter } from 'react-router-dom'

class App extends Component() {
    constructor() {
        // super()
        this.State = {

        }
    }
    render (h) {
        return (
            <div className="App" >
                {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header> */}

                <LayOut></LayOut>
            </div >
        );
    }
}

export default withRouter(App);
