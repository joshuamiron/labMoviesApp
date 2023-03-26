import React, {useContext} from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { MoviesContext } from "../../contexts/moviesContext";

import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

const styles = {
  card: { maxWidth: 180 },
  media: { height: 250 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function MovieCardSmall({movie, action}) {
  //const {favourites, addToFavourites} = useContext(MoviesContext);
  const {playlist} = useContext(MoviesContext);

  if (playlist.find((id) => id === movie.id)) {
    movie.playlist = true;
  } else {
    movie.playlist = false;
  }

  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardHeader
        sx={styles.header}
        avatar={
          (movie.playlist ? (
            <Avatar sx={styles.avatar}>
              <PlaylistAddCheckIcon />
            </Avatar>
          ) : null)
        }
        title={
          <Typography variant="h6" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
