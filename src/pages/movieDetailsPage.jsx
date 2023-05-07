import React from "react";
import { useParams } from "react-router-dom";

import MovieDetails from "../components/movieDetails";
import SimilarMovies from "../components/similarMovies";
import MovieCredits from "../components/movieCredits";
import AllMoviePosters from "../components/movieAllPosters"
import PageTemplate from "../components/templateMoviePage";
//import useMovie from "../hooks/useMovie";
import { getMovie } from '../api/api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const MovieDetailsPage = () => {
  const { id } = useParams();
  //  const [movie] = useMovie(id);

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <br></br>
            <AllMoviePosters movie={movie} />
            <br></br>
            <MovieCredits movie={movie} />
            <br></br>
            <SimilarMovies movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
