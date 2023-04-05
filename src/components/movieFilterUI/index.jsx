import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";

import FilterMoviesCard from "../filterMoviesCard";

export const titleFilter = function (movie, value) {
  return movie.title.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = function (movie, value) {
  const genreId = Number(value);
  return genreId > 0 ? movie.genre_ids.includes(genreId) : true;
};

export const releaseYearFilter = function (movie, value) {
  return movie.release_date.substring(0, 4).search(value) !== -1;
};

 export const sortBy = function (movie, value) {
  const sortOption = value;
  switch (sortOption[0]) {
    case "title.asc":
      return sortOption[1] === "asc"
      //? movie.title.localeCompare(movie.title) : movie.title.localeCompare(movie.title) * -1;
    case "title.desc":
      return sortOption[1] === "desc"
    case "vote_average.asc":
      return sortOption[1] === "asc"
     // ? movie.vote_average - movie.vote_average : movie.vote_average - movie.vote_average * -1;
    case "release_date.asc":
      return sortOption[1] === "asc"
     // ? new Date(movie.release_date) - new Date(movie.release_date) : new Date(movie.release_date) - new Date(movie.release_date) * -1;
    default:
      return true;
  }
};

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

const MovieFilterUI = ({ onFilterValuesChange, titleFilter, genreFilter, releaseYearFilter, sortBy }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterMoviesCard
          onUserInput={onFilterValuesChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          releaseYearFilter={releaseYearFilter}
          sortBy={sortBy}
        />
      </Drawer>
    </>
  );
};

export default MovieFilterUI;
