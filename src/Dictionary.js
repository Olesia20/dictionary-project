import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyworld, setKeyworld] = useState(null);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  function handleUnsplashResponse(response) {
    setPhotos(response.data.results);
  }
  function search(event) {
    event.preventDefault();
    let apiKey = "7561c89f6et45b832o8e3c5fcade60b0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyworld}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let unsplashApiKey = "qrjBVRZ3wYgwfA3W7LaMz4GIU8AZYSGjSOqgZRS6jAw";
    let unsplashApiUrl = `https://api.unsplash.com/search/photos?page=1&query=${keyworld}`;
    axios
      .get(unsplashApiUrl, {
        headers: { Authorization: `Client-ID ${unsplashApiKey}` },
      })
      .then(handleUnsplashResponse);
  }
  function handleSubmitChange(event) {
    setKeyworld(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleSubmitChange}
          placeholder="e.g: sunset, fashion, book"
          className="search"
        />
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
