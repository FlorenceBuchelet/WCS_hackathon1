import { Link, animateScroll as scroll } from "react-scroll";
import "./question2.scss";
function Question2({ count, setCount, nextPos, setNextPos, setShow, show }) {
  const scrollTo = () => {
    scroll.scrollTo(nextPos);
  };
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
    setTimeout(() => {
      setNextPos(1725);
      setCount(1);
      setShow(true);
    }, 2100);
  };
  return (
    <div className="question2">
      {/*       {show && <WrongAnswerPopup />} */}
      <section className="question2__section">
        <h1 className="question__title">Et Die Hard ?</h1>
        <img
          className="question__image"
          src="../../../assets/DieHard.jpg"
          alt="famille à noël"
        />
        <div className="question2__buttons--container">
          <Link
            className="question__buttons"
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            onClick={handleclickWrong}
          >
            Yippee ki-yay !
          </Link>
          <Link
            className="question__buttons"
            activeClass="active"
            /*  to="robotQuestion" */
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            onClick={handleclickGood}
          >
            Non.
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Question2;
