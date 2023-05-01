import React from "react";
import Grid from "@mui/material/Grid";

import Header from "../headerList";
import TVShowList from "../tvShowList";

const styles = {
  root: {
    backgroundColor: "background-paper",
  },
};

function TVShowListPageTemplate({ tvShows, title, action }) {

  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <TVShowList
          action={action}
          tvShows={tvShows}
        />
      </Grid>
    </Grid>
  );
}
export default TVShowListPageTemplate;
