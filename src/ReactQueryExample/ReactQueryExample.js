import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePeopleQuery } from "./useGetPeopleQuery";

const queryClient = new QueryClient();

function People() {
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

export function ReactQueryExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <h3>---------- React Query Example ----------</h3>
      <People />
    </QueryClientProvider>
  );
}
