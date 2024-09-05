import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ headertitle, subheader, Img }) => {
	const publicUrl = process.env.PUBLIC_URL + '/';
	const HeaderTitle = headertitle;
	const Subheader = subheader || headertitle;
	const backgroundImg = Img ? Img : 'page-header-bg-1-1.jpg';

	return (
		<section className="page-header" style={{ backgroundImage: `url(${publicUrl}assets/images/backgrounds/${backgroundImg})` }}>
			<div className="container">
				<h2>{HeaderTitle}</h2>
				<ul className="list-unstyled thm-breadcrumb">
					<li><Link to="/">Home</Link></li>
					<li><span>{Subheader}</span></li>
				</ul>{/* /.list-unstyled thm-breadcrumb */}
			</div>{/* /.container */}
		</section>
	);
}

export default PageHeader;
