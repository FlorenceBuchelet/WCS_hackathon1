import { Link, animateScroll as scroll } from "react-scroll";
import "./Question7.scss";
function Question7({ count, setCount }) {
  const handleclick = () => {
    console.log("enter handleCLick");
    setTimeout(() => {
      console.log("after timeout");
    }, 5000);
  };
  return (
    <div className="question7">
      <section className="question7__section">
        <h1>As-tu déjà raté l'avion ?</h1>
        <button className="question7__button">
          <Link
            activeClass="active"
            to="question8"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}
          >
            Oui
          </Link>
        </button>
        <button className="question7__button">
          <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}
          >
            Non
          </Link>
        </button>
      </section>
      <section className="question7__section">
        <img
          className="question7__image"
          src="../../../assets/MamaJaiRateLavion.jpg"
          alt="famille à noël"
        />
      </section>
    </div>
  );
}

export default Question7;
