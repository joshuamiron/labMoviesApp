import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarRate from "@mui/icons-material/StarRate";
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import CakeIcon from '@mui/icons-material/Cake';
import AddToFavouritePeopleIcon from '../cardIcons/addToFavouritePeople'

import { formatDate } from "../../util";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
    marginRight: 1.0,
  },
};

const PersonDetails = ({ person }) => {
  const formattedDate = formatDate(person.birthday);

  return (
    <>
      <AddToFavouritePeopleIcon person={person}></AddToFavouritePeopleIcon>
      <Paper component="ul" sx={styles.chipSet}>
        <Typography variant="h6" component="h3">
          Biography
        </Typography>
        <Typography variant="body2" component="p">
          {person.biography}
          {person.homepage ? (
            <a href={person.homepage} target="_blank">
              <Button variant="text" size="medium" color="primary" endIcon={<OpenInNewIcon />} >
                {`Visit ${person.name}'s hompage`}
              </Button>
            </a>
          ) : null}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={styles.chipSet}>
            <Chip
              icon={<StarRate />}
              label={`Popularity: ${person.popularity * 10}`} sx={styles.chipLabel} />
            <Chip
              icon={<PsychologyAltIcon />}
              label={`Known for: ${person.known_for_department}`} sx={styles.chipLabel} />
            <Chip
              icon={<CakeIcon></CakeIcon>}
              label={`Birthday: ${formattedDate}`} sx={styles.chipLabel} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default PersonDetails;
