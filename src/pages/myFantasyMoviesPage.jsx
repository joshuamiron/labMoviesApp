import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";

import Header from "../components/headerList";

const styles = {
    root: {
      backgroundColor: "#ffffff",
    },
  };

const MyFantasyMoviesPage = () => {
    return (
        <Grid container sx={styles.root}>
            <Grid item xs={12}>
                <Header title='My Fantasy Movies' />
            </Grid>
            <Grid item container spacing={5}>
                <Button>
                    Click me
                </Button>
            </Grid>
        </Grid> 
    );
};

export default MyFantasyMoviesPage; 