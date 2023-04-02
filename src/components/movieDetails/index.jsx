import React, { useState, useEffect, useRef } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TheatersIcon from '@mui/icons-material/Theaters';
import Typography from "@mui/material/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from '../movieReviews'
import {formatDate} from "../../util";

import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0.5,
  },
  chipLabel: {
    margin: 0.5,
    marginRight: 1.0,
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 12,
    right: 2,
  },
};

const MovieDetails = ( {movie}) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // New
  const formattedDate = formatDate(movie.release_date);


  return (
    <>
      <Grid>
        <CardActions disableSpacing>

        </CardActions>
      </Grid>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name}  />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<AccessTimeFilledIcon />} label={`Runtime: ${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`Revenue: $${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<TrendingUpIcon />}
          label={`User rating: ${movie.vote_average*10}%`}
        />
        <Chip
          icon={<TheatersIcon></TheatersIcon>} 
         label={`Released: ${formattedDate}`} />
      </Paper>
      
      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
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
