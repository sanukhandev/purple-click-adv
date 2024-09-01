const publicUrl = process.env.PUBLIC_URL + '/'
const HomeData = {
    bannerBG: publicUrl + 'assets/images/backgrounds/banner-bg-1-1.png',
    bannerMockUp : publicUrl+"assets/images/resources/banner-1-1.png",
    ReadMore:{
        text:"Discover Now",
        path:"/service",
        icon:"fa-angle-double-right"
    },
    bannerText: "<h3><span>Discover The </span> <br />First Media <br />  <em>Adaptable</em> &amp; <em>Innovative</em></h3> <p>Publishing &amp;  Advertising Solutions, Keeping clients ahead of market trends.</p>",
    aboutUs:{
        bg:publicUrl+"assets/images/shapes/about-two-bg.png",
        mock:publicUrl+"assets/images/resources/cta-2-1.png",
        title:"What We Do",
        subTitle: "We Offer Best Soluation <br /> For Your Business",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip exea commodo consequat.",
        pointers:[
            {
                icon:"far fa-leaf",
                title:"Manage Your Project",
                subtext:"Consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            },
            {
                icon:"far fa-laptop-code",
                title:"Business & Data Analytics",
                subtext:"Consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            }
        ]
    },
    whatWeDo:{
        title:"Why Like Us",
        subText:"Success Your Business With Establish Agency",
        services:[
            {
                title:"Business Strategy & Market Research",
                icon:publicUrl+"assets/images/shapes/service-i-1.png",
                prolong:"Improve Business",
                description:"Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmod tempor incid dunt utlab ore et dolore magna aliqua. Ut enim ad minim veniam weay in the sun."
            },
            {
                title:"Business Strategy & Market Research",
                icon:publicUrl+"assets/images/shapes/service-i-2.png",
                prolong:"Improve Business",
                description:"Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmod tempor incid dunt utlab ore et dolore magna aliqua. Ut enim ad minim veniam weay in the sun."
            },
            {
                title:"Business Strategy & Market Research",
                icon:publicUrl+"assets/images/shapes/service-i-3.png",
                prolong:"Improve Business",
                description:"Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmod tempor incid dunt utlab ore et dolore magna aliqua. Ut enim ad minim veniam weay in the sun."
            }
        ]
    }
}

export default HomeData
