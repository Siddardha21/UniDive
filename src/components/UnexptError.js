import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import UnexpError from './section-components/unexpterror';
import Footer from './global-components/footer-v2';

const UnexpectedError = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="OOPS!"  />
        <UnexpError />
        <Footer />
    </div>
}

export default UnexpectedError