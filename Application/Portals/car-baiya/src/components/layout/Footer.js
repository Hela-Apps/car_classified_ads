import React, { Component } from 'react'
import './Layout.css';
import './main1.css';

export default class Footer extends Component {
    render() {
        return (
           <div>                
  <div className="newsletter">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-12">
          <h2>Newsletter</h2>
        </div>
        <div className="col-lg-4 col-md-12">
          <p>Sign up to receive email updates on new recipes.</p>
        </div>
        <div className="col-lg-5 col-md-12">
          <form>
            <div className="col-sm-12">
              <div className="row zeromargin zeromargin_form_group">
                <div className="form-group col-lg-8 col-sm-12">
                  <input type="email" className="form-control" placeholder="Your email address here..." />
                </div>
                <div className="form-group col-lg-4 col-sm-12">
                  <button type="submit" className="whitehover custom-button">Subscribe</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="background-header footer_padding">
    <div className="container">
      <div className="navigation_footer">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="about-us-info">
              <p>
                <img src="img/logo_200x200.png" className="max-width-100px" alt="logo" />
              </p>
              <p><i className="fa fa-phone" /> 123-456-987</p>
              <p><i className="fa fa-map-marker" /> 123 Street Infront of Macdonald, <br />
                Kingsman, United States</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Popular Categories</h3>
            <ul>
              <li><a href="category.html">Properties</a></li>
              <li><a href="category.html">Jobs</a></li>
              <li><a href="category.html">Phones</a></li>
              <li><a href="category.html">Cars</a></li>
              <li><a href="category.html">Rent</a></li>
              <li><a href="category.html">Electronics</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Location</h3>
            <ul>
              <li><a href="www.google.com">London</a></li>
              <li><a href="www.google.com">Barcelona</a></li>
              <li><a href="www.google.com">New York</a></li>
              <li><a href="www.google.com">France</a></li>
              <li><a href="www.google.com">Lahore</a></li>
              <li><a href="www.google.com">Mumbai</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Important Links</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="aboutus.html">About</a></li>
              <li><a href="contactus.html">Contact Us</a></li>
              <li><a href="www.google.com">Login</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="faq.html">Faqs</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 zeropadd">
                <p>2019 Maida Themes. copyright @ 2016 - 2019 Powered By <i className="fa fa-heart" />
                  <a href="www.google.com" className="greens">Maida</a>
                </p>
              </div>
              <div className="col-md-6 zeropaddon768">
                <ul className="pages-links zeropadd">
                  <li><a href="www.google.com">Terms &amp; Condition</a></li>
                  <li><a href="dashboard.html">Dashboard</a></li>
                  <li><a href="www.google.com">Privacy Policy </a></li>
                  <li><a href="www.google.com">About Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}
