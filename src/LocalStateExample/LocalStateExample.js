import { useEffect, useState } from "react";

export function LocalState() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function getPeople() {
      const response = await fetch("https://www.swapi.tech/api/people");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setPeople(json.results.slice(0, 2));
    }
    getPeople();
  }, []);

  return (
    <>
      <h3>---------- Local State Example ----------</h3>
      {people.map((person) => (
        <p key={person?.uid}>{person?.name}</p>
      ))}
    </>
  );
}
