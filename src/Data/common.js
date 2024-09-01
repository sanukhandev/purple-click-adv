const publicUrl = process.env.PUBLIC_URL + '/'
const commonData = {
    logo: publicUrl + "/assets/images/logo-white.png",
    navbar:{
        menu:[
            {
                name:"Home",
                path:"/",
                sub:[]
            }  ,
            {
                name:"Service",
                path:"/",
                sub:[]
            }  ,
            {
                name:"Branding",
                path:"/",
                sub:[]
            }  ,
            {
                name:"Contact Us",
                path:"/",
                sub:[]
            }  ,
        ],

    },
    footer:{
        logo: publicUrl+"assets/images/logo-dark.png",
        mock:publicUrl + "assets/images/resources/footer-1-1.png",
        about: {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod",
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
                text: "205, Khola Street Name, New York, USA",
                icon: "far fa-map-marked"
            },
            phone: {
                title: "Phone",
                text: "+82 123 456 89",
                url: "tel:+82-123-456-89",
                icon: "far fa-phone"
            }
        },
        copyright: "© Copyright 2024 Purple Click Powered by Desert Whales. | © حقوق الطبع والنشر 2024 Purple Click مدعوم من Desert Whales."
    }

}

export default commonData
