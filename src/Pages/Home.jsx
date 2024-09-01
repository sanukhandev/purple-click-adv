import React from 'react';
import Navbar from "../components/global-components/navbar";
import Banner from "../components/section-components/banner";
import WhyChooseUs from "../components/section-components/why-choose-us";
import CTA from "../components/section-components/cta";
import Footer from "../components/global-components/footer";
import AboutUs from "../components/section-components/about-style-two";

const Home = () => {
    return(
        <div>
            <Navbar />
            <Banner />
            <AboutUs />
            <WhyChooseUs />
            <CTA />
            <Footer />
        </div>
    )
}

export default Home
