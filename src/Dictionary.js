import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}...`);
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
