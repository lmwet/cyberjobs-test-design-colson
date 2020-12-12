import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Fab } from "@material-ui/core";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import OverlayApply from "../../OverlayApply";

const useStyles = makeStyles((theme) => ({
  candidater: {
    backgroundColor: "#f4c627",
    color: theme.palette.text.secondary,
    textTransform: "none",
    pointerEvents: "pointer",
  },

  icon: {
    padding: "10px",
  },
}));

const ApplyButton = () => {
  const [isShown, setIsShown] = useState(false);
  const classes = useStyles();
  const closeModal = () => {
    setIsShown(false);
  };

  return (
    <React.Fragment>
      <Fab
        variant="extended"
        className={classes.candidater}
        onClick={() => setIsShown(true)}
      >
        Envoyer ma candidature <DescriptionOutlinedIcon />
      </Fab>
      {isShown && <OverlayApply closeModal={closeModal} />}
    </React.Fragment>
  );
};

export default ApplyButton;
