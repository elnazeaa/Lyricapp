import React, { createContext, useEffect, useReducer } from "react";
import LyricReducer from "../reducer/lyricReducer";

export const LyricContext = createContext();

const LyricContextProvider = (props) => {
  const apiUrl = "https://api.lyrics.ovh";

  const initalState = {
    lyrics: [],
    lyricData: [],
    lyricTerm: "",
    submitTerm: "",
    loader: false,
  };

  const [state, dispatch] = useReducer(LyricReducer, initalState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "GET_HANDLE_SUBMIT", payload: state.lyricTerm });
  };

  const handleChange = (e) => {
    const term = e.target.value;
    dispatch({ type: "TERM_VAL", payload: term });
  };

  const fetchLyrics = async () => {
    try {
      dispatch({ type: "LOADER" });
      const response = await fetch(`${apiUrl}/suggest/${state.submitTerm}`);
      const res = await response.json();
      dispatch({ type: "GET_LYRICS", payload: res });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLyrics();
  }, [state.submitTerm]);

  return (
    <LyricContext.Provider value={{ ...state, handleChange, handleSubmit }}>
      {props.children}
    </LyricContext.Provider>
  );
};

export default LyricContextProvider;
