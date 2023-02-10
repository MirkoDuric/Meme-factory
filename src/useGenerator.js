import React, { useState, useEffect } from "react";
import axios from "axios";

const useGenerator = (url) => {
  const [currentMeme, setCurrentMeme] = useState({});
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memeNr, setMemeNr] = useState(0);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response.data;
        const { memes } = data;
        setCurrentMeme(memes[memeNr]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [memeNr]);
  const handleTopTextChange = (event) => {
    setTopText(event.target.value);
  };

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value);
  };

  return {
    currentMeme,
    topText,
    bottomText,
    memeNr,
    handleBottomTextChange,
    handleTopTextChange,
    setMemeNr,
  };
};

export default useGenerator;
