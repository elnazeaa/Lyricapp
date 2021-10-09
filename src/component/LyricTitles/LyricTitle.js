import React, { useContext } from "react";
import { LyricContext } from "../../context/LyricContext";
import { Loading, Lyric } from "../index";
import styled from "styled-components";

const LyricTitle = (props) => {
  const { lyricData, loader } = useContext(LyricContext);
  if (loader || lyricData.length === 0) {
    return <Loading />;
  }
  return (
    <Wrapper className="container">
      {lyricData.map((item) => {
        return <Lyric key={item.id} item={item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export default LyricTitle;
