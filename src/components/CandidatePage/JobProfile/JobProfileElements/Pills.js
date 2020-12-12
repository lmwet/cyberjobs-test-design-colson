import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pills: {
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255)",
  },
  // pillsContainer: {
  //   backgroundColor: "rgba(255,255,255, 0.7)",
  // },
}));

const Pills = ({ pills }) => {
  const classes = useStyles();

  return (
    <Container className={classes.pillsContainer} maxWidth="lg">
      {pills &&
        pills.map((pill, pillIndex) => (
          <Button
            key={pillIndex}
            className={classes.pills}
            variant="outlined"
            disabled
          >
            <Icon key={pillIndex}>{pill.icon}</Icon>
            {pill.info}
          </Button>
        ))}
    </Container>
  );
};

export default Pills;
