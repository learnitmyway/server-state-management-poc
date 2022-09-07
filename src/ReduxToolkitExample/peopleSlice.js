import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    loadingStatus: "idle",
    entities: [],
  },
  reducers: {
    peopleLoading(state, action) {
      // Use a "state machine" approach for loading state instead of booleans
      if (state.loadingStatus === "idle") {
        state.loadingStatus = "loading";
      }
    },
    peopleReceived(state, action) {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "idle";
        state.entities = action.payload;
      }
    },
  },
});

// Destructure and export the plain action creators
const { peopleLoading, peopleReceived } = peopleSlice.actions;

// Define a thunk that dispatches those action creators
const getPeople = () => async (dispatch) => {
  dispatch(peopleLoading());
  const response = await fetch("https://www.swapi.tech/api/people");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await response.json();
  dispatch(peopleReceived(json.results.slice(0, 2)));
};

const peopleReducer = peopleSlice.reducer;

const selectPeople = ({ people }) => people.entities;
const selectLoadingStatus = ({ people }) => people.loadingStatus;

export { getPeople, peopleReducer, selectLoadingStatus, selectPeople };
