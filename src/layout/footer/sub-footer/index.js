import { Section, Links, List, Address } from "./styled";

function SubFooter() {
  return (
    <Section>
      <List>
        <li>
          <Links href="/">Brasil</Links>
        </li>
        <li>
          <Links href="/">Política de Privacidade</Links>
        </li>
        <li>
          <Links href="/">Termos de Uso</Links>
        </li>
      </List>

      <Address>
        © 2021 Nike. Todos os direitos reservados. Fisia Comércio de Produtos
        Esportivos Ltda - CNPJ: 59.546.515/0016-10 Rua José Semião Rodrigues
        Agostinho, 1370 - Galpão Unidade 17 - Nível 0, 1 e 2 - CEP 06833-300 -
        Embu das Artes/SP.
      </Address>
    </Section>
  );
}

export default SubFooter;
