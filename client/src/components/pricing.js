import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Pricingp from './section-components/pricingp';
import Footer from './global-components/footer-v2';

const PricingPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Pricing"  />
        <Pricingp />
        <Footer />
    </div>
}

export default PricingPage

