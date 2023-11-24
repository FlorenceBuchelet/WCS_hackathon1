import "./question5.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question5({ count, setCount, nextPos, setNextPos, show, setShow }) {
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
    <div className="question5">
      <section className="question5__section">
        <h1 className="question5__title">Quelle est votre saison préférée ?</h1>
        <div className="question5__buttons--container">
          <Link
            className="question__buttons--wide-button question5__buttons--printemps"
            activeClass="active"
            /* to="question6" */
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            onClick={handleclickGood}
          ></Link>

          <Link
            className="question__buttons--wide-button question5__buttons--ete"
            activeClass="active"
            /* to="question6" */
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            onClick={handleclickGood}
          ></Link>

          <Link
            className="question__buttons--wide-button question5__buttons--automne"
            activeClass="active"
            /*  to="question6" */
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            onClick={handleclickGood}
          ></Link>

          <Link
            className="question__buttons--wide-button question5__buttons--hiver"
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            onClick={handleclickWrong}
          ></Link>
        </div>
      </section>
    </div>
  );
}

export default Question5;
