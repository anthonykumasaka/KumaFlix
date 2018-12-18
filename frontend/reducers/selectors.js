
export const genreSelector = (movies, genre) => {
  return movies.filter(movie => movie.genre === genre);
}; 

