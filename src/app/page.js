import { LikeButton } from "../components/like-button";

function Header({ title }) {
  return <h1>{title || "Default title"}</h1>;
}

export default function HomePage() {
  const names = [
    "Ada Lovelace",
    "Grace Hopper",
    "Margaret Hamilton",
    "Ada Lovelace",
  ];

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
      <LikeButton />
    </div>
  );
}
