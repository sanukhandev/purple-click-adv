import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";


class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
                      {<Route exact path="/" component={Home} />}

	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('bizkar'));
