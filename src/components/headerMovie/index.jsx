import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { MoviesContext } from "../../contexts/moviesContext";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const MovieHeader = (props) => {
  const movie = props.movie;

  const { favourites } = useContext(MoviesContext);

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false;
  }
  console.log(favourites);

  return (
    <Paper component="div" sx={styles.root}>
      <Grid>
        <Typography variant="h4" component="h3" style={{ textAlign: "center" }}>
          {movie.title}
        </Typography>
        <Typography style={{ textAlign: "center" }}>
          {`${movie.tagline}`}
        </Typography>
      </Grid>
    </Paper>
  );
};

export default MovieHeader;
