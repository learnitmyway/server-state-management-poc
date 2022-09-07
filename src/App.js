import "./App.css";
import { LocalState } from "./LocalStateExample/LocalStateExample";
import { ReactQueryExample } from "./ReactQueryExample/ReactQueryExample";
import { ReduxToolkitExample } from "./ReduxToolkitExample/ReduxToolkitExample";
import { RtkQueryExample } from "./RtkQueryExample/RtkQueryExample";
import { VanillaReduxExample } from "./VanillaReduxExample/VanillaReduxExample";

function App() {
  return (
    <main className="App">
      <ReactQueryExample />
      <LocalState />
      <ReduxToolkitExample />
      <RtkQueryExample />
      <VanillaReduxExample />
    </main>
  );
}

export default App;
