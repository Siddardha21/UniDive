import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import ErrorPage from './section-components/errorpage';
import Footer from './global-components/footer-v2';

const ErrorPge = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="OOPS!"  />
        <ErrorPage />
        <Footer />
    </div>
}

export default ErrorPge