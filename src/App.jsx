import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { MoviePortal } from "./components/MoviePortal";

const App = () => {
  const apiKey = import.meta.env.VITE_MOVIESNAP_APIKEY;
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<MoviePortal apiKey={apiKey} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
