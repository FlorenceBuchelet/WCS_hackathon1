import { Link, animateScroll as scroll } from "react-scroll";
import "./question2.scss";
import { useState } from "react";
import WrongAnswerPopup from "../../WrongAnswerPopup/WrongAnswerPopup";
function Question2({ count, setCount, nextPos, setNextPos }) {
  const scrollTo = () => {
    scroll.scrollTo(nextPos);
  };
  const [show, setShow] = useState(false);
  const handleclickGood = () => {
    console.log("q2:", nextPos);
    setNextPos(nextPos + 750);
    console.log("nextPosQ2 vers q3inc:", nextPos);
    setCount(count + 1);
    setTimeout(() => {
      console.log("after timeout");
      scrollTo();
    }, 100);
  };
  const handleclickWrong = () => {
    setNextPos(750);
    setCount(1);
    setShow(!show);
    setTimeout(() => {
      console.log("after timeout");
      scrollTo();
    }, 100);
  };
  return (
    <div className="question2">
      <div></div>
      {show && <WrongAnswerPopup />}
      <section className="question2__section">
        <h1 className="question2__title">Aimes-tu Die Hard</h1>
        <button className="question2__button">
          <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclickWrong}
          >
            oui
          </Link>
        </button>
        <button className="question2__button">
          <Link
            activeClass="active"
            /*  to="robotQuestion" */
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclickGood}
          >
            non
          </Link>
        </button>
      </section>
    </div>
  );
}

export default Question2;
