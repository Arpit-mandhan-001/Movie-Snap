// const API_KEY = "";

export const fetchMovies = async (
  apiKey,
  searchText,
  moviesCallback,
  errorCallback,
  finallyCallback
) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchText}&apikey=${apiKey}`
    );
    const data = await response.json();

    if (data.Response === "True") {
      const movieDetailsPromises = data.Search.map((movie) =>
        fetchMovieDetails(movie.imdbID, apiKey, errorCallback)
      );
      const movieDetails = await Promise.all(movieDetailsPromises);
      const validMovies = movieDetails.filter(Boolean);

      console.log("✔ Valid movies:", validMovies);
      moviesCallback(validMovies);
      errorCallback(null);
    } else {
      moviesCallback([]);
      errorCallback(data.Error);
    }
  } catch (err) {
    moviesCallback([]);
    errorCallback("An error occurred while fetching data.");
  } finally {
    if (typeof finallyCallback === "function") {
      finallyCallback();
    }
  }
};

const fetchMovieDetails = async (id, apiKey, errorCallback) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&plot=full&apikey=${apiKey}`
    );
    const data = await response.json();

    if (data.Response === "True") {
      return data;
    } else {
      console.warn("Invalid movie:", id, data.Error);
      return null;
    }
  } catch (err) {
    console.error("Movie details fetch error:", err);
    errorCallback("An error occurred while fetching movie details.");
    return null;
  }
};
