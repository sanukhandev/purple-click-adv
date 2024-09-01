import React, { Component } from 'react';
import { Link } from 'react-scroll';
import data from '../../Data/common';

class Navbar extends Component {
    render() {
        return (
            <header className="site-header-one go-top">
                <nav className="main-nav__one stricky">
                    <div className="container-fluid">
                        <div className="main-nav__logo-box">
                            <Link to="/">
                                <img src={data.logo} alt="logo" width={250} height="auto" />
                            </Link>
                            <a href="#" className="side-menu__toggler"><i className="fa fa-bars" /></a>
                        </div>
                        <div className="main-nav__main-navigation">
                            <ul className="main-nav__navigation-box">
                                {
                                    data.navbar.menu.map(menu => (
                                        <li className={menu.sub.length > 0 ? 'dropdown':''} key={menu.name}>
                                            <Link to={menu.path} smooth={true} duration={500}>{menu.name}</Link>
                                            {
                                                menu.sub && menu.sub.length > 0 && (
                                                    <ul>
                                                        {
                                                            menu.sub.map(subMenu => (
                                                                <li key={subMenu.name}><Link to={subMenu.path}>{subMenu.name}</Link></li>
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
                        {/*<div className="main-nav__right">*/}
                        {/*    <Link to="/contact" className="thm-btn">Free Trial <i className="fa fa-angle-right"/></Link>*/}
                        {/*</div>*/}
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;
