import React from "react";
import Person from "../personCard/";
import Grid from "@mui/material/Grid";

const PeopleList = ({ people, action }) => {
  let peopleCards = people.map((p) => (
    <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Person key={p.id} person={p} action={action} />
    </Grid>
  ));
  return peopleCards;
};

export default PeopleList;
