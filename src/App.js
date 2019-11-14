import React from 'react';
import './App.css';
import Stories from 'react-insta-stories';
import One from './slides/1';
import Two from './slides/2';
import Three from './slides/3';
import Four from './slides/4';
import Five from './slides/5';
import Six from './slides/6';
import Seven from './slides/7';
import Eight from './slides/8';

function App() {
  return (
    <div className="App">
      <Stories
        stories={stories}
        width={window.innerWidth}
        height={window.innerHeight}
        currentIndex={stories.length - 1}
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
    content: Eight
  }
]

export default App;
