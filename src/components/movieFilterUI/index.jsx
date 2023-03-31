import React, { useState } from "react";
import FilterCard from "../filterMoviesCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";

export const titleFilter = function (movie, value) {
  return movie.title.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = function (movie, value) {
  const genreId = Number(value);
  return genreId > 0 ? movie.genre_ids.includes(genreId) : true;
};

export const sortFilter = function (movie, value) {
  const sortOption = value.split(".");
  switch (sortOption[0]) {
    case "title":
      return sortOption[1] === "asc"
      ? movie.title.localeCompare(movie.title) : movie.title.localeCompare(movie.title) * -1;
    case "popularity":
      return sortOption[1] === "asc"
      ? movie.vote_average - movie.vote_average : movie.vote_average - movie.vote_average * -1;
    case "releasedate":
      return sortOption[1] === "asc"
      ? new Date(movie.release_date) - new Date(movie.release_date) : new Date(movie.release_date) - new Date(movie.release_date) * -1;
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

const MovieFilterUI = ({ onFilterValuesChange, titleFilter, genreFilter, sortFilter }) => {
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
        <FilterCard
          onUserInput={onFilterValuesChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          sortFilter={sortFilter}
        />
      </Drawer>
    </>
  );
};

export default MovieFilterUI;
