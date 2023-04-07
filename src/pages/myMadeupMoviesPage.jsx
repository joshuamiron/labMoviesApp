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
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start" secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }>
        <ListItemAvatar>
          <Avatar>
            <MovieIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          primary="Made up movie 1"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" Made up movie 1 desciption"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }>
        <ListItemAvatar>
          <Avatar>
            <MovieIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }>
        <ListItemAvatar>
          <Avatar>
            <MovieIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
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
