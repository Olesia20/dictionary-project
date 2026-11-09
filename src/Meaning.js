import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>
        <em className="text-capitalize">{props.meaning.partOfSpeech}</em>
      </h3>
      <h6>
        <strong> Definition: </strong>
        <span>{props.meaning.definition}</span>
        <br />
        <Example example={props.meaning.example} />
        <Synonyms synonyms={props.meaning.synonyms} />
      </h6>
    </div>
  );
}
