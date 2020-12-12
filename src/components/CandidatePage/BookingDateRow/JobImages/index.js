import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, CardMedia, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mosaikCard: {
    maxWidth: "16rem",
  },
  mosaik: {
    flexGrow: 1,
    display: "flex",
    flexFlow: "column wrap",
    justifyItems: "flex-start",
  },
}));

const JobImages = ({ jobImages }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {jobImages &&
        jobImages.map((image) => (
          <Grid item>
            <Card className={classes.mosaikCard}>
              <CardMedia
                component="img"
                alt={image.alt}
                image={image.imgUrl}
                title={image.imgTitle}
              />
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default JobImages;
