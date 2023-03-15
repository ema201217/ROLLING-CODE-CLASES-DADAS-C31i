import { useState } from "react";
import { Container } from "react-bootstrap";
import { CardItem } from "./components/CardItem";
import { Header } from "./components/Header";
import { getGiphy } from "./services/serviceGiphy";


export const App = () => {
  /* listado de productos */
  const arrProductos = ["TV 55'","Cafetera","Notebook","Smartphone"]

  const [keyword,setKeyword] = useState("")
  const [gifs, setGifs] = useState([])

  const handleInputChange = (e) => {
    setKeyword(e.target.value)
  }
  
  const handleSearchGiphy = () => {
    const gifsData = getGiphy(keyword);
    // sacar lo que se necesita y luego 🔽
    // seteo
  }

  return (
    <div className="">
      <Header onInputValue={handleInputChange} onSearchGiphy={handleSearchGiphy}/>

      <h1 className="text-danger text-center my-4">Giphy</h1>

      <Container fluid>

        {/* map, filter, reducer */}
        {
         arrProductos.map((producto,index) => {
          return <h2 key={index}>{producto}</h2>
         })
        }
        
        <CardItem /> {/* children */}
      </Container>
    </div>
  );
};
