import { Link, animateScroll as scroll } from "react-scroll";
import './question8.scss'
function Question8() {
  const handleclick = () => {
    console.log("enter handleCLick");
    setTimeout(() => {
      console.log("after timeout");
    }, 5000);
  };
  return (
    <div className="question8">
      <section className="question8__section">
        <h1 className="question8__title">Bambi ou Grinch ?</h1>
        <div className="question8__buttons--container">

          <button className="question8__buttons question8__buttons--left">
            <Link
              activeClass="active"
              to="question1"
              spy={true}
              smooth={true}
              offset={0}
              duration={5000}
              onClick={handleclick}>
              
            </Link></button>
          <button className="question8__buttons question8__buttons--right">
            <Link
              activeClass="active"
              to="question9"
              spy={true}
              smooth={true}
              offset={0}
              duration={5000}
              onClick={handleclick}>
              
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Question8;