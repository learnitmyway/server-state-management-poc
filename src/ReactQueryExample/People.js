import { usePeopleQuery } from "./useGetPeopleQuery";

export function People() {
  const { isLoading, data: people } = usePeopleQuery();

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
