import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home';
import Dashboard from './components/Dashboard';
import About from './components/about';
import Service from './components/service';
import Pricing from './components/pricing';
import Faq from './components/faq';
import Contact from './components/contact';
import ErrorPge from './components/ErrorPage';
import UnexpectedError from './components/UnexptError';

class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
						<Route exact path="/dashboard" component={Dashboard} />
	                    <Route path="/about" component={About} />
	                    <Route path="/service" component={Service} />
	                    <Route path="/pricing" component={Pricing} />
	                    <Route path="/faq" component={Faq} />
	                    <Route path="/contact" component={Contact} />
						<Route exact path="/ue" component={UnexpectedError}/>
						<Route path="*" component={ErrorPge} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('unidive'));
