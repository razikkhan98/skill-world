import React from "react";
import Canvas from "../Common/Canvas";
const SiteTraffic = () => {
  return (
    <>
      <div className="col-12 col-lg-7 col-xl-8">
        <div className="card">
          <div className="card-header">Site Traffic</div>
          <div className="card-body ">
            <div className="chart-container-1">
              {/* <canvas id="chart1"></canvas> */}

              <Canvas />
            </div>
          </div>

          <div className="row m-0 row-group text-center border-top-3">
            <div className="col-12 col-lg-4">
              <div className="p-3">
                <h5 className="mb-0">45.87M</h5>
                <small className="mb-0 site-traffic-high ">
                  Total Amount
                  <span className="hight-tred">
                    <i className="fa fa-arrow-up"></i> 2.43%
                  </span>
                </small>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="p-3">
                <h5 className="mb-0">15:48</h5>
                <small className="mb-0 site-traffic-high ">
                  Total Year
                  <span className="hight-tred">
                    <i className="fa fa-arrow-up"></i> 12.65%
                  </span>
                </small>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="p-3">
                <h5 className="mb-0">245.65</h5>
                <small className="mb-0 site-traffic-high">
                  Total Month
                  <span className="hight-tred">
                    <i className="fa fa-arrow-up"></i> 5.62%
                  </span>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SiteTraffic;
