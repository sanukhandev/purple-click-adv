import React from 'react';

const ServiceComponent = ({ sections }) => {
	const publicUrl = process.env.PUBLIC_URL + '/';

	return (
		<section className="service-two service-two__service-page go-top">
			<div className="container">
				{sections.map((section, index) => (
					<div className="row" key={index} style={{ padding: '20px 0px', margin: '1rem 0' }}>
						<div className="col-lg-5">
							<div className="service-two__block">
								<div className="block-title-two text-left">
									<p>Our Services</p>
									<h3>{section.title}</h3>
								</div>
								<p>{section.description}</p>
								<ul className="list-unstyled video-one__list">
									{section.services.map((service, idx) => (
										<li key={idx}>
											<i className="far fa-check" />
											{service}
										</li>
									))}
								</ul>
								{/*<Link to="/service" className="thm-btn">*/}
								{/*	View More <i className="fa fa-angle-double-right" />*/}
								{/*</Link>*/}
							</div>
						</div>
						<div className="col-lg-7 d-flex justify-content-center">
							<div className="faq-two__image">
								<img
									src={publicUrl + section.image} // Assuming each section has an image path
									alt={section.title}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ServiceComponent;

//
// import React from 'react';
//
// const ServiceComponent = ({ sections }) => {
// 	return (
// 		<section className="service-sections go-top">
// 			<div className="container">
// 				{sections.map((section, index) => (
// 					<div className="row service-section" key={index}>
// 						<div className="col-lg-12">
// 							<div className="service-block">
// 								<div className="block-title text-left">
// 									<h3>{section.title}</h3>
// 								</div>
// 								<p>{section.description}</p>
//
// 								<h4>Services We Provide:</h4>
// 								<ul className="service-list list-unstyled">
// 									{section.services.map((service, idx) => (
// 										<li key={idx}>
// 											<i className="far fa-check" />
// 											{service}
// 										</li>
// 									))}
// 								</ul>
//
// 								{section.why && (
// 									<>
// 										<h4>{section.why.title}</h4>
// 										<ul className="why-list list-unstyled">
// 											{section.why.reasons.map((reason, reasonIdx) => (
// 												<li key={reasonIdx}>
// 													<strong>{reason.title}:</strong> {reason.description}
// 												</li>
// 											))}
// 										</ul>
// 									</>
// 								)}
// 							</div>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</section>
// 	);
// };
//
// export default ServiceComponent;
//
