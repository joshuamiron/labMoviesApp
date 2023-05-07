import React, { useState } from "react";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import Pagination from '@mui/material/Pagination';

import PageTemplate from "../components/templatePeopleListPage";
import Spinner from "../components/spinner";
import { getTrendingPeople } from "../api/api";
import useFiltering from "../hooks/useFiltering";
import PersonFilterUI, { nameFilter } from "../components/personFilterUI";
import AddToFavouritePeopleIcon from '../components/cardIcons/addToFavouritePeople'

const styles = {
  paginationContainer: {
    marginTop: 2,
    size: "large",
    justifyContent: "right",
    color: "primary",
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

  //---- Pass page to getTrendingPeople API endpoint
  const { data, error, isLoading, isError } = useQuery(["trendingpeople", page], () =>
    getTrendingPeople(page)
  );

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
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

  const sortPeople = (value, personList) => {
    switch (value) {
      case "title-asc":
        personList.sort(sort_by('name', false, (a) => a.toUpperCase()));
        break;
      case "title-desc":
        personList.sort(sort_by('name', true, (a) => a.toUpperCase()));
        break;
      case "popularity-asc":
        personList.sort(sort_by('popularity', false, parseFloat));
        break;
      case "popularity-desc":
        personList.sort(sort_by('popularity', true, parseFloat));
        break;
    }
  };

  const people = data ? data.results : [];

  const displayedPeople = filterFunction(people);

  sortPeople(sortOrder, displayedPeople);

  return (
    <>
      <PageTemplate
        title='Trending People'
        people={displayedPeople}
        action={(person) => {
          return (
            <>
              <AddToFavouritePeopleIcon person={person}></AddToFavouritePeopleIcon>
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
      <PersonFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
        sortOrder={sortOrder}
        onSortOrderChange={changeSortOrder}
      />
    </>
  );
};

export default PeopleTrendingPage;