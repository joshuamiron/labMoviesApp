import React, { useState } from "react";
import FilterCard from "../filterPeopleCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";

export const nameFilter = function (person, value) {
  return person.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

 /* export const jobFilter = function (person, value) {
  const jobName = String(value);
  return jobName;
}; */

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

const PersonFilterUI = ({ onFilterValuesChange, nameFilter}) => {
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
        />
      </Drawer>
    </>
  );
};

export default PersonFilterUI;
