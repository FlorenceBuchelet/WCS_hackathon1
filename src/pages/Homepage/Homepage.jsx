import "./Homepage.scss"

function Homepage() {
  return (
    <div className="homepage">
      <h1 className="homepage__title">Tu les veux tes excuses pour ne pas fêter Noël ??</h1>
      {/*cool button*/}
      <button class='homepage__button'><span class='glowing-txt'>Oui <span class='faulty-letter'>oui </span>oui !!</span></button>
    </div>
  );
}

export default Homepage;
