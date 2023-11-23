import "./WrongAnswerPopup.scss";
import { useState } from "react";
function WrongAnswerPopup() {
  const [show, setShow] = useState(true);
  const [isActive, setIsActive] = useState("notActive");
  const handleClick = () => {
    setTimeout(() => {
      setShow(!show);
    }, 900);

    setIsActive("notActive");
  };
  return (
    <div>
      {show && (
        <section className={`WrongAnswerPopup ${isActive}`}>
          <h1>Mauvaise réponse !!</h1>
          <p>Concentres toi ! Je me demande si tu détestes réellement noël</p>
          <p>Je vous JURE, je déteste Noël </p>
          <button
            className="WrongAnswerPopup__closeButton"
            onClick={handleClick}
          >
            Je veux réessayer !
          </button>
        </section>
      )}
    </div>
  );
}

export default WrongAnswerPopup;
