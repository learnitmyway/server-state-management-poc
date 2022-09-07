import { useEffect, useState } from "react";

function People() {
  const [people, setPeople] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    async function getPeople() {
      setStatus("loading");
      const response = await fetch("https://www.swapi.tech/api/people");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        setStatus("success");
      }
      const json = await response.json();
      setPeople(json.results.slice(0, 2));
    }
    getPeople();
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      {people.map((person) => (
        <p key={person?.uid}>{person?.name}</p>
      ))}
    </>
  );
}

export function LocalState() {
  return (
    <>
      <h3>---------- Local State Example ----------</h3>
      <People />
    </>
  );
}
