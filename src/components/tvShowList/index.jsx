import React from "react";
import TVShow from "../tvShowCard/";
import Grid from "@mui/material/Grid";

const TVShowList = ({ tvShows, action }) => {
  let tvShowCards = tvShows.map((t) => (
    <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TVShow key={t.id} tv={t} action={action} />
    </Grid>
  ));
  return tvShowCards;
};
export default TVShowList;
