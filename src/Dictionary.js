import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyworld, setKeyworld] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    // console.log(response.data);
    // console.log(response.data.meanings[0]);
    // console.log(response.data.meanings[0].definition);
    // console.log(response.data.phonetic);
    // console.log(response.data.word);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "7561c89f6et45b832o8e3c5fcade60b0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyworld}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmitChange(event) {
    setKeyworld(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input type="search" onChange={handleSubmitChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
