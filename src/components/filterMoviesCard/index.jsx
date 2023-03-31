import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
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
  
  const {sortFilter, setSortFilter} = useState("popularity.desc");

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
    props.onUserInput(type, value, sortFilter);
  };

  const handleTextChange = (e, props) => {
//    handleChange(e, "title", e.target.value)
handleUserImput(e, "title", e.target.value)
  };

  const handleGenreChange = (e) => {
    handleUserImput(e, "genre", e.target.value)
  };

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSortFilter(selectedValue);
    handleUserImput(e, "sort", selectedValue)
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
            <MenuItem value={"popularity.desc"}>User rating ↓</MenuItem>
            <MenuItem value={"popularity.asc"}>User rating ↑</MenuItem>
            <MenuItem value={"releasedate.desc"}>Release date - newest first</MenuItem>
            <MenuItem value={"releasedate.asc"}>Release date - oldest first</MenuItem>

          </Select>
        </FormControl>

      </CardContent>
    </Card>
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        
      </CardContent>
    </Card>
    </>
  );
}
