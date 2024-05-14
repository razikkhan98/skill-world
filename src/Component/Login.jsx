import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/timeline/logo1.jpg";

const Login = ({ setLoginUser }) => {
  // const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value)
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:9004/login", user);
    console.log(data.data.status);
    if (data.data.status === 1) {
      toast.success(data.data.message);
      navigate("/home");
    } else if (data.data.status === 2) {
      toast.error(data.data.message);
    } else {
      toast.error(data.data.message);
    }
  };
  return (
    <>
      <section className="h-100 gradient-form background-color">
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6 background-color-box">
                    <div className="card-body mx-md-4">
                      <div className="text-center">
                        <img src={Logo} alt="logo" className="img-log" />
                        <h4 className="mt-1 mb-5 pb-1 text-color">
                          We are The Lotus Team
                        </h4>
                      </div>

                      <form onSubmit={login}>
                        <p className="text-color">
                          Please login to your account
                        </p>
                        <label
                          className="form-label text-color"
                          for="form2Example11"
                        >
                          Email :-
                        </label>
                        <div className="form-outline inputboder mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            onChange={handleChange}
                            name="email"
                            value={user.email}
                          />
                        </div>
                        <label
                          className="form-label text-color"
                          for="form2Example22"
                        >
                          Password :-
                        </label>
                        <div className="form-outline inputboder mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control input"
                            onChange={handleChange}
                            name="password"
                            value={user.password}
                          />
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 fontfamily"
                            type="submit"
                          >
                            Log in
                          </button>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2 text-color">
                            Don't have an account?
                          </p>
                          <button
                            type="button"
                            className="btn  fontfamily ml-4"
                          >
                            <Link
                              to="/register"
                              style={{
                                color: "#d8363a",
                                textDecoration: "none",
                              }}
                            >
                              Create new
                            </Link>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
