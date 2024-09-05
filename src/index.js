import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import AboutUs from "./components/section-components/about-style-two";
import ContactPage from "./components/section-components/contact-page"; // Import Contact component
class Root extends Component {
    render() {
        return (
            <HashRouter basename="/">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about2" component={AboutUs} />
                    <Route exact path="/services" component={Service} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/contact2" component={ContactPage} />
                </Switch>
            </HashRouter>
        );
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('bizkar'));
