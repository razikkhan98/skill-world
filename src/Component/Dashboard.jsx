import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./Common/Header";
import Navbar from "./Common/Navbar";
// import SiteTraffic from "./Common/SiteTraffic";
// import WeeklySales from "./Common/WeeklySales";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://flask.faizaanali4.repl.co/trade_orders", {
      method: "GET",
      headers: { "content-type": "application/json" },
      mode: "no-cors",
      body: JSON.stringify(),
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <div className="clearfix"></div>
      <div className="content-wrapper">
        <div className="container-fluid">
          {/* <!--Start Dashboard Content--> */}
          <div className="card mt-3">
            <div className="card-content ">
              <div className="row row-group m-0">
                <div className="col-12 col-lg-6 col-xl-3 ">
                  <div className="card-body">
                    <h5 className="text-white mb-0">
                      <span>{data?.total_orders}</span>
                      <span className="float-right">
                        <i className="fa fa-shopping-cart"></i>
                      </span>
                    </h5>
                    <div className="progress my-3" style={{ height: "3px" }}>
                      <div
                        className="progress-bar"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    <p className="mb-0  small-font boxColor">
                      Total Orders
                      <span className="float-right hight-tred">
                        +4.2% <i className="zmdi zmdi-long-arrow-up"></i>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-3 ">
                  <div className="card-body">
                    <h5 className="text-white mb-0">
                      <span>{data?.total_revenue}</span>
                      <span className="float-right">
                        <i className="fa fa-usd"></i>
                      </span>
                    </h5>
                    <div className="progress my-3" style={{ height: "3px" }}>
                      <div
                        className="progress-bar"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    <p className="mb-0  small-font boxColor">
                      Total Revenue
                      <span className="float-right hight-tred">
                        +1.2% <i className="zmdi zmdi-long-arrow-up"></i>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-3 ">
                  <div className="card-body">
                    <h5 className="text-white mb-0">
                      <span>{data?.total_msg}</span>
                      <span className="float-right">
                        <i className="fa fa-eye"></i>
                      </span>
                    </h5>
                    <div className="progress my-3" style={{ height: "3px" }}>
                      <div
                        className="progress-bar"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    <p className="mb-0  small-font boxColor">
                      Visitors
                      <span className="float-right hight-tred">
                        +5.2% <i className="zmdi zmdi-long-arrow-up"></i>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-3 ">
                  <div className="card-body">
                    <h5 className="text-white mb-0">
                      <span>{data?.total_users}</span>
                      <span className="float-right">
                        <i className="fa fa-envira"></i>
                      </span>
                    </h5>
                    <div className="progress my-3" style={{ height: "3px" }}>
                      <div
                        className="progress-bar"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    <p className="mb-0 small-font boxColor">
                      Messages
                      <span className="float-right hight-tred">
                        +2.2% <i className="zmdi zmdi-long-arrow-up"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            {/*  Site Traffic Start */}
            {/* <SiteTraffic /> */}
            {/* Site Traffic End */}
            {/* Weekly sales Start */}
            {/* <WeeklySales /> */}
            {/* Weekly sales End */}
          </div>

          {/* Recent Order Tables  */}

          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="card">
                <div className="card-header ">
                  Recent Order Tables
                  <div className="card-action"></div>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table-flush table-borderless table-dashbord text-white ">
                    <thead>
                      <tr className="border-top-3">
                        <th>User</th>
                        <th>userId</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>P/L percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-top-3">
                        <td>Shakil</td>
                        <td>ITID11</td>
                        <td>100000</td>
                        <td>14/05/2023</td>
                        <td>9%</td>
                      </tr>

                      <tr className="border-top-3">
                        <td>Shadab</td>

                        <td>ITID12</td>
                        <td>70000</td>
                        <td>13/04/2023</td>
                        <td>8%</td>
                      </tr>

                      <tr className="border-top-3">
                        <td>Mehboob Chipa</td>

                        <td>ITID14</td>
                        <td>300000</td>
                        <td>2/11/2022</td>
                        <td>40%</td>
                      </tr>

                      <tr className="border-top-3">
                        <td>Mohit Porwal</td>

                        <td>ITID19</td>
                        <td>45000</td>
                        <td>13/01/2023</td>
                        <td>11%</td>
                      </tr>

                      <tr className="border-top-3">
                        <td>AKshay Patil</td>

                        <td>ITID20</td>
                        <td>200000</td>
                        <td>23/02/2023</td>
                        <td>9%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Order Tables */}
          {/* <!--End Dashboard Content--> */}
        </div>
      </div>

      {/* <!--Start Back To Top Button--> */}
      <a href="javaScript:void();" className="back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
      {/* <!--End Back To Top Button--> */}
    </>
  );
};
export default Dashboard;
