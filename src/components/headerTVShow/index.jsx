import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const TVShowHeader = (props) => {
  const tv = props.tv;
  console.log(tv);

  return (
    <Paper component="div" sx={styles.root}>
      <Grid>
        <Typography variant="h4" component="h3" style={{ textAlign: "center" }}>
          {tv.name}
        </Typography>
        <Typography style={{ textAlign: "center" }}>
          {`${tv.tagline}`}
        </Typography>
      </Grid>
    </Paper>
  );
};

export default TVShowHeader;
