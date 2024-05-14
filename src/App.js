import React, { useEffect } from 'react';
import './App.css';
import './assets/css/animate.css'
import './assets/css/app-style.css'
// import './assets/css/bootstrap.css'
// import './assets/css/bootstrap.min.css'
import './assets/css/icons.css'
import './assets/css/pace.min.css'
import './assets/css/sidebar-menu.css'
import Home from './Component/Home';
import From from './Component/From'
import $ from "jquery";
import { Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import { ToastContainer } from 'react-toastify';
import Calendar from './Component/Calendar';
import Tables from './Component/Tables';


function App() {
  useEffect(() => {

    // === toggle-menu js
    $(".toggle-menu").on("click", function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    /* Top Header */
    $(document).ready(function () {
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 60) {
          $('.topbar-nav .navbar').addClass('bg-dark');
        } else {
          $('.topbar-nav .navbar').removeClass('bg-dark');
        }
      });

    });
    /* Back To Top */


    $(document).ready(function () {
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 300) {
          $('.back-to-top').fadeIn();
        } else {
          $('.back-to-top').fadeOut();
        }
      });
      $('.back-to-top').on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
      });
    });

    //sidebar menu js
    // $.sidebarMenu($('.sidebar-menu'));

    // === sidebar menu activation js

    $(function () {
      for (var i = window.location, o = $(".sidebar-menu a").filter(function () {
        return this.href === i;
      }).addClass("active").parent().addClass("active"); ;) {
        if (!o.is("li")) break;
        o = o.parent().addClass("in").parent().addClass("active");
      }
    });


    $.sidebarMenu = function (menu) {
      var animationSpeed = 300,
        subMenuSelector = '.sidebar-submenu';
      $(menu).on('click', 'li a', function (e) {
        var $this = $(this);
        var checkElement = $this.next();
        if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
          checkElement.slideUp(animationSpeed, function () {
            checkElement.removeClass('menu-open');
          });
          checkElement.parent("li").removeClass("active");
        }
        //If the menu is not visible
        else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
          //Get the parent menu
          var parent = $this.parents('ul').first();
          //Close all open menus within the parent
          var ul = parent.find('ul:visible').slideUp(animationSpeed);
          //Remove the menu-open class from the parent
          ul.removeClass('menu-open');
          //Get the parent li
          var parent_li = $this.parent("li");
          //Open the target menu and add the menu-open class
          checkElement.slideDown(animationSpeed, function () {
            //Add the class active to the parent li
            checkElement.addClass('menu-open');
            parent.find('li.active').removeClass('active');
            parent_li.addClass('active');
          });
        }
        //if this isn't a link, prevent the page from being redirected
        if (checkElement.is(subMenuSelector)) {
          e.preventDefault();
        }
      });



    }
  }, []);

  return (
    <>

      {/* <!-- start loader --> */}
      <div id="pageloader-overlay" class="visible incoming"><div class="loader-wrapper-outer"><div class="loader-wrapper-inner" ><div class="loader"></div></div></div></div>
      {/* <!-- end loader --> */}
      <div id="wrapper">
        <ToastContainer theme='colored' position='top-center'></ToastContainer>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/from" element={<From />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="calender" element={<Calendar />} />
          <Route path="tables" element={<Tables />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
