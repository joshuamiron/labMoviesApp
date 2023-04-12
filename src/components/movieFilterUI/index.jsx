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
  if (!movie.release_date) {
    return true;
  }
  else {
    return movie.release_date.substring(0, 4).search(value) !== -1;
  }
  //return movie.release_date.substring(0, 4).search(value) !== -1;
};

const styles = {
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

const MovieFilterUI = ({ onFilterValuesChange, titleFilter, genreFilter, releaseYearFilter, sortOrder, onSortOrderChange }) => {
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
          sortOrder={sortOrder}
          onSortOrderChange={onSortOrderChange}
        />
      </Drawer>
    </>
  );
};

export default MovieFilterUI;
