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
        <h1 className="question6__title">Mariah Carey ?</h1>
          <img
            className="question6__image"
            src="../../../assets/MariahCarrey.webp"
            alt="famille à noël"
          />
          <div className="question6__buttons--container">
        <button className="question6__buttons">
        <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            OuiiiHiii 🎶
          </Link></button>
        <button className="question6__buttons">
          <Link
            activeClass="active"
            to="question7"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            Nononono 👂
          </Link>
        </button>
          </div>
      </section>
    </div>
  );
}

export default Question6;
