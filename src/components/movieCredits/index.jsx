import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import PersonCardSmall from "../personCardSmall";
import {getMovieCredits} from "../../api/tmdb-api";
import Paper from "@mui/material/Paper";

const MovieCredits = ( {person}) => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(person.id).then((people) => {
      setMovieCredits(people);
    });
  }, [person.id]);

  return (
    <>
      <Paper>
        <Typography variant="h6" component="h3">
            Cast
        </Typography>
        <br></br>
        <div style={{overflowX: "scroll", whiteSpace: "nowrap"}}>
            <Grid container sx={{ display: "inline-flex", flexWrap: "nowrap" }}>
            {movieCredits.map((person) => (
                <Grid item key={person.id} sx={{flex: "0 0 auto"}}>
                <div style={{width: 200}}>
                <PersonCardSmall person={person}  />
                    </div>
                </Grid>
            ))}
            </Grid>
        </div>
      </Paper>
    </>
  );
};
export default MovieCredits ;
