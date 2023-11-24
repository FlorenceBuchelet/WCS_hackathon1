import "./Homepage.scss";
import Baubles from "../../components/baubles/Baubles";
import Baubles_1 from "../../components/baubles/Baubles_1";
import Baubles_2 from "../../components/baubles/Baubles_2";
import Baubles_3 from "../../components/baubles/Baubles_3";
import Baubles_4 from "../../components/baubles/Baubles_4";
import { Link, animateScroll as scroll } from "react-scroll";
function Homepage() {
  const scrollTo = () => {
    scroll.scrollTo(900);
  };
  return (
    <main className="homepage">
      <section className="homepage__baubles">
        <article className="homepage__baubles__0">
          <Baubles />
        </article>
        <article className="homepage__baubles__1">
          <Baubles_1 />
        </article>
        <article className="homepage__baubles__2">
          <Baubles_2 />
        </article>
        <article className="homepage__baubles__3">
          <Baubles_3 />
        </article>
        <article className="homepage__baubles__4">
          <Baubles_4 />
        </article>
      </section>
      <section className="homepage__text">
        <h1 className="homepage__title">
          Nous avons les meilleures excuses pour éviter Noël. Vous les voulez ?
        </h1>
        {/*cool button*/}
        <button className="homepage__button" onClick={scrollTo}>
          Oh oui !!!
        </button>
      </section>
    </main>
  );
}

export default Homepage;
