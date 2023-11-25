import React, { useContext } from "react";
import PageTemplate from "../components/templateWatchlistPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = () => {
  const {favorites: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const { data: movies, error, isLoading, isError } = useQuery(
    ["favorites", { ids: movieIds }],
    async () => {
      try {
        const movieData = await Promise.all(
          movieIds.map((id) => getMovie(id))
        );
        return movieData.filter(Boolean); // Remove any undefined entries
      } catch (error) {
        throw error;
      }
    }
  ); 
  // Check if any of the parallel queries is still loading.

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (<>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;
