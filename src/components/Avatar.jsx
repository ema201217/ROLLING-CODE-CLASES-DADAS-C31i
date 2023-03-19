import { Image } from "react-bootstrap";

export const Avatar = () => {
  return (
    <small>
      <Image
        roundedCircle
        style={{ height: "40px" }}
        src="https://avatars.githubusercontent.com/u/85381508?v=4"
        alt="avatar"
      />
    </small>
  );
};
