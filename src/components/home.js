import React from 'react';
import Navbar from './global-components/navbar';
// import HomePage from './section-components/homepage';
import HomeElements from './section-components/landing-page';
import Footer from './global-components/footer';

const Home = () => {
    return <div>
        <Navbar />
        {/* <HomePage /> */}
        <HomeElements />
        <Footer />
    </div>
}

export default Home

