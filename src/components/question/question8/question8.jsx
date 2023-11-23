import { Link, animateScroll as scroll } from "react-scroll";
import "./question8.scss";
function Question8({ count, setCount, nextPos, setNextPos }) {
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
    setCount(1);
    setTimeout(() => {
      console.log("after timeout");
      scrollTo();
    }, 100);
  };
  return (
    <div className="question8">
      <section className="question8__section">
        <h1>Bambi ou Grinch ?</h1>
        <button className="question8__button">
          <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclickWrong}
          >
            Bambi
          </Link>
        </button>
        <button className="question8__button">
          <Link
            activeClass="active"
            /* to="question9" */
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclickGood}
          >
            Grinch
          </Link>
        </button>
      </section>
      <section className="question8__section">
        <img
          className="question8__image"
          src="../../../assets/bambi.jpg"
          alt="famille à noël"
        />
        <img
          className="question8__image"
          src="../../../assets/grinch.jpg"
          alt="famille à noël"
        />
      </section>
    </div>
  );
}

export default Question8;
