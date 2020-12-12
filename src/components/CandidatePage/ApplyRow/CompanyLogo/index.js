import React from "react";
import { CardMedia } from "@material-ui/core";

const CompanyLogo = ({ logo }) => {
  return (
    <React.Fragment>
      <a href="https://www.cyberjobs.fr/Company/Marine-Nationale">
        <CardMedia
          id="company-avatar"
          component="img"
          alt={logo.company}
          max-height="75"
          max-width="40"
          image={logo.imgUrl}
          title={logo.company}
        />{" "}
      </a>
    </React.Fragment>
  );
};

export default CompanyLogo;
