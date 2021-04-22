import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./Frase";
import Image from "./Image";
import Styles from "../css/styles.css";


const Home = () =>{
  const [frase, setFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    setFrase(frase[0]);
  };
  //cargar frase
  useEffect(() => {
    consultarAPI();
  }, []);
  return (
    <div className="container">
        <Image/>
      <Frase frase={frase} />
      <button className="styles" onClick={() => consultarAPI()}>Otra frase</button>
    </div>
  );
}

export default Home;
