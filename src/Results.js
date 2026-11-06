import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h3 className="text-capitalize">Word: {props.results.word}</h3>
        <h3 className="text-capitalize">
          Phonetic: [{props.results.phonetic}]{" "}
        </h3>
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
