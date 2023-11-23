import "./question2.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question2() {
  const handleclick = () => {
    console.log("enter handleCLick");
    setTimeout(() => {
      console.log("after timeout");
    }, 5000);
  };
  return (
    <div className="question2">
      <section className="question2__section">
        <h1>Est-ce que tu aimes Noël ?</h1>
        <button className="question2__button">Oui</button>
        <button className="question2__button">
          <Link
            activeClass="active"
            to="robotQuestion"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            Non
          </Link>
        </button>
      </section>
      <section className="question2__section">
        <img
          className="question2__image"
          src="../../../assets/j'aimeNoel.webp"
          alt="famille à noël"
        />
        <img
          className="question2__image"
          src="../../../assets/jaimePasNoel.jpg"
          alt="livre et feux de cheminée"
        />
      </section>
    </div>
  );
}

export default Question2;
