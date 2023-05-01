import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import AddToPlaylistIcon from "@mui/icons-material/PlaylistAdd";
import RemoveFromPlaylistIcon from "@mui/icons-material/PlaylistRemove";
import { MoviesContext } from "../../contexts/moviesContext";

const TVPlaylistAddIcon = ({ tv }) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToTVPlaylist(tv);
  };

  //---- Check if the show is already in the playlist
  const isShowInPlaylist = context.playlist.includes(tv.id);

  //---- If the show is in the playlist, show the remove button. Otherwise show the add button.
  return (
    <IconButton aria-label="add to playlist" onClick={onUserSelect}>
      {isShowInPlaylist ? (
        <RemoveFromPlaylistIcon color="secondary" fontSize="medium" />
      ) : (
        <AddToPlaylistIcon color="primary" fontSize="medium" />
      )}
    </IconButton>
  );
};

export default TVPlaylistAddIcon;
