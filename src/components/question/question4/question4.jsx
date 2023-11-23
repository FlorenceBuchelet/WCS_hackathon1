import "./question4.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Question4() {
  const handleclick = () => {
    console.log("enter handleCLick");
    setTimeout(() => {
      console.log("after timeout");
    }, 5000);
  };
  return (
    <div className="question4">
      <section className="question4__section">
        <h1 className="question4__title">Dinde ou Choucroute ?</h1>
        <button className="question4__buttons question4__buttons--left">
          <Link
            activeClass="active"
            to="question1"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            Dinde
          </Link></button>
        <button className="question4__buttons question4__buttons--right">
          <Link
            activeClass="active"
            to="question5"
            spy={true}
            smooth={true}
            offset={0}
            duration={5000}
            onClick={handleclick}>
            Choucroute
          </Link>
        </button>
      </section>
    </div>
  );
}

export default Question4;
