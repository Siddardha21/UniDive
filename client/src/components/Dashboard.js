import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import DashboardPage from './section-components/dashboard';
import Footer from './global-components/footer-v2';

const Dashboard = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="UniDive Dashboard"  />
        <DashboardPage />
        <Footer />
    </div>
}

export default Dashboard