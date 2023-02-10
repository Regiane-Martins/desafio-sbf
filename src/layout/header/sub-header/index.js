import { Container } from "../../../layout/container";
import { Nav, NavContent, PrimaryJordan, PrimaryLogo } from "./styled";

function SubHeader() {
  return (
    <Nav>
      <Container>
        <NavContent>
          <section>
            <PrimaryJordan
              src={process.env.PUBLIC_URL + "/img/jordan.svg"}
              alt="simbolo Jordan"
            />
            <PrimaryLogo
              src={process.env.PUBLIC_URL + "/img/snkrs.svg"}
              alt="logo Snkrs"
            />
          </section>
          <ul>
            <li>
              <a href="#">Ajuda</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">Acompanhe seu pedido</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">Junte-se a nós</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">Entrar</a>
            </li>
          </ul>
        </NavContent>
      </Container>
    </Nav>
  );
}

export default SubHeader;
