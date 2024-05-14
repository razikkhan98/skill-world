import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/images/timeline/logo1.jpg";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      const data = await axios.post("http://localhost:9004/register", user);

      if (data.data.status === 2) {
        toast.warn(data.data.massege);
      } else if (data.status === 200) {
        toast.success(data.data.massege);
        navigate("/");
      }
    } else {
      toast.error("Please Fill the required");
    }
  };
  return (
    <>
      <section className="h-100 gradient-form background-color">
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0 background-color">
                  <div className="col-lg-6 background-color-box">
                    <div className="card-body mx-md-4">
                      <div className="text-center">
                        <img src={Logo} alt="logo" className="img-log" />
                        <h4 className="mt-1 mb-5 pb-1 text-color">
                          We are The Lotus Team
                        </h4>
                      </div>

                      <form onSubmit={handleRegister}>
                        <p className="text-color">
                          Please Register to your account
                        </p>
                        <label
                          className="form-label text-color"
                          for="form2Example11"
                        >
                          Full Name :-
                        </label>
                        <div className="form-outline inputboder mb-4">
                          <input
                            className="form-control"
                            type="text"
                            value={user.name}
                            name="name"
                            onChange={handleChange}
                          />
                        </div>
                        <label
                          className="form-label text-color"
                          for="form2Example22"
                        >
                          Email ID :-
                        </label>
                        <div className="form-outline inputboder mb-4">
                          <input
                            className="form-control"
                            type="email"
                            value={user.email}
                            name="email"
                            onChange={handleChange}
                          />
                        </div>
                        <label
                          className="form-label text-color"
                          for="form2Example22"
                        >
                          Password:-
                        </label>
                        <div className="form-outline inputboder mb-4">
                          <input
                            className="form-control"
                            type="password"
                            value={user.password}
                            onChange={handleChange}
                            name="password"
                          />
                        </div>
                        <label
                          className="form-label text-color"
                          for="form2Example22"
                        >
                          Confirm Password :-
                        </label>
                        <div className="form-outline inputboder mb-4">
                          <input
                            className="form-control"
                            type="password"
                            value={user.reEnterPassword}
                            name="reEnterPassword"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 fontfamily gradient-custom-2"
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
                              to="/"
                              style={{
                                color: "#d8363a",
                                textDecoration: "none",
                              }}
                            >
                              Login
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
export default Register;
