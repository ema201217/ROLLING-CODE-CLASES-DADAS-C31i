import { Toast } from "react-bootstrap";


export const Card = ({children}) => {
  return (
    <Toast className="d-inline-block m-1" bg="light">
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">ema201217</strong>
        {/* 👇children Avatar */}
        {children}
      </Toast.Header>
      <Toast.Body>
        <a href="https://api.github.com/users/ema201217">
          https://api.github.com/users/ema201217
        </a>
      </Toast.Body>
    </Toast>
  );
};
