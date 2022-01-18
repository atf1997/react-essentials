import "./App.css";

const dishes = ['Macrona','Salamon']

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
        {props.dishes.map((dish) => (
          console.log(dish),
          <li>{dish}</li>
        ))}
      </ul>
    </section>
  );
}
function Footer(params) {
  return (
    <header>
      <h1>Footer</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Abdo"/>
      <Main dishes={dishes} />
      <Footer />
    </div>
  ) ;
                      
}

export default App;
