import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({});

  useEffect(() => {
    async function getName() {
      const response = await fetch("https://www.swapi.tech/api/people/1");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setPerson(json.result);
    }
    getName();
  }, []);

  const { name } = person?.properties || {};
  return (
    <main className="App">
      <h3>{name}</h3>
    </main>
  );
}

export default App;
