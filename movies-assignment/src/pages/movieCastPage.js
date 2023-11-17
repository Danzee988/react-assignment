import React from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PageTemplate from "../components/templateMovieCastPage"
import { getActorImages, getMovieCredits } from "../api/tmdb-api";
import { useParams } from 'react-router-dom'; // Import the useParams hook

const MovieCreditsPage = () => {
  const { id } = useParams(); // Extract the movieId from route params
  const { data: movieId, error, isLoading, isError } = useQuery(
    ['movieCredits', { id: id }],
    () => getMovieCredits(id)
  );
  console.log(id)

  const { data: castImages } = useQuery(
    ['movieCredits', { id: id }],
    () => getActorImages(id)
  );
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movieCast = movieId.cast; 
  //const movieCrew = movieId.crew;
  const actorImages = castImages
   console.log("IMAGES " + movieId)
  // console.log("Crew:");
  // movieCrew.forEach((crewMember, index) => {
  //   //if(crewMember.department == "Editing")
  // console.log(`Member ${index + 1}:`, crewMember);
// });


  return (
    <PageTemplate
      movieCast={movieCast}
      //movieCrew={movieCrew}
      actorImages={actorImages}
      title= "Movies Cast"
    />
  );
};

export default MovieCreditsPage;
