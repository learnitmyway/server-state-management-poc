import "./App.css";
import { LocalState } from "./LocalStateExample/LocalStateExample";
import { ReactQueryExample } from "./ReactQueryExample/ReactQueryExample";
import { ReduxToolkitExample } from "./ReduxToolkitExample/ReduxToolkitExample";
import { RtkQueryExample } from "./RtkQueryExample/RtkQueryExample";

function App() {
  return (
    <main className="App">
      {/* <LocalState /> */}
      {/* <ReactQueryExample /> */}
      {/* <RtkQueryExample /> */}
      <ReduxToolkitExample />
    </main>
  );
}

export default App;
