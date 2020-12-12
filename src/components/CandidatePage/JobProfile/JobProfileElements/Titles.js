import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  titles: {
    padding: "0",
    margin: "1em",
    color: "white",
  },
}));

const Titles = ({ titles }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} id="title-frame">
      <Container className={classes.titles} maxWidth="sm">
        <Typography variant="h3">{titles.jobTitle}</Typography>
        <Typography variant="h6">à {titles.companyTitle}</Typography>
      </Container>
    </Grid>
  );
};

export default Titles;
