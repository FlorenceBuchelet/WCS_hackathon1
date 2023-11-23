import Question1 from "../../components/question/question1/question1";
import Question2 from "../../components/question/question2/question2";
import RobotQuestion from "../../components/question/question3/RobotQuestion";
import Question4 from "../../components/question/question4/question4";
import Question5 from "../../components/question/question5/question5";
import Question6 from "../../components/question/question6/question6";
import Question7 from "../../components/question/question7/question7";
import Question8 from "../../components/question/question8/question8";
import Question9 from "../../components/question/question9/question9";

import "./Questions.scss";

function Questions() {
  return (
    <div className="questions">
      <h1 className="questions__title">Questions</h1>
      <Question1 />
      <Question2 />
      <RobotQuestion />
      <Question4 />
      <Question5 />
      <Question6 />
      <Question7 />
      <Question8 />
      <Question9 />

    </div>
  );
}

export default Questions;
