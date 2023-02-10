import About from "./about";
import { FooterContainer, LastSection, MainFooter } from "./styled";
import Assistant from "./assistant";
import AboutNike from "./about-nike";
import Payments from "./payments";
import SocialMedia from "./social-media";
import { Container } from "../../container";
import SubFooter from "../sub-footer";

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <MainFooter>
          <About />
          <Assistant />
          <AboutNike />
          <LastSection>
            <SocialMedia />
            <Payments />
          </LastSection>
        </MainFooter>
        <hr />
        <SubFooter />
      </Container>
    </FooterContainer>
  );
}

export default Footer;
