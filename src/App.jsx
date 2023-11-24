import "./App.scss";
import Questions from "./pages/Questions/Questions";
import Homepage from "./pages/Homepage/Homepage";
import "./components/neige/Neige";

function App() {
  return (
    <>
      <section className="App__home">
        <Homepage />
      </section>
      <section className="App__question">
        <Questions />
      </section>
      <div className="s-large"></div>
      <div className="s-small"></div>
    </>
  );
}

export default App;
