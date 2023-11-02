import "./App.css";
import { RandomDataProvider } from "./context/randomData";
import ItemGrid from "./components/itemGrid";

function App() {
  return (
    <RandomDataProvider>
      <ItemGrid />
    </RandomDataProvider>
  );
}

export default App;
