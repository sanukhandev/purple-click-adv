import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import ContactPage from "./components/section-components/contact-page";
import About from "./Pages/About"; // Import Contact component

class Root extends Component {
    render() {
        return (
            <Router basename="/">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/services" component={Service} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/contact2" component={ContactPage} />
                </Switch>
            </Router>
        );
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('bizkar'));
