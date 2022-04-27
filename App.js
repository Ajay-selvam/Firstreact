import React from "react"
import './App.css';
import home from "./home";
import about from "./about";
import contact from "./contact";
import project from "./project";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <navbar />
      <Route exact path="/" component={home} />
      <Route exact path="/about" component={about} />
      <Route exact path="/contact" component={contact} />
      <Route exact path="/project" component={project} />
    </div>
  );
}

export default App;
