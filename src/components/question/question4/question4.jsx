import "./question4.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question4({ count, setCount }) {
  const handleclick = () => {
    console.log("enter handleCLick");
    setTimeout(() => {
      console.log("after timeout");
    }, 5000);
  };
  return (
    <div className="question4">
      <section className="question4__section">
        <h1>Dinde ou Choucroute ?</h1>
        <button className="question4__button">
          <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}
          >
            Dinde
          </Link>
        </button>
        <button className="question4__button">
          <Link
            activeClass="active"
            to="question5"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}
          >
            Choucroute
          </Link>
        </button>
      </section>
      <section className="question4__section">
        <img
          className="question4__image"
          src="../../../assets/dinde.webp"
          alt="famille à noël"
        />
        <img
          className="question4__image"
          src="../../../assets/choucroute.webp"
          alt="livre et feux de cheminée"
        />
      </section>
    </div>
  );
}

export default Question4;
