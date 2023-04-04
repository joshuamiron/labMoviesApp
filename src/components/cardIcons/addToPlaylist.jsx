import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import AddToPlaylistIcon from "@mui/icons-material/PlaylistAdd";
import RemoveFromPlaylistIcon from "@mui/icons-material/PlaylistRemove";
import { MoviesContext } from "../../contexts/moviesContext";
import Avatar from "@mui/material/Avatar";

const styles = {
  avatar: {
    //backgroundColor: "rgb(255, 0, 0, .50)",
  },
};

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
        <Avatar sx={styles.avatar}>
          <RemoveFromPlaylistIcon color="secondary" fontSize="medium" />
        </Avatar>
    ) : (
      <Avatar sx={styles.avatar}>
        <AddToPlaylistIcon color="white" fontSize="medium" />
      </Avatar>
    )}
  </IconButton>
);
};

export default PlaylistAddIcon;
