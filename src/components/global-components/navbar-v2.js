import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation
import data from '../../Data/common'; // Import the data

class Navbar2 extends Component {
	render() {
		return (
			<header className="site-header-two site-header-two__ go-top">
				<nav className="main-nav__two stricky">
					<div className="container">
						<div className="main-nav__logo-box">
							<Link to="/">
								<img src={data.logoDark} alt={data.imgattr} height={'auto'} width={250} />
							</Link>
						</div>{/* /.main-nav__logo-box */}

						<div className="main-nav__main-navigation">
							<ul className="main-nav__navigation-box">
								{
									data.navbar.menu.map(menu => (
										<li className={menu.sub.length > 0 ? 'dropdown' : ''} key={menu.name}>
											<Link to={menu.path}>{menu.name}</Link>
											{
												menu.sub.length > 0 && (
													<ul>
														{
															menu.sub.map(subMenu => (
																<li key={subMenu.name}>
																	<Link to={subMenu.path}>{subMenu.name}</Link>
																</li>
															))
														}
													</ul>
												)
											}
										</li>
									))
								}
							</ul>
						</div>
						<div className="main-nav__right">
							<a href="#" className="side-menu__toggler"><span /></a>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

export default Navbar2;
