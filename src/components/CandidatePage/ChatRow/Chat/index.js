import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Container,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const useStyles = makeStyles((theme) => ({
  spacing: 8,

  root: {
    flexGrow: 1,
  },
  icon: {
    padding: theme.spacing(2),
    maxWidth: "4rem",
    backgroundColor: "rgba(10,40,100,0.9)",
  },
  paperGrid: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: theme.spacing(20),
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: theme.spacing(4),
  },
  squareArea: {
    display: "flex",
    flexFlow: "column wrap",
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    height: "85vh",
  },
  box: {
    textAlign: "justify",
    color: theme.palette.text.secondary,
    fontSize: "1em",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(16),
  },
  button: {
    marginTop: theme.spacing(1.2),
    padding: theme.spacing(1.2),
  },
}));

const Chat = () => {
  const classes = useStyles();

  return (
    <Container className={classes.paperGrid} maxWidth="lg">
      <Paper className={classes.squareArea}>
        <Container className={classes.titleContainer} maxWidth="md">
          <Typography gutterBottom variant="h3">
            Vos conversations
          </Typography>
        </Container>

        <Container maxWidth="sm" className={classes.box}>
          <Button className={classes.icon} variant="outlined" color="primary">
            <ChatBubbleOutlineIcon />
          </Button>
          <Typography variant="subtitle2">
            Afin de vous repondre au mieux, votre CV a été transmis à
            l'entreprise. Vous pouvez écrire votre message.
          </Typography>
        </Container>

        <TextareaAutosize
          aria-label="chat-sample"
          rowsMin={5}
          placeholder="Votre message"
        />

        <Button className={classes.button} variant="outlined" color="primary">
          Envoyer
        </Button>
      </Paper>
    </Container>
  );
};
export default Chat;
