import React from 'react';
import Footer from "../components/global-components/footer";
import Navbar2 from "../components/global-components/navbar-v2";
import PageHeader from "../components/global-components/page-header";
import ContactPage from "../components/section-components/contact-page";

const Contact = () => {
    return (
        <>
            <Navbar2/>
            <PageHeader headertitle="Contact Us" Img={'pageHeader3.png'}/>
            < ContactPage/>
            <Footer/>
        </>
    );
}

export default Contact;
