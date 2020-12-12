import React from "react";
import { CardActions, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  jobLinks: {
    padding: "3px 1vw 3px calc(16vw - 1.5em)",
  },
}));

const JobLinks = () => {
  const classes = useStyles();

  return (
    <CardActions className={classes.jobLinks}>
      <Button size="medium" color="primary">
        PRESENTATION
      </Button>
      <Button size="medium" color="primary">
        AUTRE JOBS
      </Button>
      <Button size="medium" color="primary">
        ENTREPRISES
      </Button>
    </CardActions>
  );
};

export default JobLinks;
