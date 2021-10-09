import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LyricContent from "../component/lyricContent/LyricContent";

const LyricPage = (props) => {
  const { artistName, songName } = useParams();
  const apiUrl = "https://api.lyrics.ovh";
  const [lyrics, setLyrics] = useState("");
  const fetchLyricContent = async () => {
    try {
      const response = await fetch(`${apiUrl}/v1/${artistName}/${songName}`);
      const res = await response.json();
      setLyrics(res);
    } catch (error) {}
  };
  useEffect(() => {
    fetchLyricContent();
  }, []);
  return (
    <>
      <LyricContent
        lyrics={lyrics}
        artistName={artistName}
        songName={songName}
      />
    </>
  );
};

export default LyricPage;
