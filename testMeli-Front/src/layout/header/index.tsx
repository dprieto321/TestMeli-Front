import Logo from "../../components/Logo";
import Search from "../../components/Search";
import Container from "../container";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Container className="containerHeader">
        <Logo />
        <Search />
      </Container>
    </header>
  );
};

export default Header;
