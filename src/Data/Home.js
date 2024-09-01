const publicUrl = process.env.PUBLIC_URL + '/';
const HomeData = {
    bannerBG: publicUrl + 'assets/images/backgrounds/banner-bg-1-1.png',
    bannerMockUp : publicUrl + "assets/images/resources/banner-1-1.png",
    ReadMore:{
        text:"Discover Now",
        path:"/services",
        icon:"fa-angle-double-right"
    },
    bannerText: "<h3><span>Empower Your </span> <br />Brand with <br />  <em>Innovative</em> &amp; <em>Artistic</em> Solutions</h3> <p>Publishing &amp; Advertising Services, Elevating Your Brand to Global Standards.</p>",
    aboutUs:{
        bg:publicUrl + "assets/images/shapes/about-two-bg.png",
        mock:publicUrl + "assets/images/resources/cta-2-1.png",
        title:"Our Expertise",
        subTitle: "We Offer Comprehensive Solutions <br /> For Your Business Success",
        description: "At First Media, we combine passion, experience, and creativity to deliver exceptional branding, graphic design, and advertising services that resonate with your audience and elevate your business.",
        pointers:[
            {
                icon:"far fa-leaf",
                title:"Innovative Branding",
                subtext:"From brand naming to logo design, we create identities that are memorable and legally protected."
            },
            {
                icon:"far fa-laptop-code",
                title:"Creative Graphic Design",
                subtext:"Our artistic designs convey powerful messages across all platforms, ensuring your brand stands out."
            }
        ]
    },
    CTA: {
        title:"Unleash Your Brand's Potential",
        subtext:"Bring your vision to life with innovative strategies and creative solutions. Elevate your business today.",
        buttonText:"Contact Us",
        buttonPath:"/contact"
    },
    whatWeDo:{
        title:"Why Choose Us",
        subText:"Leading Your Business with Proven Strategies and Creative Excellence",
        services:[
            {
                title:"Branding & Identity",
                icon:publicUrl + "assets/images/shapes/service-i-1.png",
                prolong:"Empower Your Brand",
                description:"We craft unique brand identities that not only protect your innovations but also establish your business authority in the market."
            },
            {
                title:"Graphic Design Excellence",
                icon:publicUrl + "assets/images/shapes/service-i-2.png",
                prolong:"Visually Impactful",
                description:"Our designs go beyond aesthetics, delivering rich, cross-platform visuals that speak volumes about your brand."
            },
            {
                title:"Comprehensive Advertising",
                icon:publicUrl + "assets/images/shapes/service-i-3.png",
                prolong:"Reach Your Audience",
                description:"From traditional to digital advertising, we ensure your brand gets the visibility and recognition it deserves, driving growth and success."
            }
        ]
    }
};

export default HomeData;
