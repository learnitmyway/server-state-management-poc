import { useGetPeopleQuery } from "./swapiTechApi";

export function People() {
  const { isLoading, data: people } = useGetPeopleQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {people?.map((person) => (
        <p key={person?.uid}>{person?.name}</p>
      ))}
    </>
  );
}
