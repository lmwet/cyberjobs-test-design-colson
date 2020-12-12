import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Card, CardContent } from "@material-ui/core";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";

const useStyles = makeStyles((theme) => ({
  infobox: {
    position: "absolute",
    right: "26vw",
    marginTop: "60px",
    zIndex: 1000000000000000,
    flexDirection: "column",
    width: "12vw",
    padding: theme.spacing(2),
    backgroundColor: " #fff",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    boxShadow: "0 0 15px rgba(10,40,100,.1)",
    cursor: "pointer",
  },
  icon: {
    padding: "10px",
  },
}));

const Booking = () => {
  const [isShown, setIsShown] = useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        Réserver une interview <EventOutlinedIcon />
      </Box>
      {isShown && (
        <Card className={classes.infobox} id="apply-button-infobox">
          <CardContent>
            <Typography variant="subtitle2" color="primary">
              <Box className={classes.icon}>
                <EventOutlinedIcon color="action" fontSize="large" />
              </Box>
              Réserver une date d'interview
            </Typography>
          </CardContent>
        </Card>
      )}
    </React.Fragment>
  );
};

export default Booking;
