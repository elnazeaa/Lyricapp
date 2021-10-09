import React from "react";
import { LyricTitle, Navbar, SearchBar } from "../component/index";

const HomePage = (props) => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <LyricTitle />
    </>
  );
};

export default HomePage;
