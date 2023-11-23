import Question1 from "../../components/question/question 1/question1"; 
import Question2 from "../../components/question/question 2/question2"; 
import Question3 from "../../components/question/question 3/question3"; 
import RobotQuestion from "../../components/question/question3/RobotQuestion";
import Question1 from "../../components/question/question 1/question1"; 
import Question1 from "../../components/question/question 1/question1"; 

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
        <Question3 />
        <RobotQuestion />
      </aside>
    </div>
  );
}

export default Questions;
