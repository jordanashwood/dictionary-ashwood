import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Result.css";

export default function Result(props) {
  if (props.definition) {
    return (
      <div className="Result">
        <section className="text-center text-light">
          <h1 className="keyword">{props.definition.word}</h1>
          <Phonetic phonetic={props.definition.phonetic} />
        </section>

        {props.definition.meanings.map(function (meaning, index) {
          return (
            <section className="card" key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
