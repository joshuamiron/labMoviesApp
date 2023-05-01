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
  button: { marginLeft: 1 },
};

export default function TVShowCard({ tv, action }) {
  const formattedDate = formatDate(tv.first_air_date);

  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.media}
        image={
          tv.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
            : img
        }
      />

      <CardHeader
        sx={styles.header}
        title={
          <Typography variant="h5" component="p" sx={{ maxWidth: "100%" }}>
            {tv.name}{" "}
          </Typography>
        }
      />

      <CardContent>
        <Typography variant="subtitle1" component="p">
          First air date: <strong>{formattedDate}</strong>
        </Typography>
        <Typography variant="subtitle1" component="p">
          User rating: <strong>{tv.vote_average * 10}%</strong>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {action(tv)}
        <Link to={`/tv/${tv.id}`}>
          <Button variant="outlined" size="medium" color="primary" sx={styles.button}>
            More Info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
