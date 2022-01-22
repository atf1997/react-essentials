import "./App.css";
import logo from"./logo.svg";

const dishes = ["Madroña", "Salmon"];
const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

function Header(props) {
  return (
    <header>
      <h1> {props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <ul>
        {props.dishes.map((dishObject) => (
          <ul key={dishObject.id}>{dishObject.title}</ul>
        ))}
      </ul>
      <img src={logo} height={200} alt="image of dish" />
    </section>
  );
}
function Footer(params) {
  return (
    <footer>
      <p>Copyright {params.year}</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Abdo" />
      <Main dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
