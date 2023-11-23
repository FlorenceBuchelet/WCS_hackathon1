import "./question9.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question9() {
  const handleclick = () => {
    console.log("enter handleCLick");
    setTimeout(() => {
      console.log("after timeout");
    }, 5000);
  };
  return (
    <div className="question9">
      <section className="question9__section">
        <h1 className="question9__title">Est-ce que tu aimes Noël ?</h1>
        <div className="question9__buttons--container">

        <button className="question9__buttons question9__buttons--left">
        <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            J'a-dore 🎄
          </Link></button>
        <button className="question9__buttons question9__buttons--right">
          <Link
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            J'en peux plus 🤢
          </Link>
        </button>
              </div>
      </section>
      <section className="question9__section">
      </section>
    </div>
  );
}

export default Question9;
