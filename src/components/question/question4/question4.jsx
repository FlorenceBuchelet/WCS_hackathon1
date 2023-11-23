import "./question4.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question4({ count, setCount, nextPos, setNextPos }) {
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
    <div className="question4">
      <section className="question4__section">
        <h1 className="question4__title">Dinde ou Choucroute ?</h1>
        <button className="question4__buttons question4__buttons--left">
          <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclickWrong}
          >
            Dinde
          </Link>
        </button>
        <button className="question4__buttons question4__buttons--right">
          <Link
            activeClass="active"
            /* to="question5" */
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclickGood}
          >
            Choucroute
          </Link>
        </button>
      </section>
    </div>
  );
}

export default Question4;
