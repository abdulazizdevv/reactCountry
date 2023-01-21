import Header from "./Components/Header";
import Form from "./Components/Form";
import Card from "./Components/Card";
import data from "./data";
import "./Components/Header.scss";
import "./Components/Country.scss";
import "./Components/Card.scss";

function App() {
  return (
    <>
      <Header />
      <Form />
      <div className="all-cards">
        {data.map((item) => {
          return (
            <Card
              name={item.name}
              img={item.img}
              population={item.population}
              capital={item.capital}
              region={item.region}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
