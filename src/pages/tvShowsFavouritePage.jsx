import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useQueries } from "react-query";

import PageTemplate from '../components/templateTVShowListPage'
import { MoviesContext } from "../contexts/moviesContext";
import { getTVShows } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import TVShowFilterUI, { tvShowNameFilter } from "../components/tvShowFilterUI";
import AddToFavouriteTVShowsIcon from '../components/cardIcons/addToFavouriteTVShows'
import TVPlaylistAddIcon from '../components/cardIcons/addToPlaylistTVShows'

const nameFiltering = {
  name: "name",
  value: "",
  condition: tvShowNameFilter,
};

const TVShowFavouritePage = () => {
  const { favouriteTVShows: tvIds } = useContext(MoviesContext);
  console.log(tvIds);

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [nameFiltering]
  );

  // Create an array of queries and run them in parallel.
  const favouriteTVShowQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTVShows,
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTVShowQueries.find((t) => t.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allFavouriteTVShows = favouriteTVShowQueries.map((q) => q.data);
  console.log(allFavouriteTVShows);
  const displayTVShows = allFavouriteTVShows
    ? filterFunction(allFavouriteTVShows)
    : [];

  const changeFilterValues = (type, value) => {
    const changedFilter = { name: type, value: value };

    //-------- The original filter   --------//
    /* const updatedFilterSet =
    type === "title"
      ? [changedFilter, filterValues[1]]
      : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };  */
    //-------------------------------------//

    switch (type) {
      case "name":
        setFilterValues([changedFilter, filterValues[1], filterValues[2]]);
        break;
    }
  };

  if (allFavouriteTVShows.length === 0) {
    return (
      <Grid>
        <Typography variant="h4" style={{ textAlign: "center", marginTop: "250px" }}>
          There are no TV shows in your favourites list.
        </Typography>
        <Grid style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to={`/tv/shows`}>
            <Button variant="outlined" size="medium" color="primary">
              Add some TV shows
            </Button>
          </Link>
        </Grid>
      </Grid>
    );
  }

  else return (
    <>
      <PageTemplate
        title="Favourite TV Shows"
        tvShows={displayTVShows}
        action={(tv) => {
          return (
            <>
              <AddToFavouriteTVShowsIcon tv={tv}></AddToFavouriteTVShowsIcon>
              <TVPlaylistAddIcon tv={tv}></TVPlaylistAddIcon>
            </>
          );
        }}
      />
      <TVShowFilterUI
        onFilterValuesChange={changeFilterValues}
        tvShowNameFilter={filterValues[0].value}
      />
    </>
  );
};

export default TVShowFavouritePage;