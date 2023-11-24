import "./App.scss";
import WrongAnswerPopup from "./components/WrongAnswerPopup/WrongAnswerPopup";
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
