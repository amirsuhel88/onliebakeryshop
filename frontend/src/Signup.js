import React from 'react'
import loginImage from "./resources/images/login.png";
import "./styles/style.css";
import {Link} from 'react-router-dom'
function Signup(){
    return(
        <div className="container-fluid">
      <div className="row">
        <div
          className="col-7"
          style={{ backgroundImage: `url(${loginImage})`, height: "100vh" }}
        >
          {/* this part is left side of the division */}
        </div>
        <div
          className="col-5 d-flex align-items-center justify-content-center "
          style={{ height: "100vh" }}
        >
          {/* this part is right side of the division. All the login form will stay here */}

          <form action="">
            <h2>Sign Up</h2>
            <p className="opacity-75">Create Your account</p>

            {/* Email input */}
            <div className="mb-3 ">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
              ></input>
            </div>
            <div className="mb-3 ">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              ></input>
            </div>
            <div className="mb-3 ">
              <input
                type="text"
                className="form-control"
                placeholder="phone"
              ></input>
            </div>

            {/* password field */}
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>

            {/* terms and policies */}
            <p className="opacity-75">You are agree to our terms and policies</p>

            {/* login button */}
            <div class="d-grid gap-2">
              <button class="login-button" type="button">
                Sign Up
              </button>
                <p>
                   Already have an account? 
                    <a class="Link" href="/"> Login</a>
                </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}
export default Signup