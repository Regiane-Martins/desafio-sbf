import { Button } from "../../../components/button/styled";
import { Container } from "../../container";
import { Content, LogoIcon, Section, SubTitle, Title } from "./styled";

function News() {
  return (
    <Section>
      <Container>
        <Content>
          <LogoIcon
            src={process.env.PUBLIC_URL + "/img/nike.svg"}
            alt="logo Nike"
          />
          <Title>Receba as novidades da Nike</Title>
          <SubTitle>
            Cadastre-se e seja um dos primeiros a saber de todas as novidades e
            ofertas.
          </SubTitle>
          <Button href="#">Cadastre-se</Button>
        </Content>
      </Container>
    </Section>
  );
}

export default News;
