import "./App.scss";
import WrongAnswerPopup from "./components/WrongAnswerPopup/WrongAnswerPopup";
import Question1 from "./components/question/question1/question1";
import Question2 from "./components/question/question2/question2";
import RobotQuestion from "./components/question/question3/RobotQuestion";
import Question4 from "./components/question/question4/question4";
import Question5 from "./components/question/question5/question5";
import Questions from "./pages/Questions/Questions";

function App() {
  return (
    <>
      <WrongAnswerPopup />
      <Questions />
    </>
  );
}

export default App;
