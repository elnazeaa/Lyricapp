import React, { useContext } from "react";
import styled from "styled-components";
import { LyricContext } from "../../context/LyricContext";

const SearchBar = (props) => {
  const { lyricTerm, handleChange, handleSubmit } = useContext(LyricContext);

  return (
    <>
      <Wrapper className="search__container">
        <p className="search__title">Find Song Lyrics</p>
        <form onSubmit={handleSubmit}>
          <input
            className="search__input"
            type="text"
            placeholder="Search...."
            onChange={handleChange}
            value={lyricTerm}
          />
          <p className="note">
            Note : some of songs have no results and with lots of requests
            server will stop
          </p>
        </form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 7px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .note {
    margin: 5px;
    color: #f00;
  }
  .search {
    &__container {
      padding-top: 64px;
    }

    &__title {
      font-size: 22px;
      font-weight: 900;
      text-align: center;
      color: #444152;
      margin: 10px;
    }

    &__input {
      width: 100%;
      padding: 12px 24px;

      background-color: transparent;
      transition: transform 250ms ease-in-out;
      font-size: 14px;
      line-height: 18px;

      color: #575756;
      background-color: transparent;
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 18px 18px;
      background-position: 95% center;
      border-radius: 50px;
      border: 1px solid #575756;
      transition: all 250ms ease-in-out;
      backface-visibility: hidden;
      transform-style: preserve-3d;

      &::placeholder {
        color: color(#575756 a(0.8));
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }

      &:hover,
      &:focus {
        padding: 12px 0;
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid #575756;
        border-radius: 0;
        background-position: 100% center;
      }
    }
  }

  .credits {
    &__container {
      margin-top: 24px;
    }

    &__text {
      text-align: center;
      font-size: 13px;
      line-height: 18px;
    }

    &__link {
      color: #ff8b88;
      text-decoration: none;
      transition: color 250ms ease-in;

      &:hover,
      &:focus {
        color: color(#ff8b88 blackness(+25%));
      }
    }
  }
  @media (max-width: 900px) {
    form {
      width: 85%;
    }
  }
`;

export default SearchBar;