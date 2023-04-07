import React from "react";
import { useParams } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
//import usePerson from "../hooks/usePerson";
import {getPerson} from '../api/tmdb-api'
import {useQuery} from "react-query";
import Spinner from '../components/spinner';
//import PersonMovieCredits from "../components/personMovieCredits";
import AllPersonPhotos from "../components/personAllPhotos"

const PersonDetailsPage = () => {
  const { id } = useParams();
//  const [person] = usePerson(id);

const {data: person, error, isLoading, isError} = useQuery (
  ["person", {id: id}],
  getPerson
);

if (isLoading) {
  return <Spinner></Spinner>;
}

if (isError) {
  return <h1>{error.message}</h1>;
}

  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails person={person} />
            <br></br>
            <AllPersonPhotos person={person}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for person details</p>
      )}
    </>
  );
};

export default PersonDetailsPage;
