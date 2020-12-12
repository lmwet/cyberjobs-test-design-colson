import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Typography,
  CardMedia,
  Container,
  Button,
} from "@material-ui/core";
import CompanyLogo from "./CompanyLogo";
import JobDescription from "./JobDescription";
import ApplyButton from "./ApplyButton";
import JobImages from "../BookingDateRow/JobImages";

const useStyles = makeStyles((theme) => ({
  spacing: 8,

  root: {
    flexGrow: 1,
  },
  text: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
  },
  logo: {
    padding: theme.spacing(2),
    maxWidth: "4rem",
  },
  paperGrid: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: theme.spacing(20),
  },
  cardMedia: {
    minHeight: "17rem",
    maxHeight: "40rem",
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  squareArea: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    height: "85vh",
  },
  blue: {
    backgroundColor: "rgba(10,40,100,0.9)",
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    height: "85vh",
  },
}));

const ApplyRow = ({ applyRow }) => {
  const classes = useStyles();

  return (
    <Grid item xs={24} sm={21} className={classes.root}>
      <Container className={classes.paperGrid} maxWidth="lg">
        <Grid item xs={12} sm={9} className={classes.root}>
          <Paper className={classes.squareArea}>
            <Container className={classes.titleContainer} maxWidth="md">
              <Button
                className={classes.logo}
                variant="outlined"
                color="primary"
              >
                {" "}
                <CompanyLogo logo={applyRow} />
              </Button>
              <Typography className={classes.title} gutterBottom variant="h3">
                Postuler maintenant à {applyRow.company}
              </Typography>
            </Container>
            <CardMedia
              className={classes.cardMedia}
              image="/images/colleagues.svg"
              title="Shared Workspace"
            />
            <ApplyButton />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={9} className={classes.root}>
          <Paper className={classes.blue}>
            <JobDescription jobDescription={applyRow.jobDescription} />
          </Paper>
        </Grid>
      </Container>
    </Grid>
  );
};
export default ApplyRow;
