import { useGetPeopleQuery } from "./swapiTechApi";
import { Provider } from "react-redux";
import { store } from "./store";

function People() {
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

export function RtkQueryExample() {
  return (
    <Provider store={store}>
      <h3>---------- RTK Query Example ----------</h3>
      <People />
    </Provider>
  );
}
