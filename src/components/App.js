import React from "react";

function NavBar(props) {
 return (
    <nav>
      <a href="#home">I'm a link!</a>
      <h1>{props.comment}</h1>
    </nav>
 );
}

function Home(props) {
 return (
    <div id="home">
      <h1>Home</h1>
    </div>
 );
}

function About() {
 return (
    <div id="about">
      <h2>About</h2>
    </div>
 );
}

function App() {
 return (
    <div>
      <NavBar comment="I'm a link!" />
      <Home />
      <About />
    </div>
 );
}

export default App;
