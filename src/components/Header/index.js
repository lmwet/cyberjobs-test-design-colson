import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import HeaderLinks from "./HeaderLinks";
import LoginButtons from "./LoginButtons";
import CyberJobsLogo from "./CyberJobsLogo";

const Header = () => {
  return (
    <AppBar color="#fff" position="fixed">
      <Toolbar>
        <CyberJobsLogo />
        <HeaderLinks />
        <LoginButtons />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
