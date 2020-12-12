import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spacing: 8,

  root: {
    flexGrow: 1,
  },
  box: {
    textAlign: "justify",
    color: theme.palette.text.primary,
  },
  text: {
    color: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  h5: {
    color: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

const JobDescription = ({ jobDescription }) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Typography className={classes.h5} gutterBottom variant="h5">
        Descriptif de l'offre "{jobDescription.jobName}"
      </Typography>

      <Typography className={classes.text} variant="caption">
        {jobDescription.offre}{" "}
      </Typography>

      <Typography className={classes.h5} gutterBottom variant="h5">
        Profil recherché
      </Typography>

      <Typography className={classes.text} variant="caption">
        {jobDescription.profileRecherche}
      </Typography>
    </Box>
  );
};
export default JobDescription;
