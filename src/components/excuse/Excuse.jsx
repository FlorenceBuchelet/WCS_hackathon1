import sorryArry from "../../components/questionAndSorry/sorryArray";
import "./Excuse.scss";
function Excuse() {
  return (
    <section className="excuse">
      <h1 className="excuse__h1">
        Nos 10 meilleurs techniques pour éviter les fêtes familles.
      </h1>
      {sorryArry.map((sorry) => (
        <div key={sorry.index}>
          <h3 className="excuse__h3">
            {sorry.id}. {sorry.excuse}
          </h3>
          <p className="excuse__explication">{sorry.explication}</p>
        </div>
      ))}
    </section>
  );
}

export default Excuse;
