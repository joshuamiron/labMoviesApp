import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import PeopleList from "../peopleList";

const styles = {
  root: {
    backgroundColor: "#ffffff",
  },
};

function PeopleListPageTemplate({ people, name, action }) {

return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header name={name} />
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
