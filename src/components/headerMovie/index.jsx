import React, {useContext} from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardHeader from "@mui/material/CardHeader";
import { MoviesContext } from "../../contexts/moviesContext";

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const MovieHeader = (props) => {
  const movie = props.movie;
  console.log(movie);
  
  const {favourites} = useContext(MoviesContext);

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false;
  }
  console.log(favourites);

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <CardHeader
        avatar={
          favourites.includes(movie.id) ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
      />
      
      <Typography variant="h4" component="h3">
        {movie.title}{"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary" fontSize="large"/>
        </a>
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>

      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
