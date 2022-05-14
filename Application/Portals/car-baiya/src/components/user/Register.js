import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div>
                <div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade" id="pills-signin" role="tabpanel" aria-labelledby="pills-signin-tab">
    <div className="col-sm-12">
      <form method="post" id="singninFrom">
        <div className="form-group">
          <label className="font-weight-bold">Email <span className="text-danger">*</span></label>
          <input type="email" id="email" className="form-control" placeholder="Enter valid email" required />
        </div>
        <div className="form-group">
          <label className="font-weight-bold">Password <span className="text-danger">*</span></label>
          <input type="password" name="password" id="password" className="form-control" placeholder="***********" required />
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <label><input type="checkbox" name="condition" id="condition" /> Remember me.</label>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-left text-sm-right text-lg-right text-md-right text-xl-right">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
        <div className="form-group">
          <input type="submit" name="submit" defaultValue="Sign In" className="custom-button" />
        </div>
      </form>
    </div>
  </div>
  <div className="tab-pane fade active show" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
    <div className="col-sm-12 ">
      <form method="post" id="singnupFrom">
        <div className="form-group">
          <label className="font-weight-bold">Email <span className="text-danger">*</span></label>
          <input type="email" id="signupemail" className="form-control" placeholder="Enter valid email" required />
        </div>
        <div className="form-group">
          <label className="font-weight-bold">User Name <span className="text-danger">*</span></label>
          <input type="text" id="signupusername" className="form-control" placeholder="Choose your user name" required />
          <div className="text-danger"><em>This will be your login name!</em></div>
        </div>
        <div className="form-group">
          <label className="font-weight-bold">Phone #</label>
          <input type="text" id="signupphone" className="form-control" placeholder="(000)-(0000000)" />
        </div>
        <div className="form-group">
          <label className="font-weight-bold">Password <span className="text-danger">*</span></label>
          <input type="password" id="signuppassword" className="form-control" placeholder="***********" pattern="^\S{6,}$" onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Must have at least 6 characters' : ''); if(this.checkValidity()) form.password_two.pattern = this.value;" required />
        </div>
        <div className="form-group">
          <label className="font-weight-bold">Confirm Password <span className="text-danger">*</span></label>
          <input type="password" name="signupcpassword" id="signupcpassword" className="form-control" pattern="^\S{6,}$" onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Please enter the same Password as above' : '');" placeholder="***********" required />
        </div>
        <div className="form-group">
          <label><input type="checkbox" name="signupcondition" id="signupcondition" required /> I agree with
            the <a href="javascript:;">Terms &amp; Conditions</a> for Registration.</label>
        </div>
        <div className="form-group">
          <input type="submit" name="signupsubmit" defaultValue="Sign Up" className="custom-button" />
        </div>
      </form>
    </div>
  </div>
</div>

            </div>
        )
    }
}
