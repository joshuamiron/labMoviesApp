import React from "react";
import Grid from "@mui/material/Grid";

import Header from "../headerList";
import PeopleList from "../peopleList";

const styles = {
  root: {
    backgroundColor: "background-paper",
  },
};

function PeopleListPageTemplate({ people, title, action }) {

  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <PeopleList
          action={action}
          people={people}
        />
      </Grid>
    </Grid>
  );
}
export default PeopleListPageTemplate;
