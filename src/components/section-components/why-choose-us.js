import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../../Data/Home';

class WhyChooseUs extends Component {
  render() {
    return (
        <section className="service-one go-top" id={'WhyChooseUs'}>
          <div className="container">
            <div className="block-title text-center">
              <p><span>{data.whatWeDo.title}</span></p>
              <h3>{data.whatWeDo.subText}</h3>
              <div className="block-title__line" />
            </div>
            <div className="row high-gutter go-top">
              {
                  data.whatWeDo.services && data.whatWeDo.services.length > 0 && (
                      data.whatWeDo.services.map((service, index) => (
                          <div className="col-lg-4" key={index}>
                            <div className="service-one__single">
                              <div className="service-one__top">
                                <div className="service-one__icon">
                                  <img src={service.icon} alt="service" />
                                </div>
                                <div className="service-one__top-content">
                                  <h3><Link to="/service-details">{service.title}</Link></h3>
                                  <p>{service.prolong}</p>
                                </div>
                              </div>
                              <p>{service.description}</p>
                            </div>
                          </div>
                      ))
                  )
              }
            </div>
          </div>
        </section>
    );
  }
}

export default WhyChooseUs;
