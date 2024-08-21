import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Login from "./Login";

const NavbarComponent = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Load Google Translate script dynamically
    // const script = document.createElement("script");
    // script.src =
    //     "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    // script.async = true;
    // document.body.appendChild(script);
    // Initialize Google Translate callback function
    // window.googleTranslateElementInit = () => {
    //     new window.google.translate.TranslateElement(
    //         { pageLanguage: 'en' },
    //         'google_translate_element'
    //     );
    // };
    // return () => {
    //     document.body.removeChild(script);
    //     delete window.googleTranslateElementInit;
    // };
  }, []);

  const handleLogout = () => {
    setCurrentUser(null);
    // Any additional logout cleanup
  };

  const handleLogin = (email) => {
    setCurrentUser(email); // Set current user's email
  };

  return (
    <div className="container">
      <div className="container-fluid p-10">
        <nav className="navbar">
          <div className="logo">
            <a href="/" style={{ textDecoration: "none" }}>
              <img src="logo.png" alt="Logo" />
            </a>
          </div>
          {/* Google Translate Element */}
          {/* <div id="google_translate_element"></div> */}
          <ul
            className="menu"
            style={{
              fontSize: "20px",
              fontFamily: "Source Sans Pro, Arial, sans-serif",
            }}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/overview">
                {/* <i className="fa fa-bell"></i> */}
                About
              </a>
            </li>
            <li>
              <a href="/model">
                <i className="fa fa-bullhorn"></i>
                Advertise
              </a>
            </li>
            <li>
              <a href="/model">
                <i className="fa fa-line-chart"></i>
                Contact For Free Listing
              </a>
            </li>
          </ul>
          {/* Login / Logout */}
          <div className="login-logout">
            {currentUser ? (
              <span>Welcome, {currentUser}!</span>
            ) : (
              <>
                <a href="/login" className="btn btn-primary mx-2">
                  Login
                </a>
                <a href="/signup" className="btn btn-primary mx-2">
                  Sign Up
                </a>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarComponent;
