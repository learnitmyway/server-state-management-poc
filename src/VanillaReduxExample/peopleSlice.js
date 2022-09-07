const PEOPLE_LOADING = "PEOPLE_LOADING";
const PEOPLE_RECEIVED = "PEOPLE_RECEIVED";

const peopleLoading = () => ({
  type: PEOPLE_LOADING,
});

const peopleReceived = (payload) => ({
  type: PEOPLE_RECEIVED,
  payload,
});

const getPeople = () => async (dispatch) => {
  dispatch(peopleLoading());
  const response = await fetch("https://www.swapi.tech/api/people");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await response.json();
  dispatch(peopleReceived(json.results.slice(0, 2)));
};

const initialState = {
  status: "idle",
  entities: [],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE_LOADING:
      return {
        ...state,
        loadingStatus: "loading",
        entities: [],
      };
    case PEOPLE_RECEIVED:
      return {
        ...state,
        loadingStatus: "success",
        entities: action.payload,
      };
    default:
      return state;
  }
};

const selectPeople = ({ people }) => people.entities;
const selectLoadingStatus = ({ people }) => people.loadingStatus;

export { getPeople, peopleReducer, selectLoadingStatus, selectPeople };
