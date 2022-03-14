import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navigation-top clearfix">
          <div className="navigation-top-left">
            <a
              className="box"
              href="https://www.facebook.com/noorpalacehotelkalam/"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a className="box" href="/#">
              <i className="fa fa-instagram"></i>
            </a>
            <a
              className="box"
              href="https://www.instagram.com/noorpalacekalam/"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </div>
          <div className="navigation-top-right">
            <a className="box" href="/#">
              <i className="icon icon-star"></i>
              Special offers
            </a>
            <a className="box" href="tel:+923005952155">
              <i className="icon icon-phone-handset"></i>
              (+92) 300 5952155
            </a>
          </div>
        </nav>
        <nav className="navigation-main clearfix">
          <div className="logo animated fadeIn">
            <a href="index.html">
              <img
                className="logo-desktop"
                src="assets/images/logo.png"
                alt="Alternate Text"
              />
              <img
                className="logo-mobile"
                src="assets/images/logo-mobile.png"
                alt="Alternate Text"
              />
            </a>
          </div>
          <div className="toggle-menu">
            <i className="icon icon-menu"></i>
          </div>
          <div className="navigation-block clearfix">
            <ul className="navigation-left">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/booking">Booking</Link>
              </li>
            </ul>
            <ul className="navigation-right">
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
