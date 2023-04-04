import React, { useState, useContext } from "react";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";

import Header from "../components/headerList";
import MyMadeupMoviesForm from "./myMadeupMoviesForm";

const styles = {
    root: {
      backgroundColor: "#ffffff",
      //maxWidth: 345,
    },
    fab: {
      marginTop: 8,
      position: "fixed",
      top: 20,
      right: 2,

    },
    media: { height: 300 },
    formControl: {
      margin: 1,
      minWidth: 220,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };


const MyMadeupMoviesPage = ( props ) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>

    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={'My Made-up Movies'} />
      </Grid>
      <Grid item container spacing={5}>
      </Grid>
    </Grid> 


    

    
    <Fab
      color="secondary"
      variant="extended"
      onClick={() => setDrawerOpen(true)}
      sx={styles.fab}
    >
      Create movie
    </Fab>

    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <MyMadeupMoviesForm>

      </MyMadeupMoviesForm>
    </Drawer>
    </>
  );
};

export default MyMadeupMoviesPage;
