import React, { useState } from "react";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import Pagination from '@mui/material/Pagination';

import PageTemplate from "../components/templatePeopleListPage";
import Spinner from "../components/spinner";
import {getTrendingPeople} from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import PersonFilterUI, {nameFilter} from "../components/personFilterUI";

const styles = {
  pagination: {
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

const PeopleTrendingPage = () => {
  
  //---- Set initial page
  const [page, setPage] = useState(1);

  //---- Pass page to getMovies API endpoint
  const { data, error, isLoading, isError } = useQuery(["trendingpeople", page], () =>
  getTrendingPeople(page)
  );
  
  //const { data, error, isLoading, isError } = useQuery("trendingpeople", getTrendingPeople);

   const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [nameFiltering]
  ); 

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

  const people = data ? data.results : [];

  const displayedPeople = filterFunction(people);

  return (
    <>
      <PageTemplate
        title='Trending People'
        people={displayedPeople}
      />
      <Grid item container spacing={1} sx={styles.pagination}>
        <Pagination
          count={100}
          page={page}
          onChange={(event, value) => setPage(value)}
          size="large"
        />
      </Grid>
      <PersonFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
      />
    </>
  );
};

export default PeopleTrendingPage;