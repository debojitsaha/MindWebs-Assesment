import React from "react";
import { Text } from "@chakra-ui/react";
import Logo from "../assets/mw_logo.png";

const Footer = () => {
  return (
    <div className="mb-0 bg-dark-subtle d-flex justify-content-between p-4 mt-2">
      <div className="d-flex">
        <img
          src={Logo}
          alt="Logo"
          width="30"
          height="24"
          className="d-inline-block align-text-top mx-2"
        />
        <Text fontWeight={500}>Mind Webs</Text>
      </div>
      <div className="d-flex justify-content-evenly">
        <Text fontWeight={300} mr={2}>
          Terms of Use
        </Text>
        <Text fontWeight={300} mr={2}>
          Privacy Policy
        </Text>
        <Text fontWeight={400} mr={2}>
          &copy; MindWebs 2019. All rights reserved
        </Text>
      </div>
    </div>
  );
};

export default Footer;
