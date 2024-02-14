import { mainDarkLogo, mainWhiteLogo } from "assets/images";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";

const Header = () => {
  const [isUsedWhiteNavBar, setIsUsedWhiteNavBar] = useState(false);

  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", () => {
        if (typeof $(window) !== "undefined") {
          const scrollTop = $(window).scrollTop();
          if (scrollTop !== undefined && scrollTop > 50) {
            $("nav").addClass("white-navbar");
            //  Hide White Logo
            $(".navbar-brand img").attr("src", mainDarkLogo);
            //  Hide white Mobile Nav Open Button
            $(".mobile-nav-open-btn").css("color", "#6255a5");
          } else {
            $("nav").removeClass("white-navbar");
            //  Show White Logo
            $(".navbar-brand img").attr("src", mainWhiteLogo);
            //  Show White Mobile Nav Open Button
            $(".mobile-nav-open-btn").css("color", "#fff");
          }
        }
      });
      $("nav .navbar-toggler").click(function () {
        if (typeof $(window) !== "undefined") {
          const scrollTop = $(window).scrollTop();
          if (scrollTop !== undefined && scrollTop > 50) {
            $("body").toggleClass("mobile-menu-opened");
            $("nav.navbar").toggleClass("navbar-fixed-height");
            $("nav.navbar").toggleClass("navbar-scroll-content");
            $("nav.navbar").addClass("white-navbar");
          } else {
            $("body").toggleClass("mobile-menu-opened");
            $("nav.navbar").toggleClass("navbar-fixed-height");
            $("nav.navbar").toggleClass("navbar-scroll-content");
            $("nav.navbar").toggleClass("white-navbar");

            if ($("nav.navbar").hasClass("white-navbar")) {
              $(".navbar-brand img").attr("src", mainDarkLogo);
            } else {
              $(".navbar-brand img").attr("src", mainWhiteLogo);
            }
          }
        }
      });
    } else {
      $("nav").addClass("white-navbar");
      //  Hide White Logo
      $(".navbar-brand img").attr("src", mainDarkLogo);
      //  Hide white Mobile Nav Open Button
      $(".mobile-nav-open-btn").css("color", "#6255a5");

      $("nav .navbar-toggler").click(function () {
        $("body").toggleClass("mobile-menu-opened");
        $("nav.navbar").toggleClass("navbar-scroll-content");
        $("nav.navbar").toggleClass("navbar-fixed-height");
        $("nav.navbar").addClass("white-navbar");
      });
    }

    $("#mobile-nav-open-btn").click(function () {
      $("#mobile-nav-open-btn").css("display", "none");
      $("#mobile-nav-close-btn").css("display", "block");
    });

    //Hide Mobile Navbar
    $("#mobile-nav-close-btn").click(function () {
      $("#mobile-nav-open-btn").css("display", "block");
      $("#mobile-nav-close-btn").css("display", "none");
    });

    return () => {
      if (location.pathname === "/")
        window.removeEventListener("scroll", () => {});
    };
  }, [location.pathname]);

  return (
    <header>
      <nav className={`navbar navbar-expand-lg navbar-fixed-height fixed-top`}>
        <div className="container">
          <div className="row">
            <div className="navbar-header">
              <Link className="navbar-brand text-left" to="/">
                <img src={mainWhiteLogo} alt="logo" />
              </Link>
            </div>

            <button
              className="navbar-toggler collapsed  ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                id="mobile-nav-close-btn"
                viewBox="0,0,256,256"
                style={{ fill: "#000000" }}
              >
                <g
                  fill="var(--main-color)"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M40.7832,7.27148c-0.52851,0.01247 -1.03058,0.23367 -1.39648,0.61523l-14.33594,14.33594l-14.33594,-14.33594c-0.37669,-0.38827 -0.89458,-0.60741 -1.43555,-0.60742c-0.81437,0.00019 -1.54731,0.49409 -1.85324,1.24881c-0.30592,0.75472 -0.12373,1.61957 0.46066,2.18673l14.33594,14.33594l-14.33594,14.33594c-0.52247,0.50164 -0.73292,1.24653 -0.55021,1.9474c0.18272,0.70087 0.73005,1.24821 1.43093,1.43093c0.70087,0.18272 1.44577,-0.02774 1.9474,-0.55021l14.33594,-14.33594l14.33594,14.33594c0.50164,0.52247 1.24653,0.73293 1.94741,0.55021c0.70088,-0.18272 1.24821,-0.73005 1.43093,-1.43093c0.18272,-0.70088 -0.02774,-1.44577 -0.55021,-1.94741l-14.33594,-14.33594l14.33594,-14.33594c0.59567,-0.57119 0.77939,-1.44958 0.46256,-2.21161c-0.31683,-0.76204 -1.06915,-1.25125 -1.8942,-1.23175z"></path>
                  </g>
                </g>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0,0,256,256"
                id="mobile-nav-open-btn"
              >
                <g
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M3,9c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h44c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,24c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h44c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,39c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h44c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path>
                  </g>
                </g>
              </svg>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="search notes.html">
                    Search Notes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="login.html">
                    Sell Your Notes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="FAQ.html">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact us.html">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
