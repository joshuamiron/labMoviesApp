import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { MoviesContext } from "../../contexts/moviesContext";

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
        <FavoriteIcon color="primary" fontSize="large" />
      ) : (
        <FavoriteBorderIcon color="primary" fontSize="large" />
      )}
    </IconButton>
  );
};

export default AddToFavouritesIcon;
