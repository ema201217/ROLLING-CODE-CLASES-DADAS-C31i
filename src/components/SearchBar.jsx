import { Button, Form } from "react-bootstrap"

export const SearchBar = ({onInputValue,onSearchGiphy}) => {

  return (
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      onChange={onInputValue}
    />
    <Button variant="outline-dark" onClick={onSearchGiphy}>Buscar</Button>
  </Form>
  )
}
