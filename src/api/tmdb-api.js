export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .then((data) => {
      console.log("getMovies called");
      console.log(data); // log the response data
      return data;
    })
    .catch((error) => {
      throw error
    });
  };


  export const getMovie = (args) => {
    //console.log(args)
    const [, idPart] = args.queryKey;
    const {id} = idPart;

    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
    });
  };
  
  export const getGenres = () => {
    return fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
    ).then ((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
    });
  };
  
  export const getMovieImages = ({queryKey}) => {
    const [, idPart] = queryKey;
    const {id} = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
    });
  };
  
  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results);
        return json.results;
      });
  };

export const getUpcomingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
  });
};

export const getMovieCredits = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json.results);
      return json.results;
    });
};

export const getSimilarMovies = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      //console.log(json.results);
      return json.results;
    });
};

export const getPopularMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .then((data) => {
    console.log("getPopularMovies called");
    console.log(data); // log the response data
    return data;
  })
  .catch((error) => {
    throw error
  });
};

export const getTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .then((data) => {
    console.log("getTrendingMovies called");
    console.log(data); // log the response data
    return data;
  })
  .catch((error) => {
    throw error
  });
};

//-------- People ---------------

export const getTrendingPeople = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/person/week?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
  });
};

export const getPerson = (args) => {
  //console.log(args)
  const [, idPart] = args.queryKey;
  const {id} = idPart;

  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
  });
};

export const getPersonImages = ({queryKey}) => {
  const [, idPart] = queryKey;
  const {id} = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
      
    }
    return response.json();
  })
  .catch((error) => {
    throw error
  });
};

export const getPersonMovieCredits = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json.results);
      return json.results;
    });
};