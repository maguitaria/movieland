import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList.jsx";
import "./css/App.css";
import MovieDetail from "./pages/MovieDetail.jsx";
import LeftNavbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <h2 style={{ color: "white" }}>Best Movies of your choice!</h2>

      <Router>
        <LeftNavbar />
        <Routes>
          <Route path="/movieland" element={<MovieList />} />
          <Route path="/movieland/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
