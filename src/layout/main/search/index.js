import { Button } from "../../../components/button/styled";
import { Container } from "../../container";
import { Section, Title, Input, Content } from "./styled";

function Search() {
  return (
    <Section>
      <Container>
        <Title>Lojas</Title>
        <Content>
          <Input type="text" placeholder="Busque por endereço ou CEP" />
          <Button href="/">Buscar</Button>
        </Content>
      </Container>
    </Section>
  );
}

export default Search;
