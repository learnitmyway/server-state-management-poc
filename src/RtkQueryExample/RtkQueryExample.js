import { Provider } from "react-redux";
import { store } from "./store";
import { People } from "./People";

export function RtkQueryExample() {
  return (
    <Provider store={store}>
      <h3>---------- RTK Query Example ----------</h3>
      <People />
    </Provider>
  );
}
