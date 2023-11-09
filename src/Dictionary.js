import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [loaded, setLoaded] = useState(false);
  let [definition, setDefinition] = useState(null);
  let [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setDefinition(response.data);
    let apiKey = "fc86a336701839ca6td30ab95o4a058a";
    let apiUrl = `https://api.shecodes.io/images/v1/define?word=${response.data.word}&key=${apiKey}`;
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiKey = "fc86a336701839ca6td30ab95o4a058a";
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
      <div className="Dictionary">
        <form
          className="d-flex justify-content-center mt-5"
          onSubmit={handleSubmit}
        >
          <input
            className="form-control w-50"
            type="search"
            onChange={handleKeywordChange}
            placeholder="Search for a word..."
            defaultValue={props.defaultKeyword}
          />
          <submit onSubmit={handleSubmit}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </submit>
        </form>
        <Results definition={definition} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
