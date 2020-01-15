import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Tools from "./components/Tools";
import ProjectOne from "./components/ProjectOne";
import ProjectTwo from "./components/ProjectTwo";

function App() {
  return (
    <div>
<Intro />
<AboutMe />
<Tools />
<ProjectOne />
<ProjectTwo />
    </div>
  );
}

export default App;
