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
    <div className="popUp">
      <section className={`WrongAnswerPopup ${isActive}`}>
        <h1>Mauvaise réponse !!</h1>
       
        <p> Tu détestes réellement noël ?</p>
        <button className="WrongAnswerPopup__closeButton" onClick={handleClick} 
        // className="question__buttons "
        >
          Je vous jure, je déteste Noël !!
        </button>
      </section>
    </div>
  );
}

export default WrongAnswerPopup;
