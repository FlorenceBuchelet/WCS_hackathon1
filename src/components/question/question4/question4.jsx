import "./question4.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question4({ count, setCount, nextPos, setNextPos, show, setShow }) {
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
    <div className="question4">
      <section className="question4__section">
        <h1 className="question4__title">Dinde ou Choucroute ?</h1>

        <Link
          className="question__buttons--wide-button question4__buttons--left"
          activeClass="active"
          to="question1"
          spy={true}
          smooth={true}
          offset={0}
          duration={2000}
          onClick={handleclickWrong}
        ></Link>

        <Link
          className="question__buttons--wide-button question4__buttons--right"
          activeClass="active"
          /* to="question5" */
          spy={true}
          smooth={true}
          offset={0}
          duration={2000}
          onClick={handleclickGood}
        ></Link>
      </section>
    </div>
  );
}

export default Question4;
