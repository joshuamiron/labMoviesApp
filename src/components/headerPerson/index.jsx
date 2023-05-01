import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const PersonHeader = (props) => {
  const person = props.person;

  return (
    <Paper component="div" sx={styles.root}>
      <Typography variant="h4" component="h3">
        {person.name}
      </Typography>
    </Paper>
  );
};

export default PersonHeader;
