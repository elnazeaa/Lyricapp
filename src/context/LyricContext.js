import React, { createContext, useEffect, useReducer } from "react";
import LyricReducer from "../reducer/lyricReducer";

export const LyricContext = createContext();

const LyricContextProvider = (props) => {
  const apiUrl = "https://api.lyrics.ovh";

  const initalState = {
    lyrics: [],
    lyricData: [],
    lyricTerm: "",
    submitTerm: "part",
    loader: false,
    lyricContent: "",
    image: "",
  };

  const [state, dispatch] = useReducer(LyricReducer, initalState);

  //function for submit Btn and get user term
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "GET_HANDLE_SUBMIT", payload: state.lyricTerm });
  };

  //get term on change handle
  const handleChange = (e) => {
    const term = e.target.value;
    dispatch({ type: "TERM_VAL", payload: term });
  };

  //fetch lyrics
  const fetchLyrics = async (url) => {
    try {
      dispatch({ type: "LOADER" });
      const response = await fetch(url);
      const res = await response.json();
      dispatch({ type: "GET_LYRICS", payload: res });
    } catch (error) {}
  };

  //fetch agian by change term
  useEffect(() => {
    let url = `${apiUrl}/suggest/${state.submitTerm}`;
    fetchLyrics(url);
  }, [state.submitTerm]);

  const sendImg = (img) => {
    dispatch({ type: "SEND_IMG", payload: img });
  };

  //next & prev Btn
  const handleNextBtn = () => {
    let url = `https://cors-anywhere.herokuapp.com/${state.lyrics.next}`;
    fetchLyrics(url);
  };

  const handlePrevBtn = () => {
    let url = `https://cors-anywhere.herokuapp.com/${state.lyrics.prev}`;
    fetchLyrics(url);
  };

  return (
    <LyricContext.Provider
      value={{
        ...state,
        handleChange,
        handleSubmit,
        sendImg,
        handleNextBtn,
        handlePrevBtn,
      }}
    >
      {props.children}
    </LyricContext.Provider>
  );
};

export default LyricContextProvider;
