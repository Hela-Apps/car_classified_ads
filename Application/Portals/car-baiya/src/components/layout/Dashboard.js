import React, { Component } from "react";
import "./Layout.css";

export default class Dashboard extends Component {
  state = {
    companies: [],
    categories: [],
    conditions: [],
    districts: [],
  };
  componentDidMount() {
    this.loadCompanies();
    this.loadTypes();
    this.loadConditions();
    this.loadDistricts();
  }
  loadCompanies() {
    fetch("https://localhost:44399/api/Common/GetAllCompanies")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let companiesFromApi = data.map((company) => {
          return { value: company.id, display: company.name };
        });
        this.setState({
          companies: [{ value: "0", display: "Any Make" }].concat(
            companiesFromApi
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadTypes() {
    fetch("https://localhost:44399/api/Common/GetAllCategories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let categoriesFromApi = data.map((category) => {
          return { value: category.id, display: category.name };
        });
        this.setState({
          categories: [{ value: "0", display: "Any Type" }].concat(
            categoriesFromApi
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  loadConditions() {
    fetch("https://localhost:44399/api/Common/GetAllConditions")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let conditionsFromApi = data.map((condition) => {
          return { value: condition.id, display: condition.name };
        });
        this.setState({
          conditions: [{ value: "0", display: "Any Condition" }].concat(
            conditionsFromApi
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  loadDistricts() {
    fetch("https://localhost:44399/api/Common/GetAllDistricts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let districtsFromApi = data.map((district) => {
          return { value: district.id, display: district.name };
        });
        this.setState({
          districts: [{ value: "0", display: "Any District" }].concat(
            districtsFromApi
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div className="content">
          <div className="hero-homepage">
            <div className="container wrapping-content">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="tagline">
                    <h1>Find Vehicle Ads Near You</h1>
                    <h2>Over 1 million+ Ads posted by our users.</h2>
                  </div>
                  <div className="search_form">
                    <form>
                      <div className="row">
                        <div className="form-group col-lg-4 col-sm-12">
                          <select className="form-control">
                            {this.state.companies.map((company) => (
                              <option key={company.value} value={company.value}>
                                {company.display}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group col-lg-4 col-sm-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Vehicle Model? Ex: Corolla"
                          />
                        </div>

                        <div className="form-group col-lg-4 col-sm-12">
                          <select className="form-control">
                            {this.state.categories.map((category) => (
                              <option
                                key={category.value}
                                value={category.value}
                              >
                                {category.display}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-lg-4 col-sm-12">
                          <select className="form-control">
                            {this.state.conditions.map((condition) => (
                              <option
                                key={condition.value}
                                value={condition.value}
                              >
                                {condition.display}
                              </option>
                            ))}
                          </select>
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
                          <select className="form-control">
                            {this.state.districts.map((district) => (
                              <option
                                key={district.value}
                                value={district.value}
                              >
                                {district.display}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="form-group col-lg-4 col-sm-12">
                        <button className="custom-button search-button">
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
