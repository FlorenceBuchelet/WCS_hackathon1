import RobotQuestion from "../../components/RobotQuestion/RobotQuestion";
import YesNoQuestions from "../../components/YesNoQuestions/YesNoQuestions";
import "./Questions.scss";

function Questions() {
  return (
    <div className="questions">
      <h1 className="questions__title">Questions</h1>
      <YesNoQuestions />
    </div>
  );
}

export default Questions;
