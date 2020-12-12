import React from "react";
import { Container, Button } from "@material-ui/core";

const HeaderLinks = () => {
  return (
    <Container maxWidth="sm">
      <Button
        size="large"
        color="inherit"
        href="https://www.cyberjobs.fr/Companies"
      >
        Découvrir les entreprises
      </Button>
      <Button size="large" color="inherit" href="https://www.cyberjobs.fr/Jobs">
        Consulter les jobs
      </Button>
    </Container>
  );
};

export default HeaderLinks;
