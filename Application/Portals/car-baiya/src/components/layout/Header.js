import React, { Component } from 'react'
import './Layout.css';

export default class Header extends Component {
    render() {
        return (
            <div>

<div className="spinner-wrapper">
    <div className="centercenter">
      <div className="spinner-grow2 logocolor" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
<header className="background-header">
  <div className="topbar">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="icon-top text-center text-sm-center text-md-left text-lg-left text-xl-left">
                <div className="icons">
                  <a href="#"> <i className="fa fa-facebook" /> </a>
                </div>
                <div className="icons">
                  <a href="#"> <i className="fa fa-twitter" /> </a>
                </div>
                <div className="icons">
                  <a href="#"> <i className="fa fa-youtube-play" /></a>
                </div>
                <div className="icons">
                  <a href="#"> <i className=" fa fa-pinterest" /></a>
                </div>
                <div className="icons">
                  <a href="#"> <i className=" fa fa-instagram" /></a>
                </div>
                <div className="icons">
                  <a href="#"> <i className=" fa fa-whatsapp" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="text-center text-sm-center text-md-right text-lg-right text-xl-right">
                <div className="toplocation text-white">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <span className="locaitonfont">Location</span>
                  <select id="openonarrow">
                    <option>United States of America</option>
                    <option>United Arab Emirates</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>Japan</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Oman</option>
                  </select>
                  <span className="arrowdonwing">
                    <i className="fa fa-angle-down" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="navigation">
      <nav className="navbar navbar-expand-lg   justify-content-between nav-color zeropadd">
        <div className="navbar-header ">
          <a className="navbar-brand zeropadd" href="index.html">
            <img src="img/logo_200x200.png" alt="logo" className="max-width-60px" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="category.html">Advance Search</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Categories <i className="fa fa-angle-down" /></a>
              <ul className="dropdown-menu border-0 shadow">
                <li><a href="category.html" className="dropdown-item">Jobs </a></li>
                <li><a href="category.html" className="dropdown-item">Properties</a></li>
                {/* Level two dropdown*/}
                <li className="dropdown-submenu">
                  <a href="category.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Phones</a>
                  <ul className="dropdown-menu border-0 shadow">
                    <li>
                      <a tabIndex={-1} href="category.html" className="dropdown-item">Apple</a>
                    </li>
                    <li><a href="category.html" className="dropdown-item">Samsung</a></li>
                    <li><a href="category.html" className="dropdown-item">LG</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="category.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Cars</a>
                  <ul className="dropdown-menu border-0 shadow">
                    <li>
                      <a tabIndex={-1} href="category.html" className="dropdown-item">Toyota</a>
                    </li>
                    <li><a href="category.html" className="dropdown-item">Suzuki</a></li>
                    <li><a href="category.html" className="dropdown-item">Honda</a></li>
                  </ul>
                </li>
                <li><a href="category.html" className="dropdown-item">Rent</a></li>
                <li><a href="category.html" className="dropdown-item">Serviecs</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Pages <i className="fa fa-angle-down" /></a>
              <ul className="dropdown-menu border-0 shadow">
                <li><a href="aboutus.html" className="dropdown-item">About</a></li>
                <li><a href="blog.html" className="dropdown-item">Blog</a></li>
                <li><a href="contactus.html" className="dropdown-item">Contact Us</a></li>
                <li><a href="faq.html" className="dropdown-item">Faq</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contactus.html">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="loginRegister.html"><i className="fa fa-user" aria-hidden="true" />Login / Register</a>
            </li>
            <li className="nav-item  bordering">
              <a className="nav-link" href="postad.html">Post Free Ad</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</header>

            </div>
        )
    }
}
