import React from "react";
import PageTemplate from "../components/templatePeopleListPage";
import {getTrendingPeople} from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import PersonFilterUI, {
  nameFilter,
//  jobFilter,
} from "../components/personFilterUI";

 const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};
/* const jobFiltering = {
  name: "job",
  value: "0",
  condition: jobFilter,
};*/

const PeopleTrendingPage = () => {
  const { data, error, isLoading, isError } = useQuery("trendingpeople", getTrendingPeople);
   const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
 //   [nameFiltering, jobFiltering]
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
      <PersonFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
      />
    </>
  );
};

export default PeopleTrendingPage;