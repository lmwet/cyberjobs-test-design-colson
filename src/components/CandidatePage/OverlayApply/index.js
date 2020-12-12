import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Fab, Container, TextField } from "@material-ui/core";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    minWidth: "100vw",
    backgroundColor: "rgba(10,40,100,0.9)",
  },
  pannel: {
    position: "fixed",
    left: "28vw",
    marginTop: "20vh",
    zIndex: 1000000000000000,
    width: "32vw",
    padding: theme.spacing(3),
    backgroundColor: " #fff",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: "0 0 15px rgba(10,40,100,0.1)",
  },
  pannelElement: {
    margin: "2rem",
  },
  icon: {
    padding: "10px",
  },
  soumettre: {
    backgroundColor: "#f4d47d",
    marginRight: "1rem",
  },
}));

const OverlayApply = ({ closeModal }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.overlay}>
        <Container className={classes.pannel} maxWidth="lg">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className={classes.pannelElement}
              id="username1"
              label="First Name"
            />
            <TextField
              className={classes.pannelElement}
              id="username2"
              label="Last Name"
            />
            <TextField
              className={classes.pannelElement}
              id="email"
              label="Email"
              variant="filled"
            />
          </form>
          <Container maxWidth="sm">
            <Fab
              className={classes.pannelElement}
              variant="extended"
              className={classes.buttons}
              className={classes.soumettre}
            >
              Soumettre <DescriptionOutlinedIcon />
            </Fab>
            <Fab
              className={classes.pannelElement}
              onClick={closeModal}
              variant="extended"
              className={classes.buttons}
            >
              Annuler
            </Fab>
          </Container>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default OverlayApply;
