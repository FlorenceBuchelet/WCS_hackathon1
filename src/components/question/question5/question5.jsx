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
        <h1>Quelle est ta saison préférée ?</h1>
        <button className="question5__button">
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
        <button className="question5__button">
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
        <button className="question5__button">
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
        <button className="question5__button">
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
