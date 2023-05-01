import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { MoviesContext } from "../../contexts/moviesContext";

const AddToFavouriteTVShowsIcon = ({ tv }) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavouriteTVShows(tv);
  };

  //---- Check if the show is already in the favourites list
  const isShowFavourited = context.favouriteShows.includes(tv.id);

  //---- If the show is in the favourites list, show the remove button. Otherwise show the add button.
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      {isShowFavourited ? (
        <FavoriteIcon color="secondary" fontSize="medium" />
      ) : (
        <FavoriteBorderIcon color="primary" fontSize="medium" />
      )}
    </IconButton>
  );
};



export default AddToFavouriteTVShowsIcon;
