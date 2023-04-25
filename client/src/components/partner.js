import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Partner from './section-components/partnerweb';
import Footer from './global-components/footer-v2';

const PartnerPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Partner Websites"  />
        <Partner />
        <Footer />
    </div>
}

export default PartnerPage