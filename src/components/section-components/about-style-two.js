import React, { Component } from 'react';
import data from '../../Data/Home';

class AboutUs extends Component {
    render() {
        return (
            <section className="about-two go-top" id={'aboutUs'}>
                <img src={data.aboutUs.bg} alt="background" className="about-two__bg" />
                <div className="container">
                    <img src={data.aboutUs.mock} alt="mock" className="about-two__moc" />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-two__content">
                                <div className="block-title text-left">
                                    <p><span>{data.aboutUs.title}</span></p>
                                    <h3 dangerouslySetInnerHTML={{ __html: data.aboutUs.subTitle }}></h3>
                                    <div className="block-title__line" />
                                </div>
                                {/* /.block-title */}
                                <p>{data.aboutUs.description}</p>
                                {
                                    data.aboutUs.pointers && data.aboutUs.pointers.length > 0 && (
                                        data.aboutUs.pointers.map((points, index) => (
                                            <div className="about-two__box" key={index}>
                                                <div className="about-two__box-icon">
                                                    <i className={`far ${points.icon}`} />
                                                </div>
                                                <div className="about-two__box-content">
                                                    <h3>{points.title}</h3>
                                                    <p>{points.subtext}</p>
                                                </div>
                                            </div>
                                        ))
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;
