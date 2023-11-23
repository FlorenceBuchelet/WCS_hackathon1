import "./question1.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question1() {
  const handleclick = () => {
    console.log("enter handleCLick");
    setTimeout(() => {
      console.log("after timeout");
    }, 5000);
  };
  return (
    <div className="question1">
      <section className="question1__section">
        <h1 className="question1__title">En es-tu digne ?</h1>
        <button className="question1__buttons">
          <Link
            activeClass="active"
            to="question2"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            Oui
          </Link>
        </button>
        <button className="question1__buttons">Non</button>
      </section>
      <img
        className="question1__image"
        src="../../assets/adoubement.jpg"
        alt="tableau d'un adoubement"
      />
    </div>
  );
}


export default Question1;
