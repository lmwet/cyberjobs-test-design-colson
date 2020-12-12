import React from "react";
import { Box, Button, Typography } from "@material-ui/core";

const LoginButtons = () => {
  return (
    <Box>
      <Typography variant="h6">
        <Button variant="contained" color="primary" disableElevation>
          Connexion
        </Button>
        <Button variant="outlined" color="primary">
          Recruteur
        </Button>
      </Typography>
    </Box>
  );
};

export default LoginButtons;
