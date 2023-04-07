import React, { useContext, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import { MoviesContext } from "../contexts/moviesContext";
import genres from "./genreCategories"; //need to add this
import productionCompanies from "./productionCompanies"; //need to add this

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
  submit: {
    marginRight: 2,
  },
};

const MyMadeupMoviesForm = ({ movie }) => {
  const defaultValues = {
    title: "",        // author: "",
    overview: "",     // review: "", probably more like review text?
    agree: false,     // what's this?  checking that the first two are filled in?
    genre: "3",      // rating: "3",
    releasedate: "",
    runtime: "",
    productionCompany: "3",
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(defaultValues);
  const navigate = useNavigate();
  const context = useContext(MoviesContext);
  //const [title, setTitle] = useState("");
  const [genre, setGenre] = useState(3);
  const [productionCompany, setProductionCompany] = useState(3);

  const [open, setOpen] = useState(false);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleProductionCompanyChange = (event) => {
    setProductionCompany(event.target.value);
  };

  /*const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };*/

  const handleSnackClose = (event) => {
    setOpen(false);
    navigate("/movies/mymadeupmoviespage");
  };

  const onSubmit = (madeupmovie) => {
    //madeupmovie.movieId = id;
    //madeupmovie.title = title;
    madeupmovie.genre = genre;
    madeupmovie.productionCompany = productionCompany;
    context.addMadeupMovie(movie, madeupmovie);
    console.log(madeupmovie);
    setOpen(true);
  };

  return (
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          Make up a movie
        </Typography>
        <Snackbar
          sx={styles.snack}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          onClose={handleSnackClose}
        >
          <Alert
            severity="success"
            variant="filled"
            onClose={handleSnackClose}
          >
            <Typography variant="h4">
              Your made-up movie has been created!
            </Typography>
          </Alert>
        </Snackbar>
        <form sx={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                sx={{ width: "40ch" }}
                variant="outlined"
                margin="normal"
                required
                onChange={onChange}
                value={value}
                id="title"
                label="Movie title"
                autoFocus
              />
            )}
          />
          {errors.title && (
            <Typography variant="subtitle2" component="p" style={{color: "red"}}>
              {errors.title.message}
            </Typography>
          )}
          <Controller
            name="overview"
            control={control}
            rules={{
              required: "Overview cannot be empty",
              minLength: { value: 10, message: "Overview is too short" },
            }}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                sx={{ width: "40ch" }}
                value={value}
                onChange={onChange}
                label="Overview text"
                id="overview"
                multiline
                minRows={5}
              />
            )}
          />
          <br></br>
          {errors.overview && (
            <Typography variant="subtitle2" component="p" style={{color: "red"}}>
              {errors.overview.message}
            </Typography>
          )}
          <br></br>
          <Controller
            control={control}
            name="genre"
            render={({ field: { onChange, value } }) => (
              <TextField
                id="select-genre"
                select
                sx={{ width: "40ch" }}
                variant="outlined"
                label="Select genre"
                value={genre}
                onChange={handleGenreChange}
              >
                {genres.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          <Controller
            name="runtime"
            control={control}
            rules={{
              required: "Runtime is required.",
              inputProps: { inputMode: 'numeric', pattern: '[0-9]*', message: "Runtime must be numbers" },
            }}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField  // this should be numeric entry only
                variant="outlined"
                margin="normal"
                required
                onChange={onChange}
                sx={{ width: "40ch" }}
                value={value}
                id="runtime"
                label="Runtime"
                inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
              />
            )}
          />
          <br></br>
          {errors.runtime && (
            <Typography variant="subtitle2" component="p" style={{color: "red"}}>
              {errors.runtime.message}
            </Typography>
          )}
          <br></br>

          <Controller
            control={control}
            name="productioncompany"
            render={({ field: { onChange, value } }) => (
              <TextField
                id="select-production-company"
                select
                sx={{ width: "40ch" }}
                variant="outlined"
                label="Production company"
                value={productionCompany}
                onChange={handleProductionCompanyChange}

              >
                {productionCompanies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          <br></br>
          <br></br>
          <Controller
            name="releasedate"
            control={control}
            rules={{ required: "Release date is required" }}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker  // this should be a date picker
                  sx={{ width: "40ch" }}
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={onChange}
                  value={value}
                  id="releasedate"
                  label="Release date"
                  autoFocus
                  inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
              </LocalizationProvider>
            )}
          />
          <br></br>
        {errors.releasedate && (
          <Typography variant="subtitle2" component="p" style={{color: "red"}}>
            {errors.releasedate.message}
          </Typography>
        )}
        <br></br>

        <Box sx={styles.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            sx={styles.submit}
            onClick={() => {
              reset({
                title: "",
                content: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>

      </CardContent>
    </Card>
  );
};

export default MyMadeupMoviesForm; 
