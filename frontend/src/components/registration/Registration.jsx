import React from "react";
import { NavLink } from "react-router-dom";

const Register = ({ handleSubmit, onChangeHandler, username, password }) => {
  return (
    <div>
      <div className="wrapper-page">
        <div className="card overflow-hidden account-card mx-3">
          <div className="bg-primary p-4 text-white text-center position-relative">
            <h4 className="font-20 m-b-5">Register</h4>
            <p className="text-white-50 mb-4">Get your account now.</p>
          </div>
          <div className="account-card-content">
            <form className="form-horizontal m-t-30">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  name="username"
                  value={username}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userpassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="userpassword"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group row m-t-20">
                <div className="col-12 text-right">
                  <button
                    className="btn btn-primary w-md waves-effect waves-light"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="m-t-40 text-center">
          <p>
            Already have an account ?
            <NavLink to="/" className="font-500 text-primary">
              Login
            </NavLink>
          </p>
          <p>
            © 2020 | Crafted with <i className="mdi mdi-heart text-danger"></i>{" "}
            by Oyee James
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
