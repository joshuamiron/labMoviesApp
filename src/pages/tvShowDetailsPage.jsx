import React from "react";
import { useParams } from "react-router-dom";

import TVShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTVShowPage";
import { getTVShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const TVShowDetailsPage = () => {
  const { id } = useParams();
  //  const [movie] = useMovie(id);

  const { data: tv, error, isLoading, isError } = useQuery(
    ["tv", { id: id }],
    getTVShow
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <PageTemplate tv={tv}>
            <TVShowDetails tv={tv} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV show details</p>
      )}
    </>
  );
};

export default TVShowDetailsPage;
