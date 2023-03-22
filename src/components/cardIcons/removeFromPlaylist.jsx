import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/PlaylistRemove";

const RemoveFromPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.removeFromPlaylist(movie);
  };

  return (
    <IconButton aria-label="remove from playlist" onClick={onUserSelect}>
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromPlaylistIcon;
