import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Terms from './section-components/termsnc';
import Footer from './global-components/footer-v2';

const TermsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Terms & Conditions"  />
        <Terms />
        <Footer />
    </div>
}

export default TermsPage