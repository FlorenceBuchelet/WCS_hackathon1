import { useState } from "react";
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
  const [count, setCount] = useState(1);
  const [nextPos, setNextPos] = useState(750);
  /*   const [show, setShow] = useState("false"); */
  return (
    <div className="questions">
      <h1 className="questions__title">Questions</h1>
      <aside className="questions__left">
        <h1 className="questions__title"></h1>
      </aside>
      <aside className="questions__right">
        {count >= 1 && (
          <Question1
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
          />
        )}
        {count >= 2 && (
          <Question2
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
          />
        )}
        {count >= 3 && (
          <RobotQuestion
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
          />
        )}
        {count >= 4 && (
          <Question4
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
          />
        )}
        {count >= 5 && (
          <Question5
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
          />
        )}
        {count >= 6 && (
          <Question6
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
          />
        )}
        {count >= 7 && (
          <Question7
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
          />
        )}
        {count >= 8 && (
          <Question8
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
          />
        )}
        {count >= 9 && (
          <Question9
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
          />
        )}
        <div className="s-large"></div>
        <div className="s-small"></div>
      </aside>
    </div>
  );
}

export default Questions;
