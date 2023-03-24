export const Nav = ({ isDarkMode }) => {
  // atado a un estado

  const bgNav = isDarkMode ? "black" : "white";
  return (
    <div>
      <nav style={{ backgroundColor: bgNav, height: "100px" }}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
