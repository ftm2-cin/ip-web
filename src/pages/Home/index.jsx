import React from "react";
import Separator from "../../components/Separator";

import Intro from "./components/Intro";
import UsefulLinks from "./components/Links";
import Gallery from "./components/Gallery";

import "./index.css";

function HomePage(props) {
  return (
    <div className="Home-Content">
      <Intro />
      <Separator />
      <UsefulLinks />
      <Separator />
      <Gallery />
      <Separator />
    </div>
  );
}

export default HomePage;
