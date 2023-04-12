import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} );
  const [favourites, setFavourites] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [madeupMovies, setMyMadeupMovies] = useState([]);
  const [favouritePeople, setFavouritePeople] = useState([]);


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
    const newId = madeupMovies.length + 1;
    const newMovie = { ...movie, id: newId};
    madeupMovies.push( newMovie );
    setMyMadeupMovies( madeupMovies );
  }; 

  const deleteMadeupMovie = (movie) => {
    madeupMovies = madeupMovies.filter((movie) => movie.id !== movie.id);
    setMyMadeupMovies( madeupMovies );
  }; 

  const addToFavouritePeople = (person) => {
    let updatedFavouritePeople = [...favouritePeople];
    if (updatedFavouritePeople.includes(person.id)) {
      updatedFavouritePeople = updatedFavouritePeople.filter((pId) => pId !== person.id);
      console.log(`${updatedFavouritePeople} removed`);
      console.log(`Favourites are now ${updatedFavouritePeople}`);
    } else {
      updatedFavouritePeople.push(person.id);
      console.log(`${updatedFavouritePeople} added`);
      console.log(`Favourites are now ${updatedFavouritePeople}`);
    }
    setFavouritePeople(updatedFavouritePeople);
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
        deleteMadeupMovie,
        favouritePeople,
        addToFavouritePeople,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;