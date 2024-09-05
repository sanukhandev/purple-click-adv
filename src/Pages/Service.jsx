import React from "react";
import Navbar2 from "../components/global-components/navbar-v2";
import Footer from "../components/global-components/footer";
import PageHeader from "../components/global-components/page-header";
import ServiceComponent from "../components/section-components/service-v6";
import data from '../Data/Service'

const Service = () => {
    return (
        <>
            <Navbar2/>
            <PageHeader headertitle="Our Services" Img={'pageHeader2.png'}  />
            <ServiceComponent sections={data.sections} />
            <Footer/>
        </>
    );
}

export default Service;
