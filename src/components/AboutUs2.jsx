import React from 'react';
import data from '../Data/AboutUs'
const AboutUs2 = () => {


    return (
        <section className="about-two go-top" id={'aboutUs'}>
            <img src={data.bg} alt="background" className="about-two__bg" />
            <div className="container">
                <img src={data.mock} alt="mock" className="about-two__moc" />
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-two__content">
                            <div className="block-title text-left">
                                <p><span>{data.title}</span></p>

                                <div className="block-title__line"/>
                            </div>
                            <p>{data.description}</p>
                            <h6 dangerouslySetInnerHTML={{__html: data.subTitle}}></h6>
                            {
                                data.pointers && data.pointers.length > 0 && (
                                    data.pointers.map((points, index) => (
                                        <div className="about-two__box" key={index}>
                                            <div className="about-two__box-icon">
                                                <i className={points.icon}/>
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
};

export default AboutUs2;
