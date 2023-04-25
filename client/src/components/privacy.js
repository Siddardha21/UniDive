import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Privacy from './section-components/privacyply';
import Footer from './global-components/footer-v2';

const PrivacyPolicy = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Privacy Policy"  />
        <Privacy />
        <Footer />
    </div>
}

export default PrivacyPolicy