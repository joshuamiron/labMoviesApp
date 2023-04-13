import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "background-paper",
  },
};

export default function FilterPeopleCard(props) {

  const handleUserImput = (e, type, value) => {
    e.preventDefault()
    props.onUserInput(type, value)
  };

  const handleNameTextChange = (e, props) => {
    handleUserImput(e, "name", e.target.value)
  };

  const handleSortChange = (e) => {
    console.log("handleSortChange called on filterPeopleCard to " + e.target.value);
    e.preventDefault();
    props.onSortOrderChange(e.target.value);
  };

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
            onChange={handleNameTextChange}
          />

          <Typography variant="h5" component="h1">
            Sort people
          </Typography>
          <FormControl sx={styles.formControl}>
            <InputLabel id="sort-label">Choose sort</InputLabel>
            <Select
              labelId="sort-label"
              id="sort-select"
              value={props.sortOrder}
              onChange={handleSortChange}
            >
              <MenuItem value={"title-asc"}>Name - A to Z</MenuItem>
              <MenuItem value={"title-desc"}>Name - Z to A</MenuItem>
              <MenuItem value={"popularity-asc"}>Popularity ↑</MenuItem>
              <MenuItem value={"popularity-desc"}>Popularity ↓</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
}
