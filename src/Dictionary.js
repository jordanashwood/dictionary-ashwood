import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="d-flex justify-content-center mt-5" onSubmit={search}>
        <input
          className="w-50"
          type="search"
          onChange={handleKeywordChange}
          placeholder="Search for a word..."
        />
        <submit>
          <i class="fa-solid fa-magnifying-glass"></i>
        </submit>
      </form>
    </div>
  );
}
