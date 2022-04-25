import "./styles.css";
import React from "react";
import { useState } from "react";
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import SideNav from "./SideNav.js";
import Card from "./Card.js";

const Home = () => {
  const [filter, setFilter] = useState("");
  const getFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <Header />
      <NavBar />
      <div class="container main">
        <div class="row">
          <div class="col-lg-3">
            <SideNav class="fixed" getFilter={getFilter} />
          </div>
          <div class="col-lg-9 card-container">
            <Card filter={filter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
