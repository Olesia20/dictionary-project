import Reeact from "react";
export default function Meaning(props) {
  return (
    <div>
      {" "}
          <h3>
              <em>{props.meaning.partOfSpeech}</em></h3>
      <p>Definition: {props.meaning.definition}</p>
      <p>Example: {props.meaning.example}</p>
    </div>
  );
}
