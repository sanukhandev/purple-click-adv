const publicUrl = process.env.PUBLIC_URL + '/'
const commonData = {
    logo: publicUrl + "assets/images/logo-white.png",
    navbar:{
        menu:[
            {
                name:"Home",
                path:"/",
                sub:[]
            }  ,
            {
                name:"Service",
                path:"aboutUs",
                sub:[]
            }  ,
            {
                name:"Branding",
                path:"WhyChooseUs",
                sub:[]
            }  ,
            {
                name:"Contact Us",
                path:"Cta",
                sub:[]
            }  ,
        ],

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
