import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} );

  const [favourites, setFavourites] = useState([]);

  const [playlist, setPlaylist] = useState([]);
  
  /*const addToFavourites = (movie) => {
      let updatedFavourites = [...favourites];
      if (!favourites.includes(movie.id)) {
          updatedFavourites.push(movie.id);
      }
      setFavourites(updatedFavourites);
      console.log(updatedFavourites);
  };

  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  }; */

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

  /*const addToPlaylist = (movie) => {
      let updatedPlaylist = [...playlist];
      if (!playlist.includes(movie.id)) {
          updatedPlaylist.push(movie.id);
      }
      setPlaylist(updatedPlaylist);
      console.log(updatedPlaylist);
    };

  const removeFromPlaylist = (movie) => {
    setPlaylist(playlist.filter((mId) => mId !== movie.id));
  }; */

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

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        addReview,
        playlist,
        addToPlaylist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;