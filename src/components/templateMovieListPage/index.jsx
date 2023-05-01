import React from "react";
import Grid from "@mui/material/Grid";

import Header from "../headerList";
import MovieList from "../movieList";

const styles = {
  root: {
    backgroundColor: "background-paper",
  },
};

function MovieListPageTemplate({ movies, title, action }) {

  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <MovieList
          action={action}
          movies={movies}
        />
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
