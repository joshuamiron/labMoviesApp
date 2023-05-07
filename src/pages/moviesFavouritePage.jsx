import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useQueries } from "react-query";

import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, { titleFilter, genreFilter, releaseYearFilter } from "../components/movieFilterUI";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import PlaylistAddIcon from "../components/cardIcons/addToPlaylist";
import WriteReview from "../components/cardIcons/writeReview";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};

export const genreFiltering = {
  name: "genre",
  value: "0",
  condition: function (movie, value) {
    // Is user selected genre in this movies's genre list? 
    // Always true if selected genre ia All (0).
    const genreId = Number(value);
    const genre_ids = movie.genres.map((g) => g.id);
    return genreId > 0 ? genre_ids.includes(genreId) : true;
  },
};

const releaseYearFiltering = {
  name: "releaseYear",
  value: "",
  condition: releaseYearFilter,
};

const MoviesFavouritePage = () => {
  const { favourites: movieIds } = useContext(MoviesContext);
  console.log(movieIds);

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering, releaseYearFiltering]
  );

  // Create an array of queries and run them in parallel.
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouriteMovieQueries.map((q) => q.data);
  const displayMovies = allFavourites
    ? filterFunction(allFavourites)
    : [];

  const changeFilterValues = (type, value) => {
    const changedFilter = { name: type, value: value };

    switch (type) {
      case "title":
        console.log("title");
        console.log(filterValues[1]);
        setFilterValues([changedFilter, filterValues[1], filterValues[2]]);
        break;
      case "genre":
        console.log("genre");
        console.log(filterValues[0]);
        setFilterValues([filterValues[0], changedFilter, filterValues[2]]);
        break;
      case "releaseYear":
        console.log("release year");
        console.log(changedFilter);
        setFilterValues([filterValues[0], filterValues[1], changedFilter]);
        break;
    }
  };

  /*  const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  }; */

  if (allFavourites.length === 0) {
    return (
      <Grid>
        <Typography variant="h4" style={{ textAlign: "center", marginTop: "250px" }}>
          There are no movies in your favourites list.
        </Typography>
        <Grid style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to={`/`}>
            <Button variant="outlined" size="medium" color="primary">
              Add some movies
            </Button>
          </Link>
        </Grid>
      </Grid>
    );
  }

  else return (
    <>
      <PageTemplate
        title="Favourite Movies"
        movies={displayMovies}
        action={(movie) => {
          return (
            <>
              <AddToFavouritesIcon movie={movie}></AddToFavouritesIcon>
              <PlaylistAddIcon movie={movie}></PlaylistAddIcon>
              <WriteReview movie={movie} />
            </>
          );
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        releaseYearFilter={filterValues[2].value}
      />
    </>
  );
};

export default MoviesFavouritePage;