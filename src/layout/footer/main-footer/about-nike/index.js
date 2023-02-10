import { ItemLink, List, Section, Title } from "./styled";

function AboutNike() {
  return (
    <Section>
      <Title>Sobre a Nike</Title>
      <List>
        <li>
          <ItemLink href="#">Feito para Jogar</ItemLink>
        </li>
        <li>
          <ItemLink href="#">Sustentabilidade</ItemLink>
        </li>
      </List>
    </Section>
  );
}

export default AboutNike;
