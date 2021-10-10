import React from "react";
import Button from "../component/Buttons/Buttons";
import { LyricTitle, SearchBar } from "../component/index";

const HomePage = (props) => {
  return (
    <>
      <SearchBar />
      <Button />
      <LyricTitle />
    </>
  );
};

export default HomePage;
