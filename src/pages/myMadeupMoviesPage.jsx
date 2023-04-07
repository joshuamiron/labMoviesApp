import React, { useState, useContext } from "react";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MovieIcon from '@mui/icons-material/Movie';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

import Header from "../components/headerList";
import MyMadeupMoviesForm from "./myMadeupMoviesForm";
import { MoviesContext } from "../contexts/moviesContext";

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
  };

const MyMadeupMoviesPage = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { madeupMovies } = useContext(MoviesContext);

  return (
    <>
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={'My Made-up Movies'} />
      </Grid>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start" secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon color="secondary" />
          </IconButton>
        }>
        <ListItemAvatar >
          <Avatar >
            <LocalMoviesIcon color="primary"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Title"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Genre?
              </Typography>
              {" Movie overview"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
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
