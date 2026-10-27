import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2>Word: {props.results.word}</h2>
        <h3>Phonetic: {props.results.phonetic}</h3>
        {props.results.meanings.map(function (meaning, index) {
          if (index < 4) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
