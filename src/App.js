import "./App.css";
import Buttons from "./Buttons";
import useGenerator from "./useGenerator";
function App() {
  const url = "https://api.imgflip.com/get_memes";
  const {
    currentMeme,
    topText,
    bottomText,
    memeNr,
    handleBottomTextChange,
    handleTopTextChange,
    setMemeNr,
  } = useGenerator(url);
  return (
    <>
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
      </div>
      <div className="bottom-division">
        <Buttons
          previous={() => {
            return setMemeNr(Math.max(memeNr - 1, 0));
          }}
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
    </>
  );
}

export default App;
