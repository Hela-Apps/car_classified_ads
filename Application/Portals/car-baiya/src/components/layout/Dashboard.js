import React, { Component } from 'react'
import './Layout.css';

export default class Dashboard extends Component {
    render() {
        return (
           <div>
  <div className="content">
    <div className="hero-homepage">
      <div className="container wrapping-content">
        <div className="row">
          <div className="col-12 text-center">
            <div className="tagline">
              <h1>Find Local Ads Near You</h1>
              <h2>Over 1 million+ Ads posted by our users.</h2>
            </div>
            <div className="search_form">
              <form>
                <div className="row">
                <div className="form-group col-lg-4 col-sm-12">
                  <input type="text" className="form-control" placeholder="What are you looking for?" />
                </div>
                <div className="form-group col-lg-4 col-sm-12">
                  <select className="form-control">
                    <option>All Categories</option>
                    <option>Cars</option>
                    <option>Properties</option>
                    <option>Jobs</option>
                    <option>Animals</option>
                    <option>Phone</option>
                  </select>
                </div>
                <div className="form-group col-lg-4 col-sm-12">
                  <input type="text" className="form-control" placeholder="What are you looking for?" />
                </div>
                </div>

                <div className="row">
                <div className="form-group col-lg-4 col-sm-12">
                  <input type="text" className="form-control" placeholder="What are you looking for?" />
                </div>
                <div className="form-group col-lg-4 col-sm-12">
                  <select className="form-control">
                    <option>All Categories</option>
                    <option>Cars</option>
                    <option>Properties</option>
                    <option>Jobs</option>
                    <option>Animals</option>
                    <option>Phone</option>
                  </select>
                </div>
                <div className="form-group col-lg-4 col-sm-12">
                  <input type="text" className="form-control" placeholder="What are you looking for?" />
                </div>
                </div>

                <div className="form-group col-lg-4 col-sm-12">
                  <button type="submit" className="custom-button search-button">Search</button>
                </div>
              </form>
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
