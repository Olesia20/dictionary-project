import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning.synonyms);
  return (
    <div>
      <h3>
        <em>{props.meaning.partOfSpeech}</em>
      </h3>
      <h6>
        Definition: {props.meaning.definition}
        <br />
        <Example example={props.meaning.example} />
        <Synonyms synonyms={props.meaning.synonyms} />
      </h6>
    </div>
  );
}
