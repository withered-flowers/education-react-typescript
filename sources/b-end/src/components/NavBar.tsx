const NavBar = () => {
  return (
    <>
      <nav>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            listStyle: "none",
            paddingLeft: "0",
          }}
        >
          <li>
            <a href="#">Counter</a>
          </li>
          <li>
            <a href="#">Form</a>
          </li>
          <li>
            <a href="#">Table</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
