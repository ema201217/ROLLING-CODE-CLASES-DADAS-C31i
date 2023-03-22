import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{height:"80vh"}}>
      {children}
      </div>
      <Footer />
    </>
  );
};
