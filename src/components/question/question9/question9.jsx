import "./question9.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question9({ count, setCount }) {
  const handleclick = () => {
    console.log("enter handleCLick");
    setTimeout(() => {
      console.log("after timeout");
    }, 5000);
  };
  return (
    <div className="question9">
      <section className="question9__section">
        <h1>Est-ce que tu aimes Noël ?</h1>
        <button className="question9__button">
          <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}
          >
            Oui
          </Link>
        </button>
        <button className="question9__button">
          <Link
            activeClass="active"
            to=""
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
      <section className="question9__section">
        <img
          className="question9__image"
          src="../../../assets/j'aimeNoel.webp"
          alt="famille à noël"
        />
        <img
          className="question9__image"
          src="../../../assets/jaimePasNoel.jpg"
          alt="livre et feux de cheminée"
        />
      </section>
    </div>
  );
}

export default Question9;
