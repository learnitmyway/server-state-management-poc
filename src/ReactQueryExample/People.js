import { usePeopleQuery } from "./useGetPeopleQuery";

export function People() {
  const { status, data: people } = usePeopleQuery();

  if (status === "loading") {
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
