import { ItemLink, List, Title } from "./styled";

function Assistant() {
  return (
    <div>
      <Title>Ajuda</Title>
      <List>
        <li>
          <ItemLink href="/">Dúvidas Gerais</ItemLink>
        </li>
        <li>
          <ItemLink href="/">Encontre seu Tamanho</ItemLink>
        </li>
        <li>
          <ItemLink href="/">Entregas</ItemLink>
        </li>
        <li>
          <ItemLink href="/">Pedidos</ItemLink>
        </li>
        <li>
          <ItemLink href="/">Trocas e Devoluções</ItemLink>
        </li>
        <li>
          <ItemLink href="/">Editar consentimento</ItemLink>
        </li>
        <li>
          <ItemLink href="/">Preferências de Cookie</ItemLink>
        </li>
        <li>
          <ItemLink href="/">Pagamentos</ItemLink>
        </li>
        <li>
          <ItemLink href="/">Produtos</ItemLink>
        </li>
        <li>
          <ItemLink href="/">Corporativo</ItemLink>
        </li>
        <li>
          <ItemLink href="/">Fale Conosco</ItemLink>
        </li>
      </List>
    </div>
  );
}

export default Assistant;
