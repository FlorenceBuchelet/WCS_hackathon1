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
    setNextPos(750);
    setCount(1);
    setNextPos(750);
    setTimeout(() => {
      console.log("after timeout");
      scrollTo();
    }, 100);
  };
  return (
    <div className="question6">
      <section className="question6__section">
        <h1 className="question6__title">Mariah Carey ?</h1>
          <img
            className="question6__image"
            src="../../../assets/MariahCarrey.webp"
            alt="famille à noël"
          />
          <div className="question6__buttons--container">
        <button className="question6__buttons">
        <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            OuiiiHiii 🎶
          </Link></button>
        <button className="question6__buttons">
          <Link
            activeClass="active"
            /* to="question7" */
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclickGood}
          >
            Nononono 👂
          </Link>
        </button>
          </div>
      </section>
    </div>
  );
}

export default Question6;
