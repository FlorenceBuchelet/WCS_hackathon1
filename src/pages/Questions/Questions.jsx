/* import YesNoQuestions from "../../components/YesNoQuestions/YesNoQuestions"; */
import RobotQuestion from "../../components/question/question3/RobotQuestion";
/* import Question1 from "../../components/question/question 1/question1"; */
import "./Questions.scss";

function Questions() {
  return (
    <div className="questions">
      <aside className="questions__left">
        <h1 className="questions__title">Questions</h1>
      </aside>
      <aside className="questions__right">
        <RobotQuestion />
      </aside>
    </div>
  );
}

export default Questions;
