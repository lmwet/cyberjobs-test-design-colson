import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import Titles from "./Titles";

const useStyles = makeStyles((theme) => ({
  titlesContainer: {
    position: "relative",
    top: "13rem",
    zIndex: 10000000000,
  },
}));

const CompanyBanner = ({ titles }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.titlesContainer}>
        <Titles titles={titles} />
      </Container>
    </React.Fragment>
  );
};

export default CompanyBanner;
