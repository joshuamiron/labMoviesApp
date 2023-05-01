import React, { useContext, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { MoviesContext } from "../../contexts/moviesContext";
import genres from "./genreCategories"; //need to add this from real genres endpoint
import productionCompanies from "./productionCompanies"; //need to figure out how to create a production companies endpoint

const styles = {
  root: { maxWidth: 345 },
  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "background-paper",
  },
  submit: { marginRight: 2 },
};

const MadeupMoviesForm = () => {
  //---------- Set initial values for the form
  const defaultValues = {
    id: "",
    overview: "",
    agree: false,
    releasedate: "",
    runtime: "",
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
    navigate("/movies/mymadeupmoviespage");
  };

  const onSubmit = (madeupMovie) => {
    madeupMovie.genre = genre;
    madeupMovie.productionCompany = productionCompany;
    context.addMadeupMovie(madeupMovie);
    console.log("Form page says: ");
    console.log(madeupMovie);
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
                value={value}
                onChange={onChange}
                label="Movie title"
                id="title"
                autoFocus
                helperText="Title is required"
              />
            )}
          />
          {errors.title && (
            <Typography variant="subtitle2" component="p" style={{ color: "red" }}>
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
                sx={{ width: "40ch" }}
                variant="outlined"
                margin="normal"
                required
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
            <Typography variant="subtitle2" component="p" style={{ color: "red" }}>
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
                helperText="In minutes, numbers only please"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              />
            )}
          />
          <br></br>
          {errors.runtime && (
            <Typography variant="subtitle2" component="p" style={{ color: "red" }}>
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
                <DatePicker
                  sx={{ width: "40ch" }}
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={onChange}
                  value={value}
                  id="releasedate"
                  label="Release date"
                />
              </LocalizationProvider>
            )}
          />
          <br></br>
          {errors.releasedate && (
            <Typography variant="subtitle2" component="p" style={{ color: "red" }}>
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

export default MadeupMoviesForm; 
