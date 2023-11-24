import "./question9.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question9({ count, setCount, nextPos, setNextPos, show, setShow }) {
  const scrollTo = () => {
    scroll.scrollTo(nextPos);
  };
  const handleclickGood = () => {
    console.log("nextPos avant inc Q1", nextPos);
    setNextPos(nextPos + 750);
    console.log("nextPos apres inc Q1", nextPos);
    setCount(count + 1);
    setTimeout(() => {
      console.log("after timeout");
      scrollTo();
    }, 100);
  };
  const handleclickWrong = () => {
    setTimeout(() => {
      setNextPos(750);
      setCount(1);
      setShow(true);
    }, 2000);
  };
  return (
    <div className="question9">
      <section className="question9__section">
        <h1 className="question9__title">Est-ce que tu aimes Noël ?</h1>
        <div className="question9__buttons--container">
          <button className="question9__buttons question9__buttons--left">
            <Link
              activeClass="active"
              to="question1"
              spy={true}
              smooth={true}
              offset={0}
              duration={5000}
              onClick={handleclickWrong}
            >
              J'a-dore 🎄
            </Link>
          </button>
          <button className="question9__buttons question9__buttons--right">
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={0}
              duration={5000}
              onClick={handleclickGood}
            >
              J'en peux plus 🤢
            </Link>
          </button>
        </div>
      </section>
      <section className="question9__section"></section>
    </div>
  );
}

export default Question9;
