import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

import { DataGrid, RowsProp, ColDef } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(4),
    backgroundColor: "#3b3e47",
    fontSize: "0.8rem",
    color: "white",
    height: 500,
    width: "100%",
  },
}));

const columns: ColDef[] = [
  { field: "id", hide: true },
  { field: "col1", headerName: "LIENS UTILS", width: 150 },
  { field: "col2", headerName: "A PROPOS", width: 150 },
];

const rows: RowsProp = [
  { id: 1, col1: "Recruteurs", col2: "Mentions Legales" },
  { id: 2, col1: "Contact", col2: "CGU" },
  { id: 3, col1: "  ", col2: "Confidentialite" },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <DataGrid className={classes.footer} rows={rows} columns={columns} />
    </Box>
  );
};

export default Footer;
