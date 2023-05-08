import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>

        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password:</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="confirm password"
              />
            </div>

            <div className="form-group">
              <div className="file-image">
                <div className="image"></div>
                <div className="file">
                  <label htmlFor="image">select image</label>
                  <input type="file" className="form-control" id="image" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <input type="submit" value="register" className="btn" />
            </div>

            <div className="form-group">
              <span>
                <Link to="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
