import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from '../../images/film-poster-placeholder.png'

const styles = {
  card: { maxWidth: 180 },
  media: { height: 250 },
};

export default function PersonCardSmall({ person, action, character }) {
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
          <Typography variant="subtitle1" component="p">
            {person.name}{" "}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="subtitle2" component="p">
          As: <strong>{character}</strong>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {action(person)}
        <Link to={`/people/${person.id}`}>
          <Button variant="text" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
