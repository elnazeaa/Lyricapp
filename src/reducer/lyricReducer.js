const LyricReducer = (state, action) => {
  if (action.type === "TERM_VAL") {
    return { ...state, lyricTerm: action.payload };
  }
  if (action.type === "GET_HANDLE_SUBMIT") {
    return { ...state, submitTerm: state.lyricTerm, lyricTerm: "" };
  }
  if (action.type === "LOADER") {
    return { ...state, loader: true };
  }
  if (action.type === "GET_LYRICS") {
    return {
      ...state,
      lyrics: action.payload,
      lyricData: action.payload.data,
      loader: false,
    };
  }
  return state;
};

export default LyricReducer;
