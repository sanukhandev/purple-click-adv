import React, {Component} from 'react';
import data from '../../Data/common';

class Footer extends Component {
    componentDidMount() {
        const $ = window.$;
        let publicUrl = process.env.PUBLIC_URL + '/';
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/theme.js";
        document.body.appendChild(minscript);
        $('.go-top').find('a').on('click', function () {
            $(window).scrollTop(0);
        });
    }

    render() {
        const {footer} = data;
        if (!footer) {
            return null; // Return null if footer data is not available
        }

        return (
            <div>
                <footer className="site-footer-one">
                    <div className="site-footer-one__upper">
                        <div className="container">
                            {footer.logo && (
                                <img src={footer.mock} alt="Footer Mockup"
                                     className="site-footer-one__upper-moc"/>
                            )}
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="footer-widget footer-widget__about">
                                        <a href="/">
                                            <img src={footer.logo} alt="Footer Logo"
                                                 height={50}/>
                                        </a>
                                        <p>{footer.about?.text}</p>
                                        <form action="#" className="footer__mc-form">
                                            <input type="text" placeholder="Enter Your Email"/>
                                            <button type="submit"><i className="fa fa-long-arrow-alt-right"/></button>
                                        </form>
                                        <div className="footer-widget__social">
                                            {footer.about?.socialLinks?.map((link, index) => (
                                                <a href={link.url} key={index} aria-label={link.platform}>
                                                    <i className={link.icon}/>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="footer-widget footer-widget__contact">
                                        <h3 className="footer-widget__title">Official Address</h3>
                                        {footer.contact?.address && (
                                            <div className="footer-widget__contact-box">
                                                <div className="footer-widget__contact-top">
                                                    <i className={footer.contact.address.icon}/>
                                                    <h3>{footer.contact.address.title}</h3>
                                                </div>
                                                <p>{footer.contact.address.text}</p>
                                            </div>
                                        )}
                                        {footer.contact?.phone && (
                                            <div className="footer-widget__contact-box">
                                                <div className="footer-widget__contact-top">
                                                    <i className={footer.contact.phone.icon}/>
                                                    <h3>{footer.contact.phone.title}</h3>
                                                </div>
                                                <p><a href={footer.contact.phone.url}>{footer.contact.phone.text}</a>
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer-one__bottom">
                        <div className="container">
                            <div className="site-footer-one__bottom-line"/>
                            <p>{footer.copyright}</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
