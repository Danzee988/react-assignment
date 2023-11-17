# Assignment 1 - ReactJS app.

Name: Daniel Wolski

## Overview.

[A brief statement on the content of this repository.]
This is a movies database website. The website provides information about movies, such as upcoming, popular, latest added movies, the user is able to save movies into a favourits and watch lists, also the user can check the most popular actors and movies. There is a seperate page for each movie where the user can find detailed information about the movie and the cast that is in the movie, also each movie details page has several external links that lead to that movies external pages such as IMDB or Instagram pages, each cast member has their own details page which the user can access by clicking the actors image, on the actors details page the user can find things like the actors date of birth, their bibliograph and the movies that the actor has plaied in. 

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Get recommendations button added to the movie card, returns movie recommendations based on the movie the    button was clicked on.
+ Latest movies added to the siteheader
+ Popular movies added to the siteheader, returns the currently most popular movies
+ Trending menu added to the siteheader, returns two options a "Trending Actors" which displays a page of the top 20 actors of that day, the second option is "Trending Movies" which return the top 20 movies for that day 
+ Added several external links to the movies details page
+ On the movie details page a list with the most paid actors for that movie is displayed, when clicking on the actors image it opens up that actors details page.
+ Beside the list of actors there is a "View More" button which leads to the full cast of that movie.
+ In the actors page there is information about the actor and all the movies that actor was casted in.
+ In the filters card a vote average filter has been added which displays movies that range in the selected vote average.
+ In the filter card a sort order has been added that sorts the displayed movies depending on which option the user has selected

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Movie recommendations - /movies/:id/recommendations
+ Latest movies - /movies/latest
+ Popular movies - /movies/popular
+ A page with all the actors cast in the movie - /movies/:id/actors
+ Top actors trending today - /actors/trending/day
+ top movies trending today - /movies/trending/day
+ Details about a specific actor - /movies/:id/actors/:actorsid


## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /blogs - displays all published blogs.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ etc.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).