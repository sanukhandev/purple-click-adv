const publicUrl = process.env.PUBLIC_URL + '/'
const commonData = {
    logo: publicUrl + "assets/images/logo-white.png",
    logoDark: publicUrl + "assets/images/logo-dark.png",
    navbar:{
        menu:[
            {
                name:"Home",
                path:"/",
                sub:[]
            }  ,
            {
                name:"About",
                path:"about",
                sub:[]
            }  ,
            {
                name:"Services",
                path:"services",
                sub:[]
            }  ,
            {
                name:"Contact Us",
                path:"contact",
                sub:[]
            }  ,
        ],

    },
    contactInfo: {
        title: "Don't Hesitate To Contact Us",
        description: "Leading Your Business with Proven Strategies and Creative Excellence",
        address: "Dubai United Arab Emirates",
        phone: "+971 55 866 2770",
        email: "info@purpleclickads.com",
        formTitle: "Get In Touch",
        formDescription: "Reach out to Purple Click, where innovation meets strategy. Whether you're looking to elevate your brand or create captivating campaigns, we're here to turn your vision into reality. Let's collaborate to craft advertising solutions that stand out and drive results.",
        googleMapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.270256846498!2d55.27078231500119!3d25.20484928389366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434b1a93fb5f%3A0x8f4e7e9a3dbb67a9!2sDubai!5e0!3m2!1sen!2sae!4v1562518641290!5m2!1sen!2sae",
    },
    footer:{
        logo: publicUrl+"assets/images/logo-dark.png",
        mock:publicUrl + "assets/images/resources/footer-1-1.png",
        about: {
            text: "Email us @ info@purpleclickads.com",
            socialLinks: [
                {
                    platform: "facebook",
                    url: "https://www.facebook.com/webtend/",
                    icon: "fab fa-facebook-f"
                },
                {
                    platform: "twitter",
                    url: "https://www.twitter.com/webtend/",
                    icon: "fab fa-twitter"
                },
                {
                    platform: "google-plus",
                    url: "https://google.com/webtend",
                    icon: "fab fa-google-plus-g"
                },
                {
                    platform: "behance",
                    url: "https://behance.com/webtend",
                    icon: "fab fa-behance"
                }
            ]
        },
        contact: {
            address: {
                title: "Address",
                text: "Dubai United Arab Emirates",
                icon: "far fa-map-marked"
            },
            phone: {
                title: "Phone",
                text: "+971 55 866 2770",
                url: "tel:+971558662770",
                icon: "far fa-phone"
            }
        },
        copyright: "© Copyright 2024 Purple Click Powered by Desert Whales. | © حقوق الطبع والنشر 2024 Purple Click مدعوم من Desert Whales."
    }

}

export default commonData
