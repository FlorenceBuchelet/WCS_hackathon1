import "./App.scss";
import WrongAnswerPopup from "./components/WrongAnswerPopup/WrongAnswerPopup";
import Questions from "./pages/Questions/Questions";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <>
      <Homepage />
{/*       <div className="snow"> */}
        <section className="App__question">
          <Questions />
        </section>
{/*         <div className="s-large"></div>
        <div className="s-small"></div>
      </div> */}
    </>
  );
}

export default App;
