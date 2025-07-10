
export const MovieDetail = ({ movie }) => {
  return (
    <div className="card mb-4 bg-dark text-light shadow border border-secondary w-100">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/150x225?text=No+Image"
            }
            alt={movie.Title}
            className="img-fluid rounded-start h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8 d-flex flex-column justify-content-center p-3">
          <div className="card-body p-0">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text" style={{ fontSize: "0.95rem" }}>
              {movie.Plot && movie.Plot !== "N/A"
                ? movie.Plot
                : "Plot not available."}
            </p>
            <div className="d-flex gap-2 mt-3">
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-warning btn-sm"
              >
                IMDb
              </a>
              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                  movie.Title
                )} trailer`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-danger btn-sm"
              >
                Watch Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
