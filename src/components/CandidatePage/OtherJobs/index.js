import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";
import {
  Paper,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Container,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spacing: 8,
  root: {
    flexGrow: 1,
  },
  cardGrid: {
    padding: theme.spacing(2),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  cardMedia: {
    paddingTop: "55%",
    padding: theme.spacing(2),
  },
  cardContent: {
    flexGrow: 1,
  },
  h6: {
    color: theme.palette.text.primary,
  },
  paperGrid: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(20),
  },
}));

const OtherJobs = ({ otherJobs }) => {
  const classes = useStyles();

  return (
    <Grid item xs={24} sm={21}>
      <Container className={classes.paperGrid} maxWidth="lg">
        <Paper className={classes.cardGrid}>
          <Typography variant="h6" className={classes.h6}>
            Autres Jobs
          </Typography>
          <Grid container spacing={6}>
            {otherJobs.map((job) => (
              <Grid item key={job.title} xs={15} sm={9} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={job.imgUrl}
                    title={job.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {job.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="secondary" disabled>
                      <Icon>{job.icon}</Icon> {job.caption}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Grid>
  );
};

export default OtherJobs;
