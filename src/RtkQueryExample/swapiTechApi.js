import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const swapiTechApi = createApi({
  reducerPath: "swapiTechApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.swapi.tech/api/" }),
  endpoints: (builder) => ({
    getPeople: builder.query({
      query: () => "people",
      transformResponse: (json) => {
        return json.results.slice(0, 2);
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPeopleQuery } = swapiTechApi;
