import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  Box,
} from "@material-ui/core";
import JobImages from "./JobImages";
import DatePicker from "./DatePicker";
import BookingDateButton from "./BookingDateButton";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";

const useStyles = makeStyles((theme) => ({
  spacing: 8,

  root: {
    flexGrow: 1,
    backgroundColor: "rgba(255,255,255)",
    margin: theme.spacing(-8),
  },
  text: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.background.paper,
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
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(20),
  },
  jobImage: {
    minHeight: "15rem",
    minWidth: "15rem",
    padding: "-2rem",
  },
  cardMedia: {
    minHeight: "21rem",
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
    padding: theme.spacing(2),
    height: "85vh",
    backgroundColor: "transparent",
  },
  blue: {
    backgroundColor: "rgba(10,40,100,0.9)",
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    height: "85vh",
  },
  imageCards: {
    margin: theme.spacing(2),
  },
}));

const BookingDateRow = ({ bookingDateRow }) => {
  const classes = useStyles();

  return (
    <Grid item xs={24} sm={21} className={classes.root}>
      <Container className={classes.paperGrid} maxWidth="lg">
        <Grid item xs={12} sm={9}>
          <Paper className={classes.blue}>
            <Container className={classes.titleContainer} maxWidth="md">
              <Button
                className={classes.logo}
                variant="outlined"
                color="primary"
              >
                <EventOutlinedIcon />
              </Button>
              <Typography className={classes.title} gutterBottom variant="h3">
                Réservez une date d'entretien
              </Typography>
            </Container>
            <Card className={classes.cardMedia}>
              <CardContent className={classes.cardContent}>
                <Container className={classes.titleContainer} maxWidth="sm">
                  <Typography gutterBottom variant="h6">
                    {bookingDateRow.jobDescription.jobName} à{" "}
                    {bookingDateRow.company}
                  </Typography>
                </Container>
                <DatePicker />
              </CardContent>
            </Card>
            <BookingDateButton />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={9}>
          <Grid container>
            <Box className={classes.squareArea}>
              <JobImages jobImages={bookingDateRow.jobImages} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
export default BookingDateRow;
