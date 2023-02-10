import { List, Title } from "./styled";

function SocialMedia() {
  return (
    <>
      <Title>Redes sociais</Title>
      <List>
        <li>
          <a href="/">
            <img
              src={process.env.PUBLIC_URL + "/img/facebook.svg"}
              alt="logo facebook"
            />
          </a>
        </li>
        <li>
          <a href="/">
            <img
              src={process.env.PUBLIC_URL + "/img/instagram.svg"}
              alt="logo instagram"
            />
          </a>
        </li>
        <li>
          <a href="/">
            <img
              src={process.env.PUBLIC_URL + "/img/youtube.svg"}
              alt="logo youtube"
            />
          </a>
        </li>
      </List>
    </>
  );
}

export default SocialMedia;
