import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
//import InputLabel from "@mui/material/InputLabel";
//import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SortIcon from '@mui/icons-material/Sort';
//import FormControl from "@mui/material/FormControl";
//import Select from "@mui/material/Select";
//import {getGenres} from "../../api/tmdb-api";
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

export default function FilterPeopleCard(props) {
//  const {data, error, isLoading, isError} = useQuery("genres", getGenres);
//  const {data, error, isLoading, isError} = useQuery();

  /*if (isLoading) {
    return <Spinner />;
  }*/

  /*if (isError) {
    return <h1>{error.message}</h1>;
  }*/
  /* const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  } */

  const handleUserImput = (e, type, value) => {
    e.preventDefault()
    props.onUserInput(type, value)
  };

  const handleTextChange = (e, props) => {
    handleUserImput(e, "name", e.target.value)
  };

/*  const handleGenreChange = (e) => {
    handleUserImput(e, "genre", e.target.value)
  }; */

  return (
    <>
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          Search by name
        </Typography>
        <TextField
          sx={styles.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={props.nameFilter}
          variant="filled"
          onChange={handleTextChange}
        />
      </CardContent>
    </Card>
    <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort people.
          </Typography>
        </CardContent>
      </Card>
      </>
  );
}
