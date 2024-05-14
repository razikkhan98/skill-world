import React, { useState } from "react";
import Header from "./Common/Header";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import { useForm } from "react-hook-form";

// Icons
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";

// Images
import image1 from "../../src/assets/images/student-img/images.jpeg";

const Tables = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const data = [
    {
      id: 1,
      name: "Juned Abbasi",
      email: "juned@gmail.com",
      studentNumber: "889995555",
      gender: "male",
      educationTarget: "BSC (CS)",
      previousEducation: "I.T.I",
      address: "Azad Nagar",
      message: "a to z",
      status: "active", // or any other status you want to display
    },
    {
      id: 2,
      name: "Juned",
      email: "juned@gmail.com",
      gender: "male",
      studentNumber: "889995555",
      educationTarget: "BSC (CS)",
      previousEducation: "I.T.I",
      address: "Azad Nagar",
      message: "a to z",
      status: "active", // or any other status you want to display
    },
    {
      id: 3,
      name: "Juned Abbasi",
      email: "juned@gmail.com",
      studentNumber: "889995555",
      gender: "male",
      educationTarget: "BSC (CS)",
      previousEducation: "I.T.I",
      address: "Azad Nagar colony",
      message: "a to z",
      status: "active", // or any other status you want to display
    },
    // Add more data objects for additional rows if needed
  ];

  const [viewData, setViewData] = useState(null);
  // console.log(viewData.name,12222)

  const handleViewClick = (row) => {
    console.log(row, 122333333);
    setViewData(row);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // const handleEditClick = (row) => {
  //   console.log(row);
  //   setViewData(row);
  // };
  // const handleDeleteClick = (row) => {
  //   console.log(row);
  //   setViewData(row);
  // };

  return (
    <>
      <div className="content-wrapper">
        <div className="container-flu">
          <Header />
          <Navbar />
          {/* Table Start */}
          <section id="table">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="table-title">
                    <h3>Student Details</h3>
                  </div>

                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Student Number</th>
                        <th scope="col">Education Target</th>
                        <th scope="col">Previous Education</th>
                        {/* <th scope="col">Address</th> */}
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Map over the data array to generate table rows */}
                      {data.map((row, index) => (
                        <tr key={index} className="cellspace text-center">
                          <th scope="row">{row.id}</th>
                          <td>{row.name}</td>
                          <td>{row.email}</td>
                          <td>{row.studentNumber}</td>
                          <td>{row.educationTarget}</td>
                          <td>{row.previousEducation}</td>
                          {/* <td>{row.address}</td> */}
                          <td className="d-flex justify-content-center">
                            <button
                              className="btn text-info"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              onClick={() => handleViewClick(row)}
                            >
                              View
                            </button>
                            <button
                              className="btn text-success"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrops"
                              onClick={() => handleViewClick(row)}
                            >
                              Edit
                            </button>
                            <button className="btn text-danger"  onClick={() => handleViewClick(row)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
      {/* Table End */}

      {/* <!-- Edit Modal --> */}
      <div
        class="modal fade"
        id="staticBackdrops"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabels"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title text-dark fw-bold"
                id="staticBackdropLabels"
              >
                Student form
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body ">
              <div class="d-flex justify-content-center">
                <img class="rounded-circle mb-4" src={image1} alt="Loading" />
              </div>
              {/* <div className="row mt-3"> */}
              {/* <div className="col-lg-12 col-lg-6"> */}
              <div className="card ">
                <div className="card-body">
                  {viewData == null ? null : (
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
                              defaultValue={viewData.name}
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
                              defaultValue={viewData.studentNumber}
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
                              defaultValue={viewData.email}
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
                              defaultValue={viewData.gender}
                            >
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
                              defaultValue={viewData.previousEducation}
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
                              defaultValue={viewData.educationTarget}
                              {...register("educationTarget", {
                                required: "Target Education is required",
                              })}
                            />
                            {errors.educationTarget && (
                              <div className="text-danger">
                                {errors.educationTarget.message}
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
                              defaultValue={viewData.address}
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
                              defaultValue={viewData.message}
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
                  )}
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-success">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Edit Modal */}

      {/* <!-- Profile View Modal --> */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-dark fw-bold" id="staticBackdrop">
                Student Profile
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body m-auto">
              <img class="rounded-circle" src={image1} alt="Loading" />
            </div>
            <div class="modal-body text-dark">
              <div class="row">
                {viewData == null ? null : (
                  <>
                    {" "}
                    <div class="profile-content col-lg-6">
                      <h5 class="text-dark">Name</h5>
                      <p class="p-2">{viewData.name}</p>
                      <h5 class="text-dark">Email</h5>
                      <p class="p-2">{viewData.email}</p>
                      <h5 class="text-dark">Gender</h5>
                      <p class="p-2">{viewData.gender}</p>
                      <h5 class="text-dark">Student Number</h5>
                      <p class="p-2">{viewData.studentNumber}</p>
                    </div>
                    <div class="profile-content col-lg-6">
                      <h5 class="text-dark">Address</h5>
                      <p class="p-2">{viewData.address}</p>
                      <h5 class="text-dark">Education target</h5>
                      <p class="p-2">{viewData.educationTarget}</p>
                      <h5 class="text-dark">Previous Education</h5>
                      <p class="p-2">{viewData.previousEducation}</p>
                      <h5 class="text-dark">Message</h5>
                      <p class="p-2">{viewData.message}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tables;
