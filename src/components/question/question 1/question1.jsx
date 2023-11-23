import "./question1.scss";

function Question1() {
  return (
    <div className="question1">
      <section className="question1__section">
        <h1>En es-tu digne ?</h1>
        <button>Oui</button>
        <button>Non</button>
      </section>
      <img
        className="question1__image"
        src="../../assets/adoubement.jpg"
        alt="tableau d'un adoubement"
      />
    </div>
  );
}

export default Question1;
