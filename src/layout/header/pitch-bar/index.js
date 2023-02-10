import { Container } from "../../../layout/container";
import { NavContent, Logo, Arrow, Nav } from "./styled";

function PitchBar() {
  return (
    <Nav>
      <Container>
        <NavContent>
          <a href="/">
            <Arrow
              src={process.env.PUBLIC_URL + "/img/arrow-left.svg"}
              alt="seta esquerda"
            />
          </a>

          <div>
            <Logo
              src={process.env.PUBLIC_URL + "/img/snkrs-full.svg"}
              alt="logo grupo snkrs"
            />
            <p>
              Fique por dentro dos lançamentos <a href="/">SNKRS</a>
            </p>
          </div>
          <a href="/">
            <Arrow
              src={process.env.PUBLIC_URL + "/img/arrow-right.svg"}
              alt="seta direita"
            />
          </a>
        </NavContent>
      </Container>
    </Nav>
  );
}

export default PitchBar;
