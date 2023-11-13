import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";
import Synonyms from "./Synonyms";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setDefinition(response.data);
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary container-fluid">
        <div className="search-section">
          <section>
            <h1>Dictionary</h1>
            <form onSubmit={handleSubmit}>
              <label>What word do you want to look up?</label>
              <input
                type="search"
                placeholder="Search for a word"
                defaultValue={props.defaultKeyword}
                autoFocus={true}
                className="form-control search-input"
                onChange={handleKeywordChange}
              />
            </form>
          </section>
        </div>
        <div className="scroll-icon text-light d-flex flex-column align-items-center mt-5">
          <i class="fa-solid fa-circle-chevron-down fa-bounce"></i>
          <p>Scroll Down</p>
        </div>
        <Result definition={definition} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading!";
  }
}
