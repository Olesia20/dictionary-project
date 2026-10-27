import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";


export default function Meaning(props) {
  return (
    <div>
      <h3>
        <em>{props.meaning.partOfSpeech}</em>
      </h3>
      <h6>
        Definition: {props.meaning.definition}
        <br />
        <Example example={props.meaning.example} />
        <Synonyms />
      </h6>
    </div>
  );
}
