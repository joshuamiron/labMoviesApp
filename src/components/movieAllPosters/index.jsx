import React from "react";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import { useQuery } from "react-query";

import { getMovieImages } from "../../api/tmdb-api";

const styles = {
  media: {
    maxWidth: 180,
    height: 250,
  },
};

const AllMoviePosters = ({ movie }) => {

  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: movie.id }],
    getMovieImages
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const images = data.posters

  return (
    <>
      <Paper>
        <Typography variant="h6" component="h3">
          Other posters for this movie:
        </Typography>
        <br></br>
        <div style={{ overflowX: "scroll" }}>
          <Grid container sx={{ display: "inline-flex", flexWrap: "nowrap" }}>
            {images.map((image) => (
              <Grid key={image.file_path} sx={{ flex: "0 0 auto", mx: 1 }}>
                <div style={{ height: 250 }}>
                  <a href={`https://image.tmdb.org/t/p/original/${image.file_path}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                      alt={image.poster_path}
                      style={{ maxWidth: "auto", height: "100%" }}
                    />
                  </a>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Paper>
    </>
  );
};
export default AllMoviePosters;
