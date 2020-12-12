import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Breadcrumbs } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: "9rem",
    marginLeft: "5rem",
    fontSize: "0.8rem",
    color: "black",
    fontWeight: 600,
  },
}));

const BreadCrumbs = () => {
  const classes = useStyles();

  return (
    <Breadcrumbs className={classes.text} aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Accueil
      </Link>
      <Link color="inherit" href="/">
        Entreprises
      </Link>
      <Link color="inherit" href="/">
        Marine nationale
      </Link>
      <Link color="inherit" href="/">
        Coordinateur service informatique
      </Link>
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
