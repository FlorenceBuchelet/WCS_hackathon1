import { Link, animateScroll as scroll } from "react-scroll";
import "./question8.scss";
function Question8({ count, setCount, nextPos, setNextPos, show, setShow }) {
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
    <div className="question8">
      <section className="question8__section">
        <h1 className="question8__title">La Course aux Jouets ou Le Grinch ?</h1>
        <div className="question8__buttons--container">
          <Link
            className="question8__buttons question8__buttons--left"
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            onClick={handleclickWrong}
          ></Link>

          <Link
            className="question8__buttons question8__buttons--right"
            activeClass="active"
            /* to="question9" */
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            onClick={handleclickGood}
          ></Link>
        </div>
      </section>
    </div>
  );
}

export default Question8;
