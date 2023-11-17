import React from "react";
import { useQuery } from "react-query";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getActorImages } from "../../api/tmdb-api";
import { Link } from "react-router-dom";

const ActorCard = ({ actor }) => {
  const { data: actorImages, error } = useQuery(["actorImages", actor.id], () => getActorImages(actor.id));
  
  if (error) {
    console.error("Error fetching actor images:", error);
  }

  const firstActorImage = actorImages?.profiles[0]?.file_path;

  return (
    <Card sx={{ marginTop: 1, maxWidth: 300, maxHeight: 300 }}>
      {firstActorImage && (
        <Link to={`/movies/:id/actors/${actor.id}`}>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500${firstActorImage}`}
          alt={actor.name}
        />
        </Link>
      )}
      <CardContent>
        <Typography variant="h10" component="div">
          {actor.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActorCard;
