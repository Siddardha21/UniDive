import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import UnivdashPage from './section-components/univdash';
import Footer from './global-components/footer-v2';

const Univdash = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Unidive Dashboard"  />
        <UnivdashPage />
        <Footer />
    </div>
}

export default Univdash