import sorryArry from "../../components/questionAndSorry/sorryArray";
import "./Excuse.scss";
function Excuse() {
  return (
    <section className="excuse">
      <h1 className="excuse__h1"> ✨ Félicitations ✨ </h1>
      <h2 className="excuse__h2">
  Nos ultimes techniques
        pour éviter Noël :
      </h2>
      <article className="excuse__E">
      {sorryArry.map((sorry) => (
        <div key="excuse__h3">
          <h3 className={"excuse__h3"} id={`${sorry.index}`}><span>{`${sorry.id}.`}</span>{" "}{sorry.excuse}</h3>
        </div>
        
      ))}
      </article>
    </section>
  );
}

export default Excuse;
