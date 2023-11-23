import "./question1.scss";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { useEffect } from "react";
function Question1({ count, setCount, nextPos, setNextPos }) {
  /*   useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });
    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });
    // Updating scrollSpy when the component mounts.
    scrollSpy.update();
    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []); */
  /*   console.log("count entry q1:", count);
  const timeout = () => {
    setTimeout(() => {
      console.log("after timeout");
    }, 2000);
  };*/
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
    <div className="question1">
      <h1 className="question1__title">Mais en es-tu digne ?</h1>
      <img
        className="question1__image"
        src="../../assets/adoubement.jpg"
        alt="tableau d'un adoubement"
      />
      <section className="question1__section">
        <button className="question1__buttons">
          <Link
            onClick={handleclickGood}
            /*   delay={300} */
            activeClass="active"
            /* to="question2" */
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
          >
            Oui
          </Link>
        </button>
        <button className="question1__buttons">
          <Link
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
        </button>
      </section>
    </div>
  );
}

export default Question1;
