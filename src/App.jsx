import "./App.scss";
import Question1 from "./components/question/question 1/question1";
import Question2 from "./components/question/question2/question2";
import RobotQuestion from "./components/question/question3/RobotQuestion";
import Homepage from "./pages/Homepage/Homepage"


function App() {
  return (
    <>
    <Homepage/>
      <Question1 />
      <Question2 />
      <RobotQuestion />
    </>
  );
}

export default App;
