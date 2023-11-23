import "./question5.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question5({ count, setCount, nextPos, setNextPos }) {
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
    setNextPos(750);
    setCount(1);
    setTimeout(() => {
      console.log("after timeout");
      scrollTo();
    }, 100);
  };
  return (
    <div className="question5">
      <section className="question5__section">
        <h1 className="question5__title">Quelle est ta saison préférée ?</h1>
          <div className="question5__buttons--container">
        <button className="question5__buttons question5__buttons--printemps">
          <Link
            activeClass="active"
            /* to="question6" */
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclickGood}
          >
            Printemps
          </Link>
        </button>
        <button className="question5__buttons question5__buttons--ete">
          <Link
            activeClass="active"
            /* to="question6" */
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclickGood}
          >
            Eté
          </Link>
        </button>
        <button className="question5__buttons question5__buttons--automne">
          <Link
            activeClass="active"
            /*  to="question6" */
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclickGood}
          >
            Automne
          </Link>
        </button>
        <button className="question5__buttons question5__buttons--hiver">
          <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclickWrong}
          >
            Hiver
          </Link>
        </button>
        </div>
      </section>
    </div>
  );
}

export default Question5;
