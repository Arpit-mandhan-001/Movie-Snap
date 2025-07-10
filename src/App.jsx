import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { MoviePortal } from "./components/MoviePortal";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<MoviePortal />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
