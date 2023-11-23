import RobotQuestion from "../../components/RobotQuestion/RobotQuestion";
import YesNoQuestions from "../../components/YesNoQuestions/YesNoQuestions";
import "./Questions.scss";

function Questions() {
  return (
    <div className="questions">
      <aside className="questions__left">
        <h1 className="questions__title">Questions</h1>
      </aside>
      <aside className="questions__right">
      <Question1 />
      <Question2 />
      <RobotQuestion />
      <Question4 />
      <Question5 />
      <Question6 />
      <Question7 />
      <Question8 />
      <Question9 />
      </aside>
    </div>
  );
}

export default Questions;
