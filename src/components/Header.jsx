import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark border-bottom border-secondary px-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white">
          🎬 Movie Snap
        </Link>
      </div>
    </nav>
  );
};
