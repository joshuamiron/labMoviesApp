import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { MoviesContext } from "../contexts/moviesContext";
import genres from "./genreCategories"; //need to add this
import productionCompanies from "./productionCompanies"; //need to add this
import styles from "../components/reviewForm/styles";

const MyFantasyMoviesForm = ({ movie }) => {
  const defaultValues = {
    title: "",        // author: "",
    overview: "",     // review: "", probably more like review text?
    agree: false,     // what's this?  checking that the first two are filled in?
    genre: "3",      // rating: "3",
    releasedate: "",
    runtime: "",
    productioncompany: "3",
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(defaultValues);
  const navigate = useNavigate();
  const context = useContext(MoviesContext);
  const [genre, setGenre] = useState(3);
  const [productionCompany, setProductionCompany] = useState(3);

  const [open, setOpen] = useState(false);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleProductionCompanyChange = (event) => {
    setProductionCompany(event.target.value);
  };

  const handleSnackClose = (event) => {
    setOpen(false);
    navigate("/movies/fantasymovies");
  };

  const onSubmit = (fantansymovie) => {
    fantansymovie.movieId = movie.id;
    fantansymovie.genre = genre;
    fantansymovie.productionCompany = productionCompany;
    context.addFantasyMovie(movie, fantansymovie);
    console.log(fantansymovie);
    setOpen(true);
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3">
        Create fantasy movie
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
            Your fantasy movie has been created!
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
          <Typography variant="h6" component="p">
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
              value={value}
              onChange={onChange}
              label="Overview text"
              id="overview"
              multiline
              minRows={10}
            />
          )}
        />
        {errors.overview && (
          <Typography variant="h6" component="p">
            {errors.overview.message}
          </Typography>
        )}

        <Controller
          control={control}
          name="genre"
          render={({ field: { onChange, value } }) => (
            <TextField
              id="select-genre"
              select
              sx={{ width: 300 }}
              variant="outlined"
              label="Select Genre"
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
        {errors.releasedate && (
          <Typography variant="h6" component="p">
            {errors.releasedate.message}
          </Typography>
        )}

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
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="runtime"
              label="Runtime"
              autoFocus
              inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
            />
          )}
        />
        {errors.releasedate && (
          <Typography variant="h6" component="p">
            {errors.releasedate.message}
          </Typography>
        )}
        
        <Controller
          control={control}
          name="productioncompany"
          render={({ field: { onChange, value } }) => (
            <TextField
              id="select-production-company"
              select
              sx={{ width: 300 }}
              variant="outlined"
              label="Select Production Company"
              value={productionCompanies}
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
                author: "",
                content: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default MyFantasyMoviesForm; 
