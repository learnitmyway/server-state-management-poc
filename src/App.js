import "./App.css";
import { LocalState } from "./LocalStateExample/LocalStateExample";
import { ReactQueryExample } from "./ReactQueryExample/ReactQueryExample";
import { RtkQueryExample } from "./RtkQueryExample/RtkQueryExample";

function App() {
  return (
    <main className="App">
      {/* <LocalState />
      <ReactQueryExample /> */}
      <RtkQueryExample />
    </main>
  );
}

export default App;
