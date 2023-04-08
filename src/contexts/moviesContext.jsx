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
  
  const addReview = (review) => {
    const newId = myReviews.length + 1;
    console.log("myReviews length is " + myReviews.length);
    const newReview = { ...review, id: newId};
    myReviews.push( newReview );
    setMyReviews( myReviews );
  };

   const addMadeupMovie = (movie) => {
    const newId = madeupMovies.length + 1;
    console.log("madeupMovies length is " + madeupMovies.length);
    const newMovie = { ...movie, id: newId};
    madeupMovies.push( newMovie );
    setMyMadeupMovies( madeupMovies );
    console.log(`Made up movie ${newMovie.title} added with an ID of ${newMovie.id}`);
    console.log(`Made-up movies is now ${JSON.stringify(madeupMovies)} `);
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
        madeupMovies,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;