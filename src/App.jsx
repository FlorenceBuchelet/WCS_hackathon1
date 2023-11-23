import "./App.scss";
import Questions from "./pages/Questions/Questions";
import Homepage from "./pages/Homepage/Homepage"


function App() {
  return (
    <>
    <Homepage/>
    <section className="App__question">
<Questions />
</section>
    </>
  );
}

export default App;
