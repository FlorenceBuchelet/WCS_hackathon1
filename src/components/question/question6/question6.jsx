import "./Question6.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question6() {
  const handleclick = () => {
    console.log("enter handleCLick");
    setTimeout(() => {
      console.log("after timeout");
    }, 5000);
  };
  return (
    <div className="question6">
      <section className="question6__section">
        <h1>Mariah Carey ?</h1>
        <button className="question6__button">
        <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            Oui
          </Link></button>
        <button className="question6__button">
          <Link
            activeClass="active"
            to="question7"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            Non
          </Link>
        </button>
      </section>
      <section className="question6__section">
        <img
          className="question6__image"
          src="../../../assets/MariahCarrey.webp"
          alt="famille à noël"
        />
      </section>
    </div>
  );
}

export default Question6;
