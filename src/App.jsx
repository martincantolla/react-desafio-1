import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./components/Card";
import Header from "./components/Header";
import Row from "react-bootstrap/Row";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header titulo="Adopta Un Perrito"></Header>
      <Row>
        <MyCard
          img={"https://placedog.net/641/480?r"}
          name={"Pakun"}
          desc={"Listo y rapido. Es un muy buen perro ninja"}
          color={"dark"}
          texto={"Ninja"}
        ></MyCard>
        <MyCard
          img={"https://placedog.net/642/480?r"}
          name={"Prisa"}
          desc={"Bella y veloz. Es la mejor compañera de aventuras perrunas."}
          color={"info"}
          texto={"Clérica"}
        ></MyCard>
        <MyCard
          img={"https://placedog.net/643/480?r"}
          name={"Rex"}
          desc={
            "El rey de los peludos. Su majestuoso pelo inspira admiración en niños y adultos por igual"
          }
          color={"danger"}
          texto={"Guerrera"}
        ></MyCard>
        <MyCard
          img={"https://placedog.net/640/480?r"}
          name={"Pulga"}
          desc={
            "Callejero pero caballero. Es el más vivo e inteligente de todos"
          }
          color={"success"}
          texto={"Mago"}
        ></MyCard>
      </Row>
      <Footer
        texto={
          "Explora nuestra galeria de perritos en adopción. Cada uno tiene una personalidad única y están buscando un hogar. Adopta a un perro y dale una segunda oportunidad "
        }
      ></Footer>
    </>
  );
}
export default App;
