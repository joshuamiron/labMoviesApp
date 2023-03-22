import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function PersonCard({person}) {
  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.media}
        image={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            : img
        }
      />
      <CardHeader
        sx={styles.header}
        title={
          <Typography variant="h5" component="p">
            {person.name}{" "}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="h6" component="p">
          <TrendingUpIcon fontSize="small" />
              {"  "} {person.popularity}{" "}
        </Typography>
        <Grid container>
          <Typography variant="h6" component="p">
            {person.movie_credits}
            {console.log(person.movie_credits)}
          </Typography>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/people/${person.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
