import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import img from '../../images/film-poster-placeholder.png'
import { formatDate } from "../../util";

const styles = {
  // card: { maxWidth: 400 },
  card: { width: "auto", height: "auto" },
  media: { height: 500, width: "100%" },
};

export default function MovieCard({ movie, action }) {
  const formattedDate = formatDate(movie.release_date);

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
        title={
          <Typography variant="h5" component="p" sx={{ maxWidth: "100%" }}>
            {movie.title}{" "}
          </Typography>
        }
      />

      <CardContent>
        <Typography variant="subtitle1" component="p">
          Release date: <strong>{formattedDate}</strong>
        </Typography>
        <Typography variant="subtitle1" component="p">
          User rating: <strong>{movie.vote_average * 10}%</strong>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="text" size="medium" color="primary" >
            More Info
          </Button>
        </Link>
      </CardActions>

      {/*<CardActions disableSpacing>
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info
          </Button>
        </Link>
      </CardActions>*/}

    </Card>
  );
}
