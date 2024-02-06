import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const homeDivStyle = {
    color: "firebrick"
  }
  return(
  <div id ="home">
    <h1 style = {homeDivStyle} > {name } is a Web Developer from {city}</h1>

  </div>)
}

export default Home;
