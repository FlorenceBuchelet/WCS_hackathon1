import "./question5.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question5() {
  const handleclick = () => {
    console.log("enter handleCLick");
    setTimeout(() => {
      console.log("after timeout");
    }, 5000);
  };
  return (
    <div className="question5">
      <section className="question5__section">
        <h1 className="question5__title">Quelle est ta saison préférée ?</h1>
          <div className="question5__buttons--container">
        <button className="question5__buttons question5__buttons--printemps">
          <Link
            activeClass="active"
            to="question6"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            Printemps
          </Link>
        </button>
        <button className="question5__buttons question5__buttons--ete">
          <Link
            activeClass="active"
            to="question6"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            Eté
          </Link>
        </button>
        <button className="question5__buttons question5__buttons--automne">
          <Link
            activeClass="active"
            to="question6"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
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
            onClick={handleclick}>
            Hiver
          </Link>
        </button>
        </div>
      </section>
    </div>
  );
}


export default Question5;
