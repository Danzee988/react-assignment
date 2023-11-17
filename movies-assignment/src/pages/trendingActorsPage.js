import React from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PageTemplate from "../components/templateTrendingActors"
import { getActorImages, getMovieCredits, getTrendingActors } from "../api/tmdb-api";
import { useParams } from 'react-router-dom'; 

const TrendingActorsPage = () => {
  //const { id } = useParams(); 
  const { data: trendingActors, error, isLoading, isError } = useQuery(
   'trending', getTrendingActors
  );
  //console.log(id)

//   const { data: castImages } = useQuery(
//     ['movieCredits', { id: trendingActors.id }],
//     () => getActorImages(trendingActors.id )
//   );
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = trendingActors.results;
  const actorImages = actors[0].profile_path
   console.log("IMAGES " + actorImages)
  // console.log("Crew:");
  // movieCrew.forEach((crewMember, index) => {
  //   //if(crewMember.department == "Editing")
  // console.log(`Member ${index + 1}:`, crewMember);
// });


  return (
    <PageTemplate
      actors={actors}
      actorImages={actorImages}
      title= "Trending Actors"
    />
  );
};

export default TrendingActorsPage;
