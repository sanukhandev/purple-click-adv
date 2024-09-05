const publicUrl = process.env.PUBLIC_URL + '/';

const AboutUs = {
    bg:publicUrl + "assets/images/shapes/about-two-bg.png",
    mock:publicUrl + "assets/images/resources/cta-2-1.png",
    title:"What makes First Media the best publishing and advertising company?",
    subTitle: "Our goals, vision, and code can be told with 4 simple points:\n",
    description: "Started in 2009, we set a clear and definitive goal, to never compromise on anything. Even before we kicked off our operations we had an in-depth knowledge of the market and we knew since day one what it takes to be a successful firm.\n" +
        "\n" +
        "Throughout the last 10 years of experience, we worked with prestigious companies and helped them succeed in rigorous markets, and with their growth and success, our knowledge grew and our standards went higher and higher.\n" +
        "\n" +
        "We learned and proved to our customers that our combination of experience and passion is the secret recipe for sustainable success.",

    pointers:[
        {
            "icon": "fas fa-shield-alt",
            "title": "Never Compromising",
            "subtext": "We stand firm in our commitment to never compromise on quality or values."
        },
        {
            "icon": "fas fa-fire",
            "title": "Passionate and Experienced",
            "subtext": "Our team combines passion with years of experience to drive success."
        },
        {
            "icon": "fas fa-balance-scale",
            "title": "Ethical and Transparent",
            "subtext": "We operate with transparency and uphold the highest ethical standards."
        },
        {
            "icon": "fas fa-handshake",
            "title": "Partners of Success",
            "description": "We see our clients as partners, working together towards long-term success."
        }
    ]
}


export default AboutUs
