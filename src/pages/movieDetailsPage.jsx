import React, {useState, useEffect}  from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import {getMovie} from "../api/tmdb-api";

const MovieDetailsPage = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie}></MovieDetails>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for API data</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
