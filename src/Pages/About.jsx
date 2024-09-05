import React from 'react';
import Footer from "../components/global-components/footer";
import Navbar2 from "../components/global-components/navbar-v2";
import PageHeader from "../components/global-components/page-header";
import AboutUs2 from "../components/AboutUs2";

const About = () => {
    return (
        <>
           <Navbar2/>
            <PageHeader headertitle="About Us" Img={'pageHeader1.png'} />
            <AboutUs2 />
            <Footer />
        </>
    );
}

export default About;
