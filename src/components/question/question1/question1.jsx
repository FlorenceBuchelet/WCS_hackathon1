import "./question1.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question1() {
  const handleclick = () => {
    console.log("enter handleCLick");
    setTimeout(() => {
      console.log("after timeout");
    }, 2000);
  };
  return (
    <div className="question1">
      <section className="question1__section">
        <h1>En es-tu digne ?</h1>
        <button className="question1__button">
          <Link
            activeClass="active"
            to="question2"
            spy={true}
            smooth={true}
            offset={0}
            duration={2000}
            onClick={handleclick}
          >
            Oui
          </Link>
        </button>
        <button className="question1__button">
          <Link
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}
          >
            non
          </Link>
        </button>
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
