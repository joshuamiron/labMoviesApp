//import React from "react";
import React, { useState } from "react";
import { useQuery } from "react-query";

import PageTemplate from '../components/templateMovieListPage'
import Spinner from "../components/spinner";
import {getMovies} from "../api/tmdb-api";
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



const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);
  const {filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering, releaseYearFiltering]
  );
  
 const [sortOrder, setSortOrder] = useState("title-asc");

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const changeFilterValues = (type, value) => {
    console.log("changeFilterValues called on homePage");
  const changedFilter = { name: type, value: value };
    
   switch(type) {
      case "title":
        console.log("title");
        console.log(changedFilter);
        setFilterValues([changedFilter, filterValues[1], filterValues[2]]);
        break;
      case "genre":
        console.log("genre");
        console.log(changedFilter);
        setFilterValues([filterValues[0], changedFilter, filterValues[2]]);
        break;
      case "releaseYear":
        console.log("release year");
        console.log(changedFilter);
        setFilterValues([filterValues[0], filterValues[1], changedFilter]);
        break;

    } 
  };

  function changeSortOrder(value) {
    setSortOrder(value);
  }

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
      //console.log(`Comparing ${key(a)} and ${key(b)}`);
      return reverse * (key(a) > key(b) ? 1 : -1);
   //     return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
  }

  const sortMovies = (value, movieList) => {
      console.log("Sort Order called on homePage to " + value);
      //sortOrder = value;
      switch(value)
      {
      case "title-asc":
        movieList.sort(sort_by('title', false, (a) => a.toUpperCase()) );
        break;
      case "title-desc":
        console.log("Home Page - Sort Switch - title-desc");
        movieList.sort(sort_by('title', true, (a) => a.toUpperCase()) );
        break;
      case "vote_average-asc":
        movieList.sort(sort_by('vote_average', false, parseFloat) );
        break;
      case "vote_average-desc":
        movieList.sort(sort_by('vote_average', true, parseFloat) );
        break;    
        
      }
  };
  //-------- The original filter   --------//
      /* const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };  */
  //-------------------------------------//

  const movies = data ? data.results : [];
  
  //console.log("Current sort " + sortOrder);

  //movies.sort(sort_by('title', false, (a) => a.toUpperCase()) );
  const displayedMovies = filterFunction(movies);

  sortMovies(sortOrder, displayedMovies);

  return (
    <>
      <PageTemplate
        title='Discover Movies'
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
        sortOrder={sortOrder}
        onSortOrderChange={changeSortOrder}
      />
    </>
  );
};

export default HomePage;
