import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { getPeople, selectLoadingStatus, selectPeople } from "./peopleSlice";
import { store } from "./store";

function People() {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const isLoading = useSelector(selectLoadingStatus) === "loading";

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

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

export function VanillaReduxExample() {
  return (
    <Provider store={store}>
      <h3>---------- Vanilla Redux Example ----------</h3>
      <People />
    </Provider>
  );
}
