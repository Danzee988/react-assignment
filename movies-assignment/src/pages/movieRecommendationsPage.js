import React from "react";
import { useParams } from 'react-router-dom';
import PageTemplate from "../components/templatePopularMoviesPage";
import { getRecommendations } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import AddToWatchListIcon from '../components/cardIcons/addToWatchList'


const MovieRecommendationsPage = () => {
  const { id } = useParams();
   const { data: movie, error, isLoading, isError } = useQuery(
     ["movie", { id: id }],
     () => getRecommendations(id)
  );

 // console.log("Lists " + getLists(id))


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const popularMovies = movie.results;

  //console.log('Movies:', JSON.stringify(popularMovies, null, 2));

// Redundant, but necessary to avoid app crashing.
//  const popularList = popularMovies.filter(m => m.popularList)
//  localStorage.setItem('upcomingList', JSON.stringify(popularList))
//  const addToPopularList = (movieId) => true 

  //console.log('Movies:', JSON.stringify(movie, null, 2));
  return (
        <PageTemplate
          popularMovies={popularMovies}
          title="Recommended Movies"
          action={(movie) => {
            return <AddToWatchListIcon movie={movie} />
          }}
    />
  );
};

export default MovieRecommendationsPage;