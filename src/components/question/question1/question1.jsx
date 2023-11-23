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
        <h1 className="question1__title">Mais en es-tu digne ?</h1>
          <img
            className="question1__image"
            src="../../assets/adoubement.jpg"
            alt="tableau d'un adoubement"
          />
      <section className="question1__section">
        <button className="question1__buttons">
          <Link
            activeClass="active"
            to="question2"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            Évidemment
          </Link>
        </button>
        <button className="question1__buttons">
          <Link
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            Nope, vive Noël !!
          </Link></button>
      </section>
    </div>
  );
}


export default Question1;
