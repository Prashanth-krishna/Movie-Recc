import "./App.css";
import Header from "./components/header";
import Homepage from "./components/homepage";

function App() {
  return (
    <div className="App">
      <Header header="Movie Recommendation application name" />
      <Homepage />
    </div>
  );
}

export default App;
