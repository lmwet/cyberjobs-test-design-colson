import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Fab } from "@material-ui/core";
import OverlayApply from "../../OverlayApply";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const useStyles = makeStyles((theme) => ({
  candidater: {
    backgroundColor: "#f4c627",
    color: theme.palette.text.secondary,
    textTransform: "none",
    pointerEvents: "pointer",
    padding: theme.spacing(2),
  },

  icon: {
    padding: "10px",
  },
}));

const ChatButton = () => {
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
        Acceder au Chat <ChatBubbleOutlineIcon />
      </Fab>
      {isShown && <OverlayApply closeModal={closeModal} />}
    </React.Fragment>
  );
};

export default ChatButton;
