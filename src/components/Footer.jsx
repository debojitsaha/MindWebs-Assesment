import React from "react";
import { Image, Text } from "@chakra-ui/react";
import Logo from "../assets/mw_logo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div
      className="d-flex justify-content-between p-3 fixed-bottom"
      style={{ backgroundColor: "#282936", color: "#b1adad" }}
    >
      <div className="d-flex">
        <img
          src={Logo}
          alt="Logo"
          width="50px"
          height="24px"
          className="d-inline-block align-text-top mx-2"
        />
        <span style={{ color: "#ebe9e9" }}>
          <strong>Mind</strong>Webs
        </span>
        <Text fontWeight={500} fontSize="14px" mx={2} ml={"70px"}>
          About
        </Text>
        <Text fontWeight={500} fontSize="14px" mx={2}>
          Hubs
        </Text>
        <Text fontWeight={500} fontSize="14px" mx={2}>
          Help
        </Text>
      </div>
      <div className="d-flex justify-content-evenly">
        <Text fontWeight={500} fontSize="14px" mx={4}>
          Terms of Use
        </Text>
        <Text fontWeight={500} fontSize="14px" mx={4}>
          Privacy Policy
        </Text>
        <Image src={linkedin} mx={1} />
        <Image src={twitter} mx={1} />
        <Image src={facebook} mx={1} />
        <Text fontWeight={500} fontSize="14px" mx={4}>
          &copy; MindWebs 2019. All rights reserved
        </Text>
      </div>
    </div>
  );
};

export default Footer;
