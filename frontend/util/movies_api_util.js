export const fetchMovies = (filters) => {
  return $.ajax({
    url: '/api/movies'
  });
};

export const fetchMovie = (id) => {
  return $.ajax({
    url: `/api/movies/${id}`
  });
}; 