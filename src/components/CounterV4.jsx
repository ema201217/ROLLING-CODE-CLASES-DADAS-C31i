import { useState } from "react";
import { Button } from "react-bootstrap";
import { Tostada } from "./Tostada";

export const CounterV4 = () => {
  const [showCounter, setShowCounter] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [intervalActive, setIntervalActive] = useState(null);

  const toggleShowCounter = () => {
    setShowCounter(!showCounter);

    if (intervalActive) {
      return;
    }

    const interval = setInterval(() => {
      const timeCurrent = new Date().toLocaleTimeString();
      setTime(timeCurrent);
    }, 1000);

    setIntervalActive(interval);
  };

  return (
    <div className="d-flex flex-column justify-content-center my-5">
      <Button className="mb-2 mx-auto" onClick={toggleShowCounter}>
        Montar Contador
      </Button>
      <Tostada show={showCounter} onClose={toggleShowCounter} time={time} />
    </div>
  );
};