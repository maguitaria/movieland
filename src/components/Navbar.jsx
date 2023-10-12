import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const data = [
    {
      icon: "fire",
      name: "Trending",
      link: "/",
    },
    {
      icon: "film",
      name: "Movies",
      link: "/movieland",
    },
    {
      icon: "tv",
      name: "TV Series",
      link: "/tv",
    },
    {
      icon: "search",
      name: "Search",
      link: "/search",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center bg-dark footer">
          {data.map((item) => (
            <NavLink
              to={item.link}
              key={item.link}

              className="nav-link"
            >
              <button className="col-sm-2 col-md-2 btn btn-dark">
                <span className="bi bi-" aria-hidden="true"></span> {/* Use Bootstrap icon class */}
                <br />
                <h5 className="pt-1 fs-6">{item.name}</h5>
              </button>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
