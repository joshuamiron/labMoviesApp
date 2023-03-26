import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import MovieCardSmall from "../movieCardSmall";
import {getPersonMovieCredits} from "../../api/tmdb-api";
import PlaylistAddIcon from '../cardIcons/addToPlaylist'
import Paper from "@mui/material/Paper";

const PersonMovieCredits = ( {person}) => {
  const [personMovieCredits, setPersonMovieCredits] = useState([]);

  useEffect(() => {
    getPersonMovieCredits(person.id).then((movie) => {
      setPersonMovieCredits(movie);
    });
  }, [person.id]);

 /*useEffect(() => {
    getPersonMovieCredits(person.id).then((movie_credits) => {
        const movies = movie_credits.map((movie_credit) => movie_credit.title);
      setPersonMovieCredits(movies);
    });
  }, [person.id]);*/

  return (
    <>
      <Paper>
        <Typography variant="h6" component="h3">
            Credits
        </Typography>
        <br></br>
        <div style={{overflowX: "scroll", whiteSpace: "nowrap"}}>
            <Grid container sx={{ display: "inline-flex", flexWrap: "nowrap" }}>
            {personMovieCredits.map((person) => (
                <Grid item key={person.id} sx={{flex: "0 0 auto"}}>
                <div style={{width: 200}}>
                <MovieCardSmall action={(movie) => {
                    return <PlaylistAddIcon movie={movie}></PlaylistAddIcon>
                    }} movie={movie}  />
                    </div>
                </Grid>
            ))}
            </Grid>
        </div>
      </Paper>
    </>
  );
};
export default PersonMovieCredits ;
