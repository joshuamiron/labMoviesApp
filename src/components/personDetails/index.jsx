import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";

import NavigationIcon from "@mui/icons-material/Navigation";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 12,
    right: 2,
  },
};

const PersonDetails = ( {person}) => {

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip
          icon={<StarRate />}
          label={`${person.popularity} (${person.popularity}`}
        />
      </Paper>

      <br></br>
      
      <Typography variant="h5" component="h3">
        Credits
      </Typography>

      <Typography variant="h6" component="p">
        {person.credits}
      </Typography>
    </>
  );
};
export default  PersonDetails;
