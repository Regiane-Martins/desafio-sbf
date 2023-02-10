import { NavContent, Basket, Logo, Nav } from "./styled";
import { Container } from "../../../layout/container";

function MainHeader() {
  return (
    <Nav>
      <Container>
        <NavContent>
          <a href="">
            <Logo
              src={process.env.PUBLIC_URL + "/img/nike.svg"}
              alt="logo Nike"
            />
          </a>
          <ul>
            <li>
              <a href="#">Lançamento</a>
            </li>
            <li>
              <a href="#">Masculino</a>
            </li>
            <li>
              <a href="#">Feminino</a>
            </li>
            <li>
              <a href="#">Infantil</a>
            </li>
            <li>
              <a href="#">Ofertas</a>
            </li>
            <li>
              <a href="#">SNKRS</a>
            </li>
          </ul>
          <div>
            <input type="search" placeholder="Buscar" />
            <a href="#">
              <Basket
                src={process.env.PUBLIC_URL + "/img/cart.svg"}
                alt="carrinho de compras"
              />
            </a>
          </div>
        </NavContent>
      </Container>
    </Nav>
  );
}

export default MainHeader;
