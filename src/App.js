import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CardItem } from "./components/CardItem";
import { Header } from "./components/Header";
import { formatGiphy } from "./helpers/formatGiphy";
import { getGiphy } from "./services/serviceGiphy";

export const App = () => {
  /* listado de productos */
  const arrProductos = ["TV 55'", "Cafetera", "Notebook", "Smartphone"];

  const [keyword, setKeyword] = useState("");
  const [gifs, setGifs] = useState([]);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };



  const handleSearchGiphy = async () => {
    const gifsData = await getGiphy(keyword);
    // 1 - sacar lo que se necesita y luego 🔽  ✔️
    // 2 - seteo  ⁉️

    // console.log(gifsData);
    const gifsFormatted = formatGiphy(gifsData)
    setGifs(gifsFormatted)
  };

  return (
    <div className="">
      <Header
        onInputValue={handleInputChange}
        onSearchGiphy={handleSearchGiphy}
      />

      <h1 className="text-danger text-center my-4">Giphy</h1>

      <Container fluid>
        <Row className="justify-content-center gap-2">
          
        {/* map, filter, reduce */}
        {
          gifs.map(gif => <CardItem title={gif.title} image={gif.image} key={gif.id}/>)
        }

        </Row>
      </Container>
    </div>
  );
};
