import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import AddToPlaylistIcon from "@mui/icons-material/PlaylistAdd";
import RemoveFromPlaylistIcon from "@mui/icons-material/PlaylistRemove";
import { MoviesContext } from "../../contexts/moviesContext";

const PlaylistAddIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
  };

  //---- Check if the movie is already in the playlist
  const isMovieInPlaylist = context.playlist.includes(movie.id);

  //---- If the movie is in the playlist, show the remove button. Otherwise show the add button.
  return (
    <IconButton aria-label="add to playlist" onClick={onUserSelect}>
      {isMovieInPlaylist ? (
        <RemoveFromPlaylistIcon color="secondary" fontSize="medium" />
      ) : (
        <AddToPlaylistIcon color="primary" fontSize="medium" />
      )}
    </IconButton>
  );
};

export default PlaylistAddIcon;
