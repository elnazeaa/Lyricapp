import React, { useContext } from "react";
import { LyricContext } from "../../context/LyricContext";
import styled from "styled-components";

const Button = (props) => {
  const { lyrics, handleNextBtn, handlePrevBtn } = useContext(LyricContext);
  if (lyrics.next || lyrics.prev) {
    return (
      <Wrapper className="btnContainer">
        {lyrics.prev ? (
          <button className="prevBtn" onClick={handlePrevBtn}>
            Prev
          </button>
        ) : (
          ""
        )}
        {lyrics.next ? (
          <button className="nextBtn" onClick={handleNextBtn}>
            Next
          </button>
        ) : (
          ""
        )}
      </Wrapper>
    );
  }
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  .nextBtn,
  .prevBtn {
    background: #444152;
    border: none;
    color: #fff;
    font-size: 1.1rem;
    padding: 10px 20px;
    border-radius: 2px;
    margin: 0 5px;
    cursor: pointer;
  }
`;

export default Button;
