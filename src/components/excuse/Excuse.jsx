import sorryArry from "../../components/questionAndSorry/sorryArray";
import "./Excuse.scss";
function Excuse() {
  return (
    <section className="excuse">
      <h1 className="excuse__h1">Nos ultimes techniques pour éviter Noël.</h1>
      {sorryArry.map((sorry) => (
        <div key={sorry.index}>
          <h3 className="excuse__h3">{sorry.excuse}</h3>
        </div>
      ))}
    </section>
  );
}

export default Excuse;
