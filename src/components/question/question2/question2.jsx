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
            <h1>Aimes-tu Die Hard</h1>
            <button className="question2__button">
            <Link
                activeClass="active"
                to="question1"
                spy={true}
                smooth={true}
                offset={0}
                duration={5000}
                onClick={handleclick}>
                oui
              </Link></button>
            <button className="question2__button">
              <Link
                activeClass="active"
                to="robotQuestion"
                spy={true}
                smooth={true}
                offset={0}
                duration={5000}
                onClick={handleclick}>
                non
              </Link>
            </button>
          </section>
          <section className="question2__section">
            <img
              className="question2__image"
              src="../../../assets/DieHard.jpg"
              alt="famille à noël"
            />
          </section>
        </div>
      );
}

export default Question2;