export const fetchMovies = () => {
  return $.ajax({
    url: '/api/movies'
  });
};

export const fetchMovie = (id) => {
  return $.ajax({
    url: `/api/movies/${id}`
  });
}; 