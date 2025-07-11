import React, { useState } from "react";
import { fetchMovies } from "../Api/fetchMovies";
import { ErrorAlert } from "./ErrorAlert";
import { MovieDetail } from "./MovieDetail";

export const MoviePortal = ({apiKey}) => {
  const [searchInputText, setSearchInputText] = useState("");
  const [enteredSearchText, setEnteredSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSearchTextEnter = (e) => {
    e.preventDefault();
    setEnteredSearchText(searchInputText);
    setLoading(true);

    fetchMovies(apiKey, searchInputText, setMovies, setError, () => setLoading(false));
  };

  return (
    <>
      <div className="row justify-content-center mt-4">
        <div className="col-md-8 w-100">
          <form onSubmit={onSearchTextEnter}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Search Movie"
                className="form-control bg-dark text-white border-secondary"
                value={searchInputText}
                onChange={(e) => setSearchInputText(e.target.value)}
              />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center text-white mt-4">
          <div className="spinner-border text-light" role="status"></div>
        </div>
      )}

      {/* Error Alert */}
      {error && (
        <ErrorAlert error={error} enteredSearchText={enteredSearchText} />
      )}

      {/* Welcome Message */}
      {!enteredSearchText && !error && movies.length === 0 && !loading && (
        <p className="text-white mt-4 fs-5 text-center">
          👋 Welcome to <strong>Movie Snap</strong>! Start by typing a movie name above.
        </p>
      )}

      {/* Result Count */}
      {movies.length > 0 && !loading && (
        <p className="text-white mt-3">
          Showing {movies.length} movies for "<strong>{enteredSearchText}</strong>"
        </p>
      )}

      {/* Movie Cards */}
      <div className="row">
        {movies.map((movie, index) => {
          return (
            <div key={movie.imdbID || index} className="col-12">
              <MovieDetail movie={movie} />
            </div>
          );
        })}
      </div>
    </>
  );
};
