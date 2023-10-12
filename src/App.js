import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList.jsx";
import "./css/App.css";
import MovieDetail from "./pages/MovieDetail.jsx";
import LeftNavbar from "./components/Navbar.jsx";
import Signup from "./pages/SignupPage.jsx"
import Login from "./pages/LoginPage.jsx"
import Logout from "./pages/Logout.jsx"

const App = () => {
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <h2 style={{ color: "white" }}>Best Movies of your choice!</h2>

      <Router>
        <LeftNavbar />
        <Logout />
        <Routes>
          <Route path="/movieland" element={<MovieList />} />
          <Route path="/movieland/movie/:id" element={<MovieDetail />} />
          <Route path="/movieland/signup" element={<Signup />} />
          <Route path="/movieland/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
