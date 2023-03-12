import { useState } from "react";
import { Button, ButtonGroup, Toast } from "react-bootstrap";

export const Tostada = ({ show, onClose, time }) => {
  const [count, setCount] = useState(0);
  const [intervalActiveIncrement, setIntervalActiveIncrement] = useState(null);

  const autoIncrement = () => {

    if(intervalActiveIncrement){
      return
    }

    const intervalIncrement = setInterval(() => {
      setCount((counterCurrent) => {
        return counterCurrent + 1;
      });
    }, 1000);
    console.log(intervalIncrement)
    setIntervalActiveIncrement(intervalIncrement);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };


  
  const reset = () => {
    setCount(0);
  };
 
  const dobleClickReset = () => {
    if(intervalActiveIncrement){
      clearInterval(intervalActiveIncrement)
    }
  }

  return (
    <Toast show={show} onClose={onClose} className="mx-auto">
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Contador V4</strong>
        <small>{time}</small>
      </Toast.Header>
      <Toast.Body className="text-center mb-4">
        <h1 className="display-1 fw-bold">{count}</h1>
        <ButtonGroup>
          <Button variant="danger" onClick={decrement}>
            Decrementar
          </Button>
          <Button variant="dark" onClick={reset} onMouseEnter={dobleClickReset}>
            Reset
          </Button>
          <Button variant="success" onClick={increment} onMouseEnter={autoIncrement}>
            Aumentar
          </Button>
        </ButtonGroup>
      </Toast.Body>
    </Toast>
  );
};
