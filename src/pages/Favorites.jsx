import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

export const Favorites = () => {
  const { favorites } = useMovieContext();

  // If there are favorite movies, render the favorites list
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  // If no favorites exist, show a message to the user
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}
