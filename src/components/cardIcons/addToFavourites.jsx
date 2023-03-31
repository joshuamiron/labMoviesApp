import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { MoviesContext } from "../../contexts/moviesContext";
import Avatar from "@mui/material/Avatar";

const styles = {
  avatar: {
  //backgroundColor: "rgb(255, 0, 0, .50)",
  },
};

const AddToFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavourites(movie);
  };

  const isMovieFavourited = context.favourites.includes(movie.id);

  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      {isMovieFavourited ? (
        <Avatar sx={styles.avatar}>
          <FavoriteIcon color="secondary" fontSize="medium" />
        </Avatar>
      ) : (
        <Avatar sx={styles.avatar}>
          <FavoriteBorderIcon color="white" fontSize="medium" />
        </Avatar>
      )}
    </IconButton>
  );
};



export default AddToFavouritesIcon;
