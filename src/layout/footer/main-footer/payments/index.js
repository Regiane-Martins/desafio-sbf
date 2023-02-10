import { List, Title, Image, ListItem } from "./styled";

function Payments() {
  return (
    <>
      <Title>Formas de pagamento</Title>
      <List>
        <ListItem>
          <Image
            src={process.env.PUBLIC_URL + "/img/mastercard.svg"}
            alt="cartão mastercard"
          />
        </ListItem>

        <ListItem>
          <Image
            id="card2"
            src={process.env.PUBLIC_URL + "/img/visa.svg"}
            alt="cartão visa"
          />
        </ListItem>

        <ListItem>
          <Image
            id="card3"
            src={process.env.PUBLIC_URL + "/img/amex.svg"}
            alt="cartão american express"
          />
        </ListItem>

        <ListItem>
          <Image
            id="card4"
            src={process.env.PUBLIC_URL + "/img/elo.svg"}
            alt="cartão elo"
          />
        </ListItem>

        <ListItem>
          <Image
            id="card5"
            src={process.env.PUBLIC_URL + "/img/hipercard.svg"}
            alt="cartão hipercard"
          />
        </ListItem>

        <ListItem>
          <Image
            id="card6"
            src={process.env.PUBLIC_URL + "/img/discover.svg"}
            alt="cartão discover"
          />
        </ListItem>

        <ListItem>
          <Image
            id="card7"
            src={process.env.PUBLIC_URL + "/img/boleto.svg"}
            alt="boleto"
          />
        </ListItem>
      </List>
    </>
  );
}

export default Payments;
