import React from "react";
import { useQuery } from "react-query";

import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import {getUpcomingMovies} from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, { titleFilter, genreFilter, releaseYearFilter } from "../components/movieFilterUI";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist'

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};

const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const releaseYearFiltering = {
  name: "releaseYear",
  value: "",
  condition: releaseYearFilter,
};

const MoviesUpcomingPage = () => {
  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering, releaseYearFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type, value) => {
  const changedFilter = { name: type, value: value };

  switch(type) {
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
/*    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  }; */

  const sort_by = (field, reverse, primer) => {

    const key = primer ?
      function(x) {
        return primer(x[field])
      } :
      function(x) {
        return x[field]
      };
  
    reverse = !reverse ? 1 : -1;
  
    return function(a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
  }

  const movies = data ? data.results : [];
  console.log("About to sort");
  movies.sort(sort_by('title', false, (a) => a.toUpperCase()) );
  const displayedMovies = filterFunction(movies);

  return (
    <>
      <PageTemplate
        title='Upcoming Movies'
        movies={displayedMovies}
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

export default MoviesUpcomingPage;