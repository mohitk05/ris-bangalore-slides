import React from "react";
import "./App.css";
import Stories from "react-insta-stories";
import One from "./slides/1";
import Two from "./slides/2";
import Three from "./slides/3";
import Four from "./slides/4";
import Five from "./slides/5";
import Six from "./slides/6";
import Seven from "./slides/7";
import Nine from "./slides/9";
import Ten from "./slides/10";
import Eleven from "./slides/11";
import Twelve from "./slides/12";
import Thirteen from "./slides/13";
import Fourteen from "./slides/14";
import Fifteen from "./slides/15";
import Sixteen from "./slides/16";
import Seventeen from "./slides/17";
import Eighteen from "./slides/18";
import Nineteen from "./slides/19";
import Twenty from "./slides/20";
import Twentyone from "./slides/21";
import Twentytwo from "./slides/22";

function App() {
  let cId = window.location.pathname.replace("/", "");
  if (Number.isNaN(Number(cId))) cId = 1;
  if (!cId || Number(cId) < 1) cId = 1;
  if (Number(cId) >= stories.length + 1) cId = stories.length;
  return (
    <div className="App">
      <Stories
        stories={stories}
        width={window.innerWidth}
        height={window.innerHeight}
        currentIndex={cId - 1}
        defaultInterval={2000}
      />
    </div>
  );
}

const stories = [
  {
    content: One
  },
  {
    content: Two
  },
  {
    content: Three
  },
  {
    content: Four
  },
  {
    content: Five
  },
  {
    content: Six
  },
  {
    content: Seven
  },
  {
    content: Nine
  },
  {
    content: Ten
  },
  {
    content: Eleven
  },
  {
    content: Twelve
  },
  {
    content: Thirteen
  },
  {
    content: Fourteen
  },
  {
    content: Fifteen
  },
  {
    content: Sixteen
  },
  {
    content: Seventeen
  },
  {
    content: Eighteen
  },
  {
    content: Nineteen
  },
  {
    content: Twenty
  },
  {
    content: Twentyone
  },
  {
    content: Twentytwo
  }
];

export default App;
