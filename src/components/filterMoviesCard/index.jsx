import React from "react";
//import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useQuery } from "react-query";

import { getGenres } from "../../api/tmdb-api";
import Spinner from '../spinner'

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

export default function FilterMoviesCard(props) {
  const {data, error, isLoading, isError} = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }



  const handleUserImput = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = (e, props) => {
    handleUserImput(e, "title", e.target.value)
  };

  const handleGenreChange = (e) => {
    handleUserImput(e, "genre", e.target.value)
  };

  const handleStudioChange = (e) => {
    handleUserImput(e, "studio", e.target.value)
  };

  const handleSortChange = (e) => {
    handleUserImput(e, "sort", e.target.value)
  };

  return (
    <>
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          Search by movie title
        </Typography>
        <TextField
          sx={styles.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={props.titleFilter}
          variant="filled"
          onChange={handleTextChange}
        />
        <Typography variant="h5" component="h1">
          Filter by genre
        </Typography>
        <FormControl sx={styles.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <Typography variant="h5" component="h1">
          Filter by studio
        </Typography>
        <FormControl sx={styles.formControl}>
          <InputLabel id="studio-label">Studio</InputLabel>
          <Select
            labelId="studio-label"
            id="studio-select"
            value={props.studioFilter}
            onChange={handleStudioChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <Typography variant="h5" component="h1">
          Sort the movies
        </Typography>
        <FormControl sx={styles.formControl}>
          <InputLabel id="sort-label">Sort by</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={props.sortFilter}
            onChange={handleSortChange}
          >
            <MenuItem value={"title.desc"}>Title - A to Z</MenuItem>
            <MenuItem value={"title.asc"}>Title - Z to A</MenuItem>
            <MenuItem value={"vote_average.desc"}>User rating ↓</MenuItem>
            <MenuItem value={"vote_average.asc"}>User rating ↑</MenuItem>
            <MenuItem value={"release_date.desc"}>Release date - newest first</MenuItem>
            <MenuItem value={"release_date.asc"}>Release date - oldest first</MenuItem>
          </Select>
        </FormControl>

      </CardContent>
    </Card>
    </>
  );
}
