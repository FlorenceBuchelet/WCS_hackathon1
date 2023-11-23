import "./Homepage.scss";
import Baubles from "../../components/baubles/Baubles";

function Homepage() {
  return (
    <main className="homepage">
      <section>
        <Baubles/>
      </section>
      <section>
      <h1 className="homepage__title">
        Tu les veux les meilleurs excuses pour ne pas fêter Noël ??
      </h1>
      {/*cool button*/}
      <button className="homepage__button">Click ici !</button>
      </section>
    </main>
  );
}

export default Homepage;
