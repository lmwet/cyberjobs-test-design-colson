import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  CardMedia,
  Container,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import Chat from "./Chat";
import ChatButton from "./ChatButton";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const useStyles = makeStyles((theme) => ({
  spacing: 8,

  root: {
    flexGrow: 1,
    backgroundColor: "rgba(10,40,100,0.9)",
    margin: theme.spacing(-8),
    paddingTop: theme.spacing(4),
  },
  text: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.text.primary,
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

    marginBottom: theme.spacing(20),
  },
  cardMedia: {
    minHeight: "22rem",
    maxWidth: "28rem",
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  squareArea: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    height: "85vh",
  },
}));

const ChatRow = ({}) => {
  const classes = useStyles();

  return (
    <Grid item xs={24} sm={21} className={classes.root}>
      <Container className={classes.paperGrid} maxWidth="lg">
        <Grid item xs={15} sm={12}>
          <Card className={classes.squareArea}>
            <Container className={classes.titleContainer} maxWidth="md">
              <Button
                className={classes.logo}
                variant="outlined"
                color="primary"
              >
                {" "}
                <ChatBubbleOutlineIcon />
              </Button>
              <Typography className={classes.title} gutterBottom variant="h3">
                Des questions?
              </Typography>
            </Container>
            <CardMedia
              className={classes.cardMedia}
              image="/images/chat.png"
              title="Chat Entreprise"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Contactez l'entreprise et démarquez vous!{" "}
              </Typography>
            </CardContent>
            <CardActions>
              <ChatButton />
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={9} sm={6}>
          <Chat />
        </Grid>
      </Container>
    </Grid>
  );
};
export default ChatRow;
