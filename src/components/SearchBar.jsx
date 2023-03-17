import { Form } from "react-bootstrap"

export const SearchBar = ({onInputValue}) => {

  return (
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      onChange={onInputValue}
    />
  </Form>
  )
}
