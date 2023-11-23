import "./RobotQuestion.scss";
import { Link } from ReactDOM

function RobotQuestion() {
  return (
    <div className="robotQuestion">
      <div className="robotQuestion__container">
        <div className="robotQuestion__title">
          <p>Choisissez le plus joli sapin</p>
          <h3>Êtes-vous humain ?</h3>
        </div>
        <div className="robotQuestion__grid">
          <Link className="robotQuestion__answer--wrong">
            <img
              src="src/assets/sapins/sapin4.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link className="robotQuestion__answer--wrong">
            <img
              src="src/assets/sapins/sapin3.jpeg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link className="robotQuestion__answer--wrong">
            <img
              src="src/assets/sapins/sapin1.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link className="robotQuestion__answer--wrong">
            <img
              src="src/assets/sapins/sapin7.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link className="robotQuestion__answer--wrong">
            <img
              src="src/assets/sapins/sapin5.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link className="robotQuestion__answer--wrong">
            <img
              src="src/assets/sapins/sapin2.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link className="robotQuestion__answer--right">
            <img
              src="src/assets/sapins/burningsapin.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link className="robotQuestion__answer--wrong">
            <img
              src="src/assets/sapins/sapin6.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
          <Link className="robotQuestion__answer--wrong">
            <img
              src="src/assets/sapins/sapin8.jpg"
              alt=""
              className="robotQuestion__grid--img"
            />
          </Link>
        </div>
        <div className="robotQuestion__footer">
          <img
            src="src/assets/footerrobotquestion.PNG"
            alt=""
            className="robotQuestion__footer--img"
          />
        </div>
      </div>
    </div>
  );
}

export default RobotQuestion;
