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

  //---- Check if the movie is already in the favourites list
  const isMovieFavourited = context.favourites.includes(movie.id);

  //---- If the movie is in the favourites list, show the remove button. Otherwise show the add button.
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      {isMovieFavourited ? (
        <FavoriteIcon color="secondary" fontSize="medium" />
      ) : (
        <FavoriteBorderIcon color="primary" fontSize="medium" />
      )}
    </IconButton>
  );
};



export default AddToFavouritesIcon;
