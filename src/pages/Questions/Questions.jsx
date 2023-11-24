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
import WrongAnswerPopup from "../../components/WrongAnswerPopup/WrongAnswerPopup";

function Questions() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(1);
  const [nextPos, setNextPos] = useState(1500);
  return (
    <div className="questions">
      <aside className="questions__right">
        {show && <WrongAnswerPopup show={show} setShow={setShow} />}
        {count >= 1 && (
          <Question1
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
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
        {count >= 2 && (
          <Question2
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 3 && (
          <RobotQuestion
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 4 && (
          <Question4
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 5 && (
          <Question5
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 6 && (
          <Question6
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 7 && (
          <Question7
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}
        {count >= 8 && (
          <Question8
            setCount={setCount}
            count={count}
            nextPos={nextPos}
            setNextPos={setNextPos}
            show={show}
            setShow={setShow}
          />
        )}

      </aside>
    </div>
  );
}

export default Questions;
