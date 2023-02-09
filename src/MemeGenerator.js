import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import axios from "axios";

const MemeGenerator = () => {
  const [currentMeme, setCurrentMeme] = useState({});
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memeNr, setMemeNr] = useState(0);

  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
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

  return (
    <div className="container">
      <div className="img-container">
        <div
          className="div1"
          style={{
            fontFamily: "Impact",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {topText}
        </div>
        <img src={currentMeme.url} alt={currentMeme.name}></img>
        <div
          className="div2"
          style={{
            fontFamily: "Impact",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {bottomText}
        </div>
      </div>
      <div className="bottom-division">
        <Buttons
          previous={() => setMemeNr(Math.max(memeNr - 1, 0))}
          next={() => setMemeNr(memeNr + 1)}
        />
        <div>
          <input
            type="text"
            placeholder="Top Text"
            value={topText}
            onChange={handleTopTextChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Bottom Text"
            value={bottomText}
            onChange={handleBottomTextChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;
