import React from 'react'
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer-v2';
import LegalPage from './section-components/Legals';

const Legals = () => {
  return <div>
      <Navbar />
      <PageHeader headertitle="Legal Information" />
      <LegalPage />
      <Footer />
  </div>
}

export default Legals