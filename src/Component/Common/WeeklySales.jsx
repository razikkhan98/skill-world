import React from "react";
import PieChart from "../Common/PieChart";

const WeeklySales = () => {
  return (
    <>
      <div className="col-12 col-lg-5 col-xl-4">
        <div className="card">
          <div className="card-header">Weekly sales</div>
          <div className="card-body">
            <div className="chart-container-2" style={{ height: "260px" }}>
              {/* <canvas id="chart2"></canvas> */}
              <PieChart />
            </div>
          </div>
          <div className="table-responsive">
            <table className="table align-items-center table-dashbord table-flush table-borderless text-white ">
              <tbody className="border-top-3 ">
                <tr className="border-shader">
                  <td>
                    <i className="fa fa-circle text-white mr-2"></i>
                    Direct
                  </td>
                  <td>$5856</td>
                  <td>+55%</td>
                </tr>
                <tr className="border-top-3">
                  <td>
                    <i className="fa fa-circle text-light-1 mr-2"></i>
                    Affiliate
                  </td>
                  <td>$2602</td>
                  <td>+25%</td>
                </tr>
                <tr className="border-top-3">
                  <td>
                    <i className="fa fa-circle text-light-2 mr-2"></i>
                    E-mail
                  </td>
                  <td>$1802</td>
                  <td>+15%</td>
                </tr>
                <tr className="border-top-3">
                  <td>
                    <i className="fa fa-circle text-light-3 mr-2"></i>
                    Other
                  </td>
                  <td>$1105</td>
                  <td>+5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default WeeklySales;
