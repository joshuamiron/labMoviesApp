import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} );
  const [favourites, setFavourites] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [madeupMovies, setMyMadeupMovies] = useState([]);

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (updatedFavourites.includes(movie.id)) {
      updatedFavourites = updatedFavourites.filter((mId) => mId !== movie.id);
      console.log(`${updatedFavourites} removed`);
      console.log(`Favourites are now ${updatedFavourites}`);
    } else {
      updatedFavourites.push(movie.id);
      console.log(`${updatedFavourites} added`);
      console.log(`Favourites are now ${updatedFavourites}`);
    }
    setFavourites(updatedFavourites);
  };

  const addToPlaylist = (movie) => {
    let updatedPlaylist = [...playlist];
    if (updatedPlaylist.includes(movie.id)) {
      updatedPlaylist = updatedPlaylist.filter((mId) => mId !== movie.id);
      console.log(`${updatedPlaylist} removed`);
      console.log(`Playlist is now ${updatedPlaylist}`);
    } else {
      updatedPlaylist.push(movie.id);
      console.log(`${updatedPlaylist} added`);
      console.log(`Playlist is now ${updatedPlaylist}`);
    }
    setPlaylist(updatedPlaylist);
  };
  
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addMadeupMovie = (movie) => {
    //let updatedMadeupMovies = ([...madeupMovies, { ...madeupMovie, id: madeupMovies.length }]);
    let updatedMadeupMovies = [...madeupMovies];
    updatedMadeupMovies.push(movie);
    setMyMadeupMovies( updatedMadeupMovies );
    console.log(`Made up movie ${movie.title} added`);
    console.log(`Made-up movies is now ${JSON.stringify(updatedMadeupMovies)}`);
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        addReview,
        playlist,
        addToPlaylist,
        addMadeupMovie,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;