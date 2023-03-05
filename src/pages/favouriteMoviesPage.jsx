import React from "react";
import PageTemplate from "../components/templateMovieListPage";

const FavouriteMoviesPage = (props) => {
    const toDo = () => true;
    // Get movies from local storage.
    const movies = JSON.parse(localStorage.getItem("favourites"));

    return (
        <PageTemplate
            title="Favourite Movies"
            movies={movies}
            selectFavourites={toDo}>
        </PageTemplate>
    );
};

export default FavouriteMoviesPage;