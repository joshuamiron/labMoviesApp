import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import AddToPlaylistIcon from "@mui/icons-material/PlayListAdd";

const PlaylistAddIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
  };

return (
  <IconButton aria-label="add to playlist" onClick={onUserSelect}>
    <AddToPlaylistIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default PlaylistAddIcon;
