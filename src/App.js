import "./App.css";
import { LocalState } from "./LocalStateExample/LocalStateExample";
import { ReactQueryExample } from "./ReactQueryExample/ReactQueryExample";
import { ReduxToolkitExample } from "./ReduxToolkitExample/ReduxToolkitExample";
import { RtkQueryExample } from "./RtkQueryExample/RtkQueryExample";
import { VanillaReduxExample } from "./VanillaReduxExample/VanillaReduxExample";

function App() {
  return (
    <main className="App">
      {/* <LocalState /> */}
      {/* <ReactQueryExample /> */}
      {/* <RtkQueryExample /> */}
      {/* <ReduxToolkitExample /> */}
      <VanillaReduxExample />
    </main>
  );
}

export default App;
