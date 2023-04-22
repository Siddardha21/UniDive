import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Service from './section-components/services';
import Footer from './global-components/footer-v2';

const Services = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Services"  />
        <Service />
        <Footer />
    </div>
}

export default Services

