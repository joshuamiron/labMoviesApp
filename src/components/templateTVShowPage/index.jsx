import React from "react";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";

import TVShowHeader from "../headerTVShow";
import Spinner from '../spinner'
import { getTVShowImages } from "../../api/tmdb-api";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
};

const TemplateTVShowPage = ({ tv, children }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: tv.id }],
    getTVShowImages
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
      <TVShowHeader tv={tv} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3} sx={styles.media}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
            alt={images.poster_path}
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateTVShowPage;
