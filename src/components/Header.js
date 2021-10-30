import logo from "../images/logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <img className="logo" src={logo} id="logo" alt="Around he U.S. logo" />
      </header>
    </>
  );
}

export default Header;
