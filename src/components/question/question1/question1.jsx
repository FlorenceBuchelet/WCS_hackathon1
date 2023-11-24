import "./question1.scss";
import { Link, animateScroll as scroll } from "react-scroll";
function Question1({ count, setCount, nextPos, setNextPos, show, setShow }) {
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
    console.log("enter handleclickwrong");
    setNextPos(750);
    setCount(1);
    setShow(true);
    console.log("show:", show);
    setTimeout(() => {
      console.log("after timeout");
      scrollTo();
    }, 100);
  };
  return (
    <div className="question1">
      <h1 className="question__title">Mais en es-tu digne ?</h1>
      <img
        className="question__image"
        src="../../assets/adoubement.jpg"
        alt="tableau d'un adoubement"
      />
      <section className="question1__section">

          <Link
            onClick={handleclickGood}
            className="question__buttons"
            /*   delay={300} */
            activeClass="active"
            /* to="question2" */
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
          >
            Évidemment
          </Link>
          <Link
          className="question__buttons"
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            /*    delay={30} */
            onClick={handleclickWrong}
          >
            Nope, vive Noël !!
          </Link>
      </section>
    </div>
  );
}

export default Question1;
