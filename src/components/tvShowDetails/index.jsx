import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TodayIcon from '@mui/icons-material/Today';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import PublicIcon from '@mui/icons-material/Public';

import { formatDate } from "../../util";
import { getCountryName } from "../../util";

import AddToFavouritesIcon from '../cardIcons/addToFavourites'
import PlaylistAddIcon from '../cardIcons/addToPlaylist'

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    marginTop: 0.5,
  },
  chipLabel: {
    marginTop: 0.5,
    marginRight: 1.0,
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 12,
    right: 2,
  },
};

const TVShowDetails = ({ tv }) => {
  const formattedStartDate = formatDate(tv.first_air_date);
  const formattedEndDate = formatDate(tv.last_air_date);
  const formattedCountryName = getCountryName(tv.origin_country);

  return (
    <>
      {/*<AddToFavouritesIcon movie={movie}></AddToFavouritesIcon>
      <PlaylistAddIcon movie={movie}></PlaylistAddIcon>*/}
      <Paper component="ul" sx={styles.chipSet}>
        <Typography variant="h6" component="h3">
          Overview
        </Typography>
        <Typography variant="body2" component="p">
          {tv.overview}
          {tv.homepage ? (
            <a href={tv.homepage} target="_blank">
              <Button variant="text" size="medium" color="primary" endIcon={<OpenInNewIcon />} >
                {`Visit ${tv.name}'s hompage`}
              </Button>
            </a>
          ) : null}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={styles.chipSet}>
            <Typography sx={styles.chipLabel} >Genres:</Typography>
            {tv.genres.map((g) => (
              <li key={g.name}>
                <Chip label={g.name} sx={styles.chipLabel} />
              </li>
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={styles.chipSet}>
            <Typography sx={styles.chipLabel} >Languages:</Typography>
            {tv.languages.map((l) => (
              <li key={l}>
                <Chip label={l} sx={styles.chipLabel} />
              </li>
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={styles.chipSet}>
            <Chip
              icon={<PublicIcon />}
              label={`Origin: ${formattedCountryName}`} sx={styles.chipLabel} />
            <Chip
              icon={<TrendingUpIcon />}
              label={`User rating: ${tv.vote_average * 10}%`} sx={styles.chipLabel}
            />
            <Chip
              icon={<TodayIcon />}
              label={`First air date: ${formattedStartDate}`} sx={styles.chipLabel} />
            <Chip
              icon={<EventBusyIcon />}
              label={`Last air date: ${formattedEndDate}`} sx={styles.chipLabel}
            />
          </Grid>

        </Grid>
      </Paper>
    </>
  );
};

export default TVShowDetails;
