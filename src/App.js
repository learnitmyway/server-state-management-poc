import "./App.css";
import { LocalState } from "./LocalState";
import { ReactQueryExample } from "./ReactQueryExample/ReactQueryExample";

function App() {
  return (
    <main className="App">
      <LocalState />
      <ReactQueryExample />
    </main>
  );
}

export default App;
