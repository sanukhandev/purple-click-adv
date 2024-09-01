import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../../Data/Home'
class Cta extends Component {

    render() {


    return <section className="cta-one  go-top" id={'Cta'}>
		  <div className="container">
		    <div className="inner-container wow fadeInUp" data-wow-duration="1500ms">
		      <div className="cta-one__left">
		        <h3>{data.CTA.title}</h3>
		        <p>{data.CTA.subtext}</p>
		      </div>{/* /.cta-one__left */}
		      <div className="cta-one__right">
		        <Link to={data.CTA.buttonPath} className="thm-btn cta-one__btn">{data.CTA.buttonText} <i className="fa fa-angle-double-right" /></Link>
		        {/* /.thm-btn cta-one__btn */}
		      </div>{/* /.cta-one__right */}
		    </div>{/* /.inner-container */}
		  </div>{/* /.container */}
		</section>

        }
}

export default Cta
