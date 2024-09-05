import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../Data/common';

const Contact = () => {
	const { contactInfo } = data;  // Destructure the contact info data

	return (
		<div>
			<section className="contact-two">
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="contact-two__content">
								<div className="contact-two__block">
									<h3>{contactInfo.title}</h3>
									<p>{contactInfo.description}</p>
								</div>{/* /.contact-two__block */}
								<ul className="list-unstyled contact-two__info-list">
									<li>
										<div className="contact-two__info-list-title">
											<i className="far fa-map-marked" />
											Address :
										</div>{/* /.contact-two__info-list-title */}
										<p>{contactInfo.address}</p>
									</li>
									<li>
										<div className="contact-two__info-list-title">
											<i className="far fa-phone" />
											Call Us :
										</div>{/* /.contact-two__info-list-title */}
										<p><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
									</li>
									<li>
										<div className="contact-two__info-list-title">
											<i className="far fa-envelope" />
											Email Us :
										</div>{/* /.contact-two__info-list-title */}
										<p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
									</li>
								</ul>{/* /.contact-two__info-list */}
							</div>{/* /.contact-two__content */}
						</div>{/* /.col-lg-5 */}
						<div className="col-lg-7">
							<form action="#" className="contact-two__form">
								<div className="contact-two__block">
									<h3>{contactInfo.formTitle}</h3>
									<p>{contactInfo.formDescription}</p>
								</div>{/* /.contact-two__block */}
								<div className="row">
									<div className="col-md-6">
										<input type="text" placeholder="Full Name" />
									</div>{/* /.col-md-6 */}
									<div className="col-md-6">
										<input type="text" placeholder="Email Address" />
									</div>{/* /.col-md-6 */}
									<div className="col-md-12">
										<input type="text" placeholder="Subject" />
									</div>{/* /.col-md-12 */}
									<div className="col-md-12">
										<textarea name="message" placeholder="Message" />
										<button type="submit" className="thm-btn contact-two__btn">
											Send Message <i className="fa fa-angle-double-right" />
										</button>{/* /.thm-btn contact-two__btn */}
									</div>{/* /.col-md-12 */}
								</div>{/* /.row */}
							</form>{/* /.contact-two__form */}
						</div>{/* /.col-lg-7 */}
					</div>{/* /.row */}
				</div>{/* /.container */}
			</section>{/* /.contact-two */}

			<iframe
				src={contactInfo.googleMapSrc}
				className="google-map__contact"
				allowFullScreen
				title="Google Map"
			/>
		</div>
	);
}

export default Contact;
