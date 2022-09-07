import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function getPeople() {
      const response = await fetch("https://www.swapi.tech/api/people");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setPeople(json.results);
    }
    getPeople();
  }, []);

  return (
    <main className="App">
      {people.map((person) => (
        <p key={person?.uid}>{person?.name}</p>
      ))}
    </main>
  );
}

export default App;
