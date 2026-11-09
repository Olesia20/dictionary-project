import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="row Synonyms">
        <div className="col-2">
          <strong>Synonyms:</strong>{" "}
        </div>
        {props.synonyms.map(function (synonym, index) {
          if (index < 3) {
            return (
              <div className="col-12" key={index}>
                {" "}
                <span> {synonym}</span>
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
