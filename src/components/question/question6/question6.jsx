import "./Question6.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question6({ count, setCount, nextPos, setNextPos }) {
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
    <div className="question6">
      <section className="question6__section">
        <h1>Mariah Carey ?</h1>
        <button className="question6__button">
          <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclickWrong}
          >
            Oui
          </Link>
        </button>
        <button className="question6__button">
          <Link
            activeClass="active"
            /* to="question7" */
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclickGood}
          >
            Non
          </Link>
        </button>
      </section>
      <section className="question6__section">
        <img
          className="question6__image"
          src="../../../assets/MariahCarrey.webp"
          alt="famille à noël"
        />
      </section>
    </div>
  );
}

export default Question6;
