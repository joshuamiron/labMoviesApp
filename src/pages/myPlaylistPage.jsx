import React, { useContext } from "react";
import { useQueries } from "react-query";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
//import MovieFilterUI, { titleFilter } from "../components/movieFilterUI";
import MovieFilterUI, { titleFilter, genreFilter, releaseYearFilter } from "../components/movieFilterUI";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import PlaylistAddIcon from "../components/cardIcons/addToPlaylist";
import { getMovie } from "../api/api";
import useFiltering from "../hooks/useFiltering";
import { MoviesContext } from "../contexts/moviesContext";

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

const MyPlaylistPage = () => {
  const { playlist: movieIds } = useContext(MoviesContext);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering, releaseYearFiltering]
  );

  // Create an array of queries and run them in parallel.
  const myPlaylistQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = myPlaylistQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allPlaylist = myPlaylistQueries.map((q) => q.data);
  const displayMovies = allPlaylist
    ? filterFunction(allPlaylist)
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

  /* const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  }; */

  if (allPlaylist.length === 0) {
    return (
      <Grid>
        <Typography variant="h4" style={{ textAlign: "center", marginTop: "250px" }}>
          There are no movies in your playlist.
        </Typography>
        <Grid style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to={`/movies/upcoming`}>
            <Button variant="outlined" size="medium" color="primary">
              Browse upcoming movies
            </Button>
          </Link>
        </Grid>
      </Grid>
    );
  }

  else return (
    <>
      <PageTemplate
        title="My Playlist"
        movies={displayMovies}
        action={(movie) => {
          return (
            <>
              <AddToFavouritesIcon movie={movie}></AddToFavouritesIcon>
              <PlaylistAddIcon movie={movie}></PlaylistAddIcon>
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

export default MyPlaylistPage;