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
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

import Header from "../components/headerList";
import MyMadeupMoviesForm from "../components/madeupMoviesForm";
import genres from "../components/madeupMoviesForm/genreCategories"; //need to add this from real genres endpoint
import productionCompanies from "../components/madeupMoviesForm/productionCompanies"; //need to figure out how to create a production companies endpoint
import { MoviesContext } from "../contexts/moviesContext";

const styles = {
  root: {
    backgroundColor: "background-paper",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
  list: {
    width: "100%",
    backgroundColor: "background-paper",
    margin: "auto",
  },
  details: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
  },
  detailLabel: {
    marginRight: 5.0,
    display: "inline",
    component: "span",
    variant: "body2",
    color: "text.primary",
  },
};

//------- get the genre name from the ID so we can display it with the movie's details instead of the ID number returned by the map
const getGenreName = (genreId) => {
  const genre = genres.find((g) => g.value === genreId);
  return genre ? genre.label : "";
};

//------ get the production company name froom the ID so we can display it with the movie's details instead of the ID number returned by the map
const getProductionCompanyName = (productionCompanyId) => {
  const productionCompany = productionCompanies.find((p) => p.value === productionCompanyId);
  return productionCompany ? productionCompany.label : "";
};

const MyMadeupMoviesPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { madeupMovies } = useContext(MoviesContext); // Get the current array of madeupMovies from moviesContext

  const context = useContext(MoviesContext);

  //------ pass the selected movie ID to MoviesContext to filter it out of the array and update the array
  const handleDelete = (madeupMovie) => {
    context.deleteMadeupMovie(madeupMovie.id);
  };

  //------ If there are no made up movies in the array in moviesContext
  if (madeupMovies.length === 0) {
    return (
      <>
        <Grid>
          <Typography variant="h4" style={{ textAlign: "center", marginTop: "250px" }}>
            Select Create Movie to start adding some made up movies.
          </Typography>
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
  }

  //------ If there are made up movies in the array in moviesContext
  else return (
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={'My Made-up Movies'} />
        </Grid>
        <List sx={styles.list} >
          {madeupMovies.map(movie => (
            <React.Fragment key={movie.id}>
              <ListItem alignItems="flex-start" secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(movie)} >
                  <DeleteIcon color="secondary" />
                </IconButton>
              }>
                <ListItemAvatar >
                  <Avatar >
                    <LocalMoviesIcon color="primary" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={movie.title}
                  secondary={
                    <React.Fragment>
                      <Grid container spacing={1} component="span">
                        <Grid item xs={12} sx={styles.details} component="span">
                          <Typography sx={styles.detailLabel} component="span">
                            {getGenreName(movie.genre)}
                          </Typography>
                          <Typography sx={styles.detailLabel} component="span">
                            {getProductionCompanyName(movie.productionCompany)}
                          </Typography>
                          <Typography sx={styles.detailLabel} component="span">
                            {`${movie.runtime} min.`}
                          </Typography>
                          <Typography sx={styles.detailLabel} component="span">
                            {`Releases ${new Date(movie.releasedate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}`}
                          </Typography>
                        </Grid>
                      </Grid>
                      {` ${movie.overview}`}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
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
        <div style={{ overlowY: 'auto' }}>
          <MyMadeupMoviesForm style={{ overlowY: 'auto' }}>
          </MyMadeupMoviesForm>
        </div>
      </Drawer>
    </>
  );
};

export default MyMadeupMoviesPage;
