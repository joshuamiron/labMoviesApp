import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TheatersIcon from '@mui/icons-material/Theaters';
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";

import MovieReviews from '../movieReviews'
import { formatDate } from "../../util";
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

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // New
  const formattedDate = formatDate(movie.release_date);

  return (
    <>
      <AddToFavouritesIcon movie={movie}></AddToFavouritesIcon>
      <PlaylistAddIcon movie={movie}></PlaylistAddIcon>
      <Paper component="ul" sx={styles.chipSet}>
        <Typography variant="h6" component="h3">
          Overview
        </Typography>
        <Typography variant="body2" component="p">
          {movie.overview}
          {movie.homepage ? (
            <a href={movie.homepage} target="_blank">
              <Button variant="text" size="medium" color="primary" endIcon={<OpenInNewIcon />} >
                {`Visit ${movie.title}'s hompage`}
              </Button>
            </a>
          ) : null}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={styles.chipSet}>
            <Typography sx={styles.chipLabel} >Genres:</Typography>
            {movie.genres.map((g) => (
              <li key={g.name}>
                <Chip label={g.name} sx={styles.chipLabel} />
              </li>
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={styles.chipSet}>
            <Chip
              icon={<AccessTimeFilledIcon />}
              label={`Runtime: ${movie.runtime} min.`} sx={styles.chipLabel} />
            <Chip
              icon={<MonetizationIcon />}
              label={`Revenue: $${movie.revenue.toLocaleString()}`} sx={styles.chipLabel}
            />
            <Chip
              icon={<TrendingUpIcon />}
              label={`User rating: ${movie.vote_average * 10}%`} sx={styles.chipLabel}
            />
            <Chip
              icon={<TheatersIcon></TheatersIcon>}
              label={`Released: ${formattedDate}`} sx={styles.chipLabel} />
          </Grid>
        </Grid>
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};

export default MovieDetails;
