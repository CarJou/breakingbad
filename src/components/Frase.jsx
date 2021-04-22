import React from "react";
import "../css/styles.css";

const Frase = ({ frase }) => {
  return (
    <div className="containerQuote">
      <h1>{frase.quote}</h1>
      <p>{frase.author}</p>
    </div>
  );
};
export default Frase;
