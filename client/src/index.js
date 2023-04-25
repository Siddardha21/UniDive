import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home';
// import Dashboard from './components/Dashboard';
import About from './components/about';
import Service from './components/service';
import Pricing from './components/pricing';
import FinancePage from './components/Finance';
import LegalPage from './components/Legal';
import Faq from './components/faq';
import Contact from './components/contact';
import ErrorPge from './components/ErrorPage';
import UnexpectedError from './components/UnexptError';
import TermsPage from './components/terms';
import NewsletterPage from './components/newsletter';
import PartnerPage from './components/partner';
import PrivacyPolicy from './components/privacy';
import Dashboard from './components/Univdash';




class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
						{/* <Route exact path="/dashboard" component={Dashboard} /> */}
						<Route exact path="/univdash" component={Dashboard} />
	                    <Route path="/about" component={About} />
	                    <Route path="/service" component={Service} />
	                    <Route path="/pricing" component={Pricing} />
	                    <Route path="/faq" component={Faq} />
						<Route path="/financials" component={FinancePage}/>
						<Route path="/legals" component={LegalPage}/>
	                    <Route path="/contact" component={Contact} />
						<Route path="/newsletter" component={NewsletterPage} />
						<Route path="/partner" component={PartnerPage} />
						<Route path="/terms" component={TermsPage}/>
						<Route path="/privacy" component={PrivacyPolicy}/>
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
