import { Link } from "react-router-dom";
import { Container, Logo } from "./styles";

const Header = () => {
  return (
    <Link to="/">
      <Container>
        <Logo>Coding Hub</Logo>
      </Container>
    </Link>
  );
};

export default Header;
