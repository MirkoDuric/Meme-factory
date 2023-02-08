import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [meme, setMeme] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setMeme(json))
      .catch((err) => console.log(err));
  }, [url]);
  return { meme };
}
