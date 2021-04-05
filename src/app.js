import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Header} from './components/layouts/';
import {Footer} from './components/layouts/';
import {AboutPage} from "./components/pages";
import {ConfidentialPage} from "./components/pages";

export default class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Router>
                    <Header/>
                    <Route path="/" exact component={AboutPage}/>
                    <Route path="/confidential" component={ConfidentialPage}/>
                    <Footer/>
                </Router>
            </div>
        );
    }
};