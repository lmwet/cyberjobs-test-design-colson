import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Card, CardContent } from "@material-ui/core";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";

const useStyles = makeStyles((theme) => ({
  infobox: {
    position: "absolute",
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
  buttonBox: {
    padding: 0,
  },
}));

const ChatOption = () => {
  const [isShown, setIsShown] = useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box
        className={classes.buttonBox}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        Chat entreprise <ChatOutlinedIcon />
      </Box>
      {isShown && (
        <Card className={classes.infobox} id="apply-button-infobox">
          <CardContent>
            <Typography variant="subtitle2" color="primary">
              <Box className={classes.icon}>
                <ChatOutlinedIcon color="action" fontSize="large" />
              </Box>
              Prêts pour un "buisness chat"? Posez vos questions à l'entreprise
            </Typography>
          </CardContent>
        </Card>
      )}
    </React.Fragment>
  );
};

export default ChatOption;
