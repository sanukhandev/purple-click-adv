import React from "react";
import Navbar2 from "../components/global-components/navbar-v2";
import Footer from "../components/global-components/footer";
import PageHeader from "../components/global-components/page-header";
import WhyChooseUs from "../components/section-components/why-choose-us";

const Service = () => {
    return (
        <>
            <Navbar2/>
            <PageHeader headertitle="Our Services" Img={'pageHeader2.png'}  />
            <WhyChooseUs />
            <Footer/>
        </>
    );
}

export default Service;
