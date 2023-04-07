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
    backgroundColor: "secondary",
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

      <CardHeader
        avatar={
          favourites.includes(movie.id) ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon color="secondary"/>
            </Avatar>
          ) : null
        }
      />
      
      <Typography variant="h4" component="h3">
        {movie.title}{"   "}

        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>

    </Paper>
  );
};

export default MovieHeader;
