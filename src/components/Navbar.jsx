import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/mw_logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img
            src={Logo}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top mx-2"
          />
          <a className="navbar-brand" href="/">
            Mind Webs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
