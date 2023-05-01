import React, { useState } from "react";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import Pagination from '@mui/material/Pagination';

import PageTemplate from '../components/templateTVShowListPage'
import { getTVShows } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
//import TVShowFilterUI, { nameFilter, genreFilter, firstAirDateFilter } from "../components/tvShowFilterUI";
import TVShowFilterUI, { nameFilter } from "../components/tvShowFilterUI";
//import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
//import PlaylistAddIcon from '../components/cardIcons/addToPlaylist'

const styles = {
  paginationContainer: {
    marginTop: 2,
    size: "large",
    justifyContent: "right",
  },
};

const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};

/*const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const firstAirDateFiltering = {
  name: "firstAirDate",
  value: "",
  condition: firstAirDateFilter,
};*/

const TVShowListPage = () => {

  //---- Set initial page
  const [page, setPage] = useState(1);

  //---- Pass page to getTVShows API endpoint
  const { data, error, isLoading, isError } = useQuery(["discover tv", page], () =>
    getTVShows(page)
  );

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    //[nameFiltering, genreFiltering, firstAirDateFiltering]
    [nameFiltering]
  );

  //---- Set the initial sort to nothing
  const [sortOrder, setSortOrder] = useState("");

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type, value) => {
    const changedFilter = { name: type, value: value };


    const updatedFilterSet =
      type === "name"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  /*switch(type) {
     case "name":
       console.log("name");
       console.log(changedFilter);
       setFilterValues([changedFilter, filterValues[1], filterValues[2]]);
       break;
     case "genre":
       console.log("genre");
       console.log(changedFilter);
       setFilterValues([filterValues[0], changedFilter, filterValues[2]]);
       break;
     case "firstAireDate":
       console.log("first air date");
       console.log(changedFilter);
       setFilterValues([filterValues[0], filterValues[1], changedFilter]);
       break;
   } 
 };*/

  function changeSortOrder(value) {
    setSortOrder(value);
  }

  const sort_by = (field, reverse, primer) => {
    const key = primer ?
      function (x) {
        return primer(x[field])
      } :
      function (x) {
        return x[field]

      };

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
      return reverse * (key(a) > key(b) ? 1 : -1);
    }
  }

  const sortTVShows = (value, tvShowList) => {
    switch (value) {
      case "name-asc":
        tvShowList.sort(sort_by('name', false, (a) => a.toUpperCase()));
        break;
      case "name-desc":
        tvShowList.sort(sort_by('name', true, (a) => a.toUpperCase()));
        break;
      case "vote_average-asc":
        tvShowList.sort(sort_by('vote_average', false, parseFloat));
        break;
      case "vote_average-desc":
        tvShowList.sort(sort_by('vote_average', true, parseFloat));
        break;
    }
  };

  const tvShows = data ? data.results : [];

  const displayedTVShows = filterFunction(tvShows);

  sortTVShows(sortOrder, displayedTVShows);

  return (
    <>
      <PageTemplate
        title='Discover TV Shows'
        tvShows={displayedTVShows}
        action={(tv) => {
          return (
            <>
              {/*<AddToFavouritesIcon tv={tv}></AddToFavouritesIcon>
              <PlaylistAddIcon tv={tv}></PlaylistAddIcon>*/}
            </>
          );
        }}
      />
      <Grid item container spacing={1} sx={styles.paginationContainer}>
        <Pagination
          count={100}
          page={page}
          onChange={(event, value) => setPage(value)}
          color="primary"
        />
      </Grid>
      <TVShowFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
        sortOrder={sortOrder}
        onSortOrderChange={changeSortOrder}
      />
    </>
  );
};

export default TVShowListPage;
