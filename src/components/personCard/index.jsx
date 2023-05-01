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

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
};

export default function PersonCard({ person, action }) {
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
        <Typography variant="subtitle1" component="p">
          Popularity: <strong>{person.popularity}</strong>
        </Typography>
        <Typography variant="subtitle1" component="p">
          Known for: <strong>{person.known_for_department}</strong>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {action(person)}
        <Link to={`/people/${person.id}`}>
          <Button variant="text" size="medium" color="primary" sx={styles.button}>
            More Info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
