import React, { useContext } from "react";
import notFound from "../../images/notFound.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LyricContext } from "../../context/LyricContext";

const Lyric = ({ item }) => {
  const { sendImg } = useContext(LyricContext);
  const {
    album: { cover_medium },
    artist: { name },
    title,
  } = item;
  return (
    <Wrapper className="lyricsContainer">
      <img src={cover_medium ? cover_medium : notFound} alt={name} />
      <div className="content">
        <h3 className="name">Artist : {name}</h3>
        <p className="title">Song Name : {title}</p>
        <Link
          className="btn"
          to={`/${name}/${title}`}
          onClick={() => {
            sendImg(cover_medium);
          }}
        >
          lyric
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: solid 1px #444152;
  img {
    width: 250px;
    height: 250px;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .btn {
    cursor: pointer;
    background: #444152;
    color: #fbf7f7;
    padding: 4px 27px;
    border: none;
    border-radius: 3px;
    margin: 9px;
    font-size: 1rem;
  }
`;

export default Lyric;
