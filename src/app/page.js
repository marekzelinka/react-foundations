import { useState } from "react";

function Header({ title }) {
  return <h1>{title || "Default title"}</h1>;
}

export default function HomePage() {
  const [likes, setLikes] = useState(0);

  const names = [
    "Ada Lovelace",
    "Grace Hopper",
    "Margaret Hamilton",
    "Ada Lovelace",
  ];

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      {/* Nesting React components */}
      <Header title="React" />
      <Header title="Vue.js" />
      <Header title="Angular" />
      <Header title="Ember.js" />
      <Header title="Svelte" />
      {/* Rendering lists */}
      <h2>My friends:</h2>
      <ul>
        {names.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}
