import { useQuery } from "@tanstack/react-query";

const TWO_SECONDS_IN_MS = 2000;

export function usePeopleQuery() {
  return useQuery(
    ["people"],
    async () => {
      const response = await fetch("https://www.swapi.tech/api/people");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      return json.results.slice(0, 2);
    },
    { staleTime: TWO_SECONDS_IN_MS, retry: 2 }
  );
}
