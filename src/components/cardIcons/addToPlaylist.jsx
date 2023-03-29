import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import AddToPlaylistIcon from "@mui/icons-material/PlayListAdd";
import RemoveFromPlaylistIcon from "@mui/icons-material/PlaylistRemove";
import { MoviesContext } from "../../contexts/moviesContext";

const PlaylistAddIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
  };

  const isMovieInPlaylist = context.playlist.includes(movie.id);

return (
  <IconButton aria-label="add to playlist" onClick={onUserSelect}>
    {isMovieInPlaylist ? (
    <RemoveFromPlaylistIcon color="primary" fontSize="large" />
    ) : (
      <AddToPlaylistIcon color="primary" fontSize="large" />
    )}

  </IconButton>
);
};

export default PlaylistAddIcon;
