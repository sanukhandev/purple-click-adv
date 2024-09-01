import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../../Data/Home';

class Banner extends Component {
	render() {
		return (
			<section className="banner-one go-top" style={{ backgroundImage: `url(${data.bannerBG})` }}>
				<img src={data.bannerMockUp} alt="banner" className="banner-one__moc" />
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-6">
							<div className="banner-one__content">
								<div dangerouslySetInnerHTML={{ __html: data.bannerText }} />
								<Link to={data.ReadMore.path} className="thm-btn banner-one__btn">
									{data.ReadMore.text}
									<i className={`fa ${data.ReadMore.icon}`} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Banner;
