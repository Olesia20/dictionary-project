import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="row">
          <div className="col-6">
            <h3 className="text-capitalize">
           Word:   <strong>{props.results.word}</strong>{" "}
            </h3>
          </div>
          <div className="col-6 ">
            <h3 className="text-capitalize">
              Phonetic: <span>[{props.results.phonetic}]</span>{" "}
            </h3>
          </div>
          <hr />
        </div>
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
