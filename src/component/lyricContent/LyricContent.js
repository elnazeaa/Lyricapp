import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LyricContext } from "../../context/LyricContext";

const LyricContent = ({ lyrics, artistName, songName }) => {
  const lyricContent = lyrics.lyrics;
  const { image } = useContext(LyricContext);
  //   const extrCont = lyricContent.replace(/(\n\r|\n|\r)/g, `<br/>`);

  return (
    <div className="wrapper">
      <Wrapper className="container">
        <Link to="/" className="btn">
          Back To Song Results
        </Link>
        <img src={image} alt={artistName} />
        <h2>Artist : {artistName}</h2>
        <h3>Song : {songName} </h3>
        <p style={{ whiteSpace: "pre-wrap" }}>{lyricContent}</p>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: 25px;
    margin: 2rem;
  }
  .btn {
    background: #444152;
    margin: 1rem;
    padding: 10px 15px;
    color: #fff;
    border-radius: 5px;
  }
`;

export default LyricContent;
