import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";

import FilterCard from "../filterPeopleCard";

export const nameFilter = function (person, value) {
  return person.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

const styles = {
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

const PersonFilterUI = ({ onFilterValuesChange, nameFilter, sortOrder, onSortOrderChange }) => {
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
          nameFilter={nameFilter}
          sortOrder={sortOrder}
          onSortOrderChange={onSortOrderChange}
        />
      </Drawer>
    </>
  );
};

export default PersonFilterUI;
