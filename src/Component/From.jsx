import React from "react";
import Header from "./Common/Header";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
// import Footer from "./Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const From = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const Api = "https://api.superchicks.online/address";

  const onSubmit = async (data) => {

    try {
      const res = await axios.post(
        "https://api.superchicks.online/order_data",
        data
      );
      const datasets = res.data.msg;
      if (datasets === "Success") {
        toast.success("Order is successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error("Network Error: Please check your internet connection");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="clearfix"></div>
      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">Student Form</div>
                  <form
                    className="border-top-3"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="row mt-3">
                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label for="input-1">Name</label>
                          <input
                            type="text"
                            className="form-control form-control-input"
                            id="input-1"
                            placeholder="Enter Your Full Name"
                            {...register("name", {
                              required: "Name is required",
                            })}
                          />
                          {errors.name && (
                            <div className="text-danger">
                              {errors.name.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label for="input-3">Mobile</label>
                          <input
                            type="number"
                            className="form-control form-control-input"
                            id="input-3"
                            placeholder="Enter Your Mobile Number"
                            {...register("studentNumber", {
                              required: "Mobile is required",
                            })}
                          />
                          {errors.studentNumber && (
                            <div className="text-danger">
                              {errors.studentNumber.message}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label for="input-2">Email</label>
                          <input
                            type="email"
                            className="form-control form-control-input"
                            id="input-2"
                            placeholder="Enter Your Email Address"
                            {...register("email", {
                              required: "Email is required",
                            })}
                          />
                          {errors.email && (
                            <div className="text-danger">
                              {errors.email.message}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-12">
                        <div class="form-group">
                          <label for="input-2">Gender</label>
                          <br />
                          
                          <select
                            {...register("gender")}
                            className="form-control form-control-input"
                          >
                              <option selected>Gender</option>

                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">other</option>
                          </select>
                          {errors.gender && (
                            <div className="text-danger">
                              {errors.gender.message}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label for="input-2">Previous Education</label>
                          <input
                            type="text"
                            className="form-control form-control-input"
                            id="input-2"
                            placeholder="Enter Your Previous Education"
                            {...register("previousEducation", {
                              required: "Previous Education is required",
                            })}
                          />
                          {errors.previousEducation && (
                            <div className="text-danger">
                              {errors.previousEducation.message}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label for="input-2"> Target Education</label>
                          <input
                            type="text"
                            className="form-control form-control-input"
                            id="input-2"
                            placeholder="Enter Your Target Education"
                            {...register("educationTarget", {
                              required: "Target Education is required",
                            })}
                          />
                          {errors.target && (
                            <div className="text-danger">
                              {errors.target.message}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label for="input-2">Address</label>
                          <input
                            type="text"
                            className="form-control form-control-input"
                            id="input-2"
                            placeholder="Enter Your Address"
                            {...register("address", {
                              required: "Address is required",
                            })}
                          />
                          {errors.address && (
                            <div className="text-danger">
                              {errors.address.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label for="input-2">Id</label>
                          <input
                            type="text"
                            className="form-control form-control-input"
                            id="input-2"
                            placeholder="Enter Your Id"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-12">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlTextarea1"
                            class="form-label"
                          >
                            Message
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-light px-5 form-control-input form-control-re"
                      >
                        <i className="icon-lock"></i> Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Row--> */}

          {/* <!--start overlay--> */}
          <div className="overlay toggle-menu"></div>
          {/* <!--end overlay--> */}
        </div>
        {/* <!-- End container-fluid--> */}
      </div>
      {/* <!--End content-wrapper--> */}
      {/* <!--Start Back To Top Button--> */}
      <a href="javaScript:void();" className="back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
      {/* <!--End Back To Top Button--> */}
      <Footer />
    </>
  );
};
export default From;
