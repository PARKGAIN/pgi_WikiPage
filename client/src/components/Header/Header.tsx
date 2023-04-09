import { Link } from "react-router-dom";
import { Container, Logo } from "./styles";
const Header = () => {
  return (
    <Container>
      <Link to={"/"}>
        <Logo>코딩허브</Logo>
      </Link>
    </Container>
  );
};

export default Header;
