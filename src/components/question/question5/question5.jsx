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
        <h1>Quelle est ta saison préférée ?</h1>
        <button className="question5__button">
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
        <button className="question5__button">
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
        <button className="question5__button">
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
        <button className="question5__button">
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
      </section>
      <img
        className="question5__image"
        src="../../../assets/pintemps.jpeg"
        alt="tableau d'un adoubement"
      />
      <img
        className="question5__image"
        src="../../../assets/Ete.webp"
        alt="tableau d'un adoubement"
      />
      <img
        className="question5__image"
        src="../../../assets/automne.avif"
        alt="tableau d'un adoubement"
      />
      <img
        className="question5__image"
        src="../../../assets/hiver.jpg"
        alt="tableau d'un adoubement"
      />
    </div>
  );
}

export default Question5;
