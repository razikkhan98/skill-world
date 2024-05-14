import React, { useState } from "react";
import $ from "jquery";

const Footer = () => {
  const [theme, setTheme] = useState("bg-theme bg-theme1");

  function toggleSidebar(e) {
    e.preventDefault();
    const sidebar = document.querySelector(".right-sidebar");
    sidebar.classList.toggle("right-toggled");
  }

  function setTheme1() {
    setTheme((document.body.className = "bg-theme bg-theme1"));
  }

  function setTheme2() {
    setTheme((document.body.className = "bg-theme bg-theme2"));
  }

  function setTheme3() {
    setTheme((document.body.className = "bg-theme bg-theme3"));
  }
  function setTheme4() {
    setTheme((document.body.className = "bg-theme bg-theme4"));
  }
  function setTheme5() {
    setTheme((document.body.className = "bg-theme bg-theme5"));
  }
  function setTheme6() {
    setTheme((document.body.className = "bg-theme bg-theme6"));
  }
  function setTheme7() {
    setTheme((document.body.className = "bg-theme bg-theme7"));
  }
  function setTheme8() {
    setTheme((document.body.className = "bg-theme bg-theme8"));
  }
  function setTheme9() {
    setTheme((document.body.className = "bg-theme bg-theme9"));
  }
  function setTheme10() {
    setTheme((document.body.className = "bg-theme bg-theme10"));
  }
  function setTheme11() {
    setTheme((document.body.className = "bg-theme bg-theme11"));
  }
  function setTheme12() {
    setTheme((document.body.className = "bg-theme bg-theme12"));
  }
  function setTheme13() {
    setTheme((document.body.className = "bg-theme bg-theme13"));
  }
  function setTheme14() {
    setTheme((document.body.className = "bg-theme bg-theme14"));
  }
  function setTheme15() {
    setTheme((document.body.className = "bg-theme bg-theme15"));
  }

  return (
    <>
      {/* <!--Start footer--> */}
      <footer className="footer">
        <div className="container">
          <div className="text-center">Copyright © 2018 Dashtreme Admin</div>
        </div>
      </footer>
      {/* <!--End footer--> */}

      {/* <!--start color switcher--> */}
      <div className="right-sidebar" onClick={toggleSidebar}>
        <div className="switcher-icon">
          <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
        </div>
        <div className="right-sidebar-content">
          <p className="mb-0" style={{ color: "white" }}>
            Gaussion Texture
          </p>
          <hr />

          <ul className="switcher">
            <li id="theme1" className="bg-theme1" onClick={setTheme1}></li>
            <li id="theme2" className="bg-theme2" onClick={setTheme2}></li>
            <li id="theme3" className="bg-theme3" onClick={setTheme3}></li>
            <li id="theme4" className="bg-theme4" onClick={setTheme4}></li>
            <li id="theme5" className="bg-theme5" onClick={setTheme5}></li>
            <li id="theme6" className="bg-theme6" onClick={setTheme6}></li>
          </ul>

          <p className="mb-0" style={{ color: "white" }}>
            Gradient Background
          </p>
          <hr />

          <ul className="switcher">
            <li id="theme7" className="bg-theme7" onClick={setTheme7}></li>
            <li id="theme8" className="bg-theme8" onClick={setTheme8}></li>
            <li id="theme9" className="bg-theme9" onClick={setTheme9}></li>
            <li id="theme10" className="bg-theme10" onClick={setTheme10}></li>
            <li id="theme11" className="bg-theme11" onClick={setTheme11}></li>
            <li id="theme12" className="bg-theme12" onClick={setTheme12}></li>
            <li id="theme13" className="bg-theme13" onClick={setTheme13}></li>
            <li id="theme14" className="bg-theme14" onClick={setTheme14}></li>
            <li id="theme15" className="bg-theme15" onClick={setTheme15}></li>
          </ul>
        </div>
      </div>
      {/* <style>
        {`body {
          ${theme};
        }`}
      </style> */}
      {/* <!--end color switcher--> */}
    </>
  );
};
export default Footer;
