import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useQueries } from "react-query";

import PageTemplate from "../components/templatePeopleListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { getPerson } from '../api/tmdb-api'
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import PersonFilterUI, { nameFilter } from "../components/personFilterUI";
import AddToFavouritePeopleIcon from '../components/cardIcons/addToFavouritePeople'

const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};

const PeopleFavouritePage = () => {
  const { favouritePeople: personIds } = useContext(MoviesContext);
  console.log(personIds);

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [nameFiltering]
  );

  // Create an array of queries and run them in parallel.
  const favouritePeopleQueries = useQueries(
    personIds.map((personId) => {
      return {
        queryKey: ["person", { id: personId }],
        queryFn: getPerson,
      };
    })
  );
  console.log(personIds);

  // Check if any of the parallel queries is still loading.
  const isLoading = favouritePeopleQueries.find((p) => p.isLoading === true);

  //---- Set the initial sort to nothing
  //const [sortOrder, setSortOrder] = useState("");

  if (isLoading) {
    return <Spinner />;
  }

  const allFavouritePeople = favouritePeopleQueries.map((q) => q.data);
  const displayPeople = allFavouritePeople
    ? filterFunction(allFavouritePeople)
    : [];

  const changeFilterValues = (type, value) => {
    const changedFilter = { name: type, value: value };

    switch (type) {
      case "name":
        setFilterValues([changedFilter, filterValues[1], filterValues[2]]);
        break;
    }
  };

  /*  const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  }; */

  if (allFavouritePeople.length === 0) {
    return (
      <Grid>
        <Typography variant="h4" style={{ textAlign: "center", marginTop: "250px" }}>
          There are no people in your favourites list.
        </Typography>
        <Grid style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to={`/people/trending`}>
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
        nameFilter={filterValues[0].value}
      />
    </>
  );
};

export default PeopleFavouritePage;