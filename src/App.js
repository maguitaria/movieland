import React from "react";
import {  Link, HashRouter, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList.jsx";
import "./css/App.css";
import MovieDetail from "./pages/MovieDetail.jsx";
import Navbar from "./components/Navbar.jsx";
import Signup from "./pages/SignupPage.jsx"
import Login from "./pages/LoginPage.jsx"
import Logout from "./pages/Logout.jsx"


const App = () => {
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <h2 style={{ color: "black" }}>Best Movies of your choice!</h2>
      <HashRouter basename="/">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
