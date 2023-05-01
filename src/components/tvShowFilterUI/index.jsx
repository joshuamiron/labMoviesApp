import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";

import FilterTVShowsCard from "../filterTVShowsCard";

export const nameFilter = function (tv, value) {
  return tv.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

/*export const genreFilter = function (tv, value) {
  const genreId = Number(value);
  return genreId > 0 ? tv.genre_ids.includes(genreId) : true;
};

export const firstAirDateFilter = function (tv, value) {
  if (!tv.first_air_date) {
    return true;
  }
  else {
    return tv.first_air_date.substring(0, 4).search(value) !== -1;
  }
  //return movie.release_date.substring(0, 4).search(value) !== -1;
};*/

const styles = {
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

//const TVShowFilterUI = ({ onFilterValuesChange, nameFilter, genreFilter, firstAirDateFilter, sortOrder, onSortOrderChange }) => {
const TVShowFilterUI = ({ onFilterValuesChange, nameFilter, sortOrder, onSortOrderChange }) => {
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
        <FilterTVShowsCard
          onUserInput={onFilterValuesChange}
          nameFilter={nameFilter}
          sortOrder={sortOrder}
          onSortOrderChange={onSortOrderChange}
        />
      </Drawer>
    </>
  );
};

export default TVShowFilterUI;
