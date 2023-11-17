  export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
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
  
  export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
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
  
  export const getGenres = async () => {
    return fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
  
    if (!id) {
      throw new Error('Invalid movie ID ' + id);
    }
  
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };

  export const getMovieImages2 = ({ id }) => {
    if (!id) {
      return Promise.resolve(null);
    }
  
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };
  
  

  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

export const getUpcomingMovies = () => {
  
  return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}`
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

export const getLatestMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .then((data) => {
      // console.log("Data from API:(movies)", data);
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getPopularMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .then((data) => {
      // console.log("Data from API:(movies)", data);
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getRecommendations = (movieId) => {
  if (!movieId) {
    throw new Error('Invalid movie ID');
  }

  console.log("Calls the function")
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .then((data) => {
      // console.log("Data from API:(movies)", data);
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getMovieCredits = (movieId) => {
  if (!movieId) {
    throw new Error('Invalid movie ID');
  }

  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .then((data) => {
      // console.log("Data from API:(movies)", data);
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getActorImages = (person_id) => {
  if (!person_id) {
    throw new Error('Invalid movie ID');
  }

  //console.log("Calls the function")
  return fetch(
    `https://api.themoviedb.org/3/person/${person_id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getActorsMovies = (person_id) => {
  if (!person_id) {
    throw new Error('Invalid movie ID');
  }

  //console.log("Calls the function")
  return fetch(
    `https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .then((data) => {
      // console.log("Data from API:(image)", data);
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getTrendingMovies = () => {
  //console.log("Calls the function")
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .then((data) => {
      // console.log("Data from API:(image)", data);
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getTrendingActors = () => {
  //console.log("Calls the function")
  return fetch(
    `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .then((data) => {
      //console.log("Data from API:(image)", data);
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getActorsDetails = (person_id) => {
  if (!person_id) {
    throw new Error('Invalid movie ID');
  }

  return fetch(
    `https://api.themoviedb.org/3/person/${person_id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .then((data) => {
      // console.log("Data from API:(image)", data);
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getMoviesExternalIds = (movie_id) => {
  if (!movie_id) {
    throw new Error('Invalid movie ID');
  }

  return fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/external_ids?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .then((data) => {
       console.log("Data from API:(image)", data);
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

