import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useQueries } from "react-query";

import PageTemplate from "../components/templatePeopleListPage";
import { MoviesContext } from "../contexts/moviesContext";
import {getPerson} from '../api/tmdb-api'
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import PersonFilterUI, {nameFilter} from "../components/personFilterUI";
import AddToFavouritePeopleIcon from '../components/cardIcons/addToFavouritePeople'

const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
  };

const PeopleFavouritePage = () => {
  const { favouritePeople: peopleIds } = useContext(MoviesContext);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [nameFiltering]
  );

   // Create an array of queries and run them in parallel.
   const favouritePeopleQueries = useQueries(
    peopleIds.map((personId) => {
      return {
        queryKey: ["person", { id: personId }],
        queryFn: getPerson,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouritePeopleQueries.find((p) => p.isLoading === true);

  //---- Set the initial sort to nothing
  const [sortOrder, setSortOrder] = useState("");
  
  if (isLoading) {
    return <Spinner />;
  }

  const allFavouritePeople = favouritePeopleQueries.map((q) => q.data);
  const displayPeople = allFavouritePeople
    ? filterFunction(allFavouritePeople)
    : [];

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
      function(x) {
        return primer(x[field])
      } :
      function(x) {
        return x[field]
        
      };
  
    reverse = !reverse ? 1 : -1;
  
    return function(a, b) {
      return reverse * (key(a) > key(b) ? 1 : -1);
    }
  }

  const sortPeople = (value, personList) => {
    switch(value)
    {
    case "title-asc":
      personList.sort(sort_by('name', false, (a) => a.toUpperCase()) );
      break;
    case "title-desc":
      personList.sort(sort_by('name', true, (a) => a.toUpperCase()) );
      break;
    case "popularity-asc":
      personList.sort(sort_by('popularity', false, parseFloat) );
      break;
    case "popularity-desc":
      personList.sort(sort_by('popularity', true, parseFloat) );
      break;    
    }
  };

  const people = data ? data.results : [];

  const displayedPeople = filterFunction(people);

  sortPeople(sortOrder, displayedPeople);

  if (allFavouritePeople.length === 0) {
    return (
      <Grid>
        <Typography variant="h4" style={{textAlign: "center", marginTop: "250px"}}>
          There are no people in your favourites list.
        </Typography>
        <Grid style={{textAlign: "center", marginTop: "50px"}}>
          <Link to={`/peopleTrendingPage`}>
          <Button variant="outlined" size="medium" color="primary">
            Add some people
          </Button>
        </Link>
      </Grid>
    </Grid>
    );
  }

  else return (
    <>
      <PageTemplate
        title="Favourite People"
        people={displayPeople}
        action={(person) => {
          return (
            <>
              <AddToFavouritePeopleIcon person={person}></AddToFavouritePeopleIcon>
            </>
          );
        }}
      />
      <PersonFilterUI
        onFilterValuesChange={changeFilterValues}
        nameilter={filterValues[0].value}
        sortOrder={sortOrder}
        onSortOrderChange={changeSortOrder}
      />
    </>
  );
};

export default PeopleFavouritePage;