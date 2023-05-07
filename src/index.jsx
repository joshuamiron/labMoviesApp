import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import MoviesFavouritePage from "./pages/moviesFavouritePage";
import MoviesUpcomingPage from "./pages/moviesUpcomingPage";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import MoviesPopularPage from "./pages/moviesPopularPage";
import MoviesTrendingPage from "./pages/moviesTrendingPage";
import PersonPage from "./pages/personDetailsPage";
import PeopleTrendingPage from './pages/peopleTrendingPage';
import MyPlaylistPage from './pages/myPlaylistPage';
import MyMadeupMoviesPage from './pages/myMadeupMoviesPage';
import PeopleFavouritePage from "./pages/peopleFavouritePage";
import TVListPage from "./pages/tvShowListPage";
import TVShowPage from "./pages/tvShowDetailsPage";
import PeoplePopularPage from './pages/peoplePopularPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = ({ children }) => {
  return (

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/movies/myplaylist" element={<MyPlaylistPage />} />
            <Route path="/movies/mymadeupmovies" element={<MyMadeupMoviesPage />} />
            <Route path="/movies/upcoming" element={<MoviesUpcomingPage />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
            <Route path="/movies/popular" element={<MoviesPopularPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/movies/favourites" element={<MoviesFavouritePage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/movies/trending" element={<MoviesTrendingPage />} />
            <Route path="/people/trending" element={<PeopleTrendingPage />} />
            <Route path="/people/popular" element={<PeoplePopularPage />} />
            <Route path="/people/:id" element={<PersonPage />} />
            <Route path="/people/favourites" element={<PeopleFavouritePage />} />
            <Route path="/tv/shows" element={<TVListPage />} />
            <Route path="/tv/:id" element={<TVShowPage />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
