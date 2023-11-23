import "./question9.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question9({ count, setCount, nextPos, setNextPos }) {
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
    <div className="question9">
      <section className="question9__section">
        <h1>Est-ce que tu aimes Noël ?</h1>
        <button className="question9__button">
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
        <button className="question9__button">
          <Link
            activeClass="active"
            to=""
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
      <section className="question9__section">
        <img
          className="question9__image"
          src="../../../assets/j'aimeNoel.webp"
          alt="famille à noël"
        />
        <img
          className="question9__image"
          src="../../../assets/jaimePasNoel.jpg"
          alt="livre et feux de cheminée"
        />
      </section>
    </div>
  );
}

export default Question9;
