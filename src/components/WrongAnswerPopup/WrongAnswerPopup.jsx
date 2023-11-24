import "./WrongAnswerPopup.scss";
import { useState } from "react";
function WrongAnswerPopup({ show, setShow }) {
  const [isActive, setIsActive] = useState("active");
  const handleClick = () => {
    setIsActive("active");
    setIsActive("notActive");
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  return (
    <div>
      <section className={`WrongAnswerPopup ${isActive}`}>
        <h1>Mauvaise réponse !!</h1>
        <p>Concentre-toi ! Je me demande si tu détestes réellement noël.</p>
        <p>Je vous JURE, je déteste Noël !!</p>
        <button className="WrongAnswerPopup__closeButton" onClick={handleClick}>
          Je veux réessayer !
        </button>
      </section>
    </div>
  );
}

export default WrongAnswerPopup;
