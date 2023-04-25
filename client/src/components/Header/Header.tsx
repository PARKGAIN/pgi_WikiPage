import { Container, Logo } from "./styles";
import { Link } from "react-router-dom";
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
