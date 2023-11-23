import { Link, animateScroll as scroll } from "react-scroll";
import './question2.scss'
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
        <h1 className="question2__title">Aimes-tu Die Hard ?</h1>
        <img
          className="question2__image"
          src="../../../assets/DieHard.jpg"
          alt="famille à noël"
        />
        <div className="question2__buttons--container">

          <button className="question2__buttons">
            <Link
              activeClass="active"
              to="question1"
              spy={true}
              smooth={true}
              offset={0}
              duration={5000}
              onClick={handleclick}>
              Oui 💕
            </Link></button>
          <button className="question2__buttons">
            <Link
              activeClass="active"
              to="robotQuestion"
              spy={true}
              smooth={true}
              offset={0}
              duration={5000}
              onClick={handleclick}>
              Non ✖
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Question2;