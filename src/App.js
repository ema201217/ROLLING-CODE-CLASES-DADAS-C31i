import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { CardItem } from "./components/CardItem";
import { Header } from "./components/Header";
import { SpinnerLoading } from "./components/Spinner";
import { formatGiphy } from "./helpers/formatGiphy";
import { useFetch } from "./hooks/useFetch";

export const App = () => {
  const [keyword, setKeyword] = useState("");
  const api_key = "S2hl5NsUHAODVNhfYdRK2go8lq7TNcUI";
  const api_url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=12&q=${keyword}`;

  const { data, loading } = useFetch(api_url);
  const gifs = formatGiphy(data);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <Header onInputValue={handleInputChange} />
      <h1 className="text-danger text-center my-4">Giphy</h1>
      <Container fluid>
        <Row className="justify-content-center gap-2">
          {/* map, filter, reduce */}
          {loading ? (
            <SpinnerLoading />
          ) : (
            gifs.map((gif) => (
              <CardItem title={gif.title} image={gif.image} key={gif.id} />
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};
