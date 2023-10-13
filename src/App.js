import React from "react";
import {  Link, HashRouter, Routes, Route } from "react-router-dom";
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
      <HashRouter basename="/">
        <ul>
          <li>
            <Link to="/login"> Login</Link>
          </li>
          <br />
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Logout />
        Navbar
        <LeftNavbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
