import React from 'react'
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
//import Contact from './section-components/contact-page';
import Footer from './global-components/footer-v2';
import FinancialPage from './section-components/Financials';

const Financials = () => {
  return <div>
      <Navbar />
      <PageHeader headertitle="Financials" />
      <FinancialPage />
      {/* <Contact /> */}
      <Footer />
  </div>
}

export default Financials