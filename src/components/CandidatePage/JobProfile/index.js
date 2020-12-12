import React from "react";
import { Card, Grid } from "@material-ui/core";
import Pills from "./JobProfileElements/Pills";
import JobLinks from "./JobProfileElements/JobLinks";
import CompanyBanner from "./JobProfileElements/CompanyBanner";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  profileCard: {
    marginTop: "2rem",
    padding: "3rem",
    backgroundImage: "url(/images/marine.png)",
    overflow: "hidden",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "70vh",
  },
  buttons: {
    marginRight: 0,
    backgroundColor: "rgba(255,255,255)",
    padding: "1em 3em",
  },
  apply: {
    backgroundColor: "#f4d47d",
    marginRight: 0,
    padding: "1em 3em",
  },
  card: {
    maxWidth: "4rem",
  },
}));

const JobProfile = ({ jobProfile }) => {
  const classes = useStyles();
  return (
    <Grid item xs={18} sm={12}>
      <Card className={classes.profileCard}>
        <Pills pills={jobProfile.pills} />
        <CompanyBanner titles={jobProfile.titles} />
      </Card>
      <JobLinks />
    </Grid>
  );
};

export default JobProfile;
