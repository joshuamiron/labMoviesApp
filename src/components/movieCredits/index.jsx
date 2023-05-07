import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import PersonCardSmall from "../personCardSmall";
import { getMovieCast } from "../../api/api";
import AddToFavouritePeopleIcon from '../cardIcons/addToFavouritePeople'
import Paper from "@mui/material/Paper";

const MovieCast = ({ movie }) => {
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    getMovieCast(movie.id).then((cast) => {
      setMovieCast(cast);
    });
  }, [movie.id]);

  return (
    <>
      <Paper>
        <Typography variant="h6" component="h3">
          Cast
        </Typography>
        <br></br>
        <div style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
          <Grid container sx={{ display: "inline-flex", flexWrap: "nowrap" }}>
            {movieCast.map((castMember) => (
              <Grid item key={castMember.id} sx={{ flex: "0 0 auto" }}>
                <div style={{ width: 200 }}>
                  <PersonCardSmall action={(person) => {
                    return <AddToFavouritePeopleIcon person={person}></AddToFavouritePeopleIcon>
                  }} person={castMember} character={castMember.character} />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Paper>
    </>
  );
};
export default MovieCast;
