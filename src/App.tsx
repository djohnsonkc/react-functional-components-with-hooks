import React, { useState } from "react";
import "./styles.css";

import Header from "./Header";
import NavBar from "./NavBar";

export default function App() {
  const [menuOpened, setMenuOpened] = useState(false);

  const onMenuToggle = () => {
    setMenuOpened(!menuOpened);

    // since the body is outside of the React components,
    // use vanilla JavaScript to toggle body-pd class
    const body = document.getElementById("js-body");
    if (body) {
      body.classList.toggle("body-pd");
    }
  };

  return (
    <div>
      <Header menuOpened={menuOpened} onMenuToggle={onMenuToggle} />
      <NavBar menuOpened={menuOpened} />
      <h1>React Functional Components</h1>
      <p>
        Examples of building functional components in React using TypeScript.
      </p>
    </div>
  );
}
