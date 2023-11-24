import "./App.scss";
import Questions from "./pages/Questions/Questions";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <>
      <section className="App__home">
        <Homepage />
      </section>
      <section className="App__question">
        <Questions />
      </section>
    </>
  );
}

export default App;
