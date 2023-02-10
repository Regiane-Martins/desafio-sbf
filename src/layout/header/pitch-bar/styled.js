import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #f7f7f7;
`;

export const NavContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  padding: 8px 0;

  div {
    align-items: center;
    color: #1a1a1a;
    display: flex;
    font-size: 0.875rem;
    font-weight: 400;
  }

  p > a {
    color: #1a1a1a;
  }
`;

export const Arrow = styled.img`
  background-color: #fff;
  border-radius: 50px;
  color: #1a1a1a;
  height: auto;
  width: 24px;
`;

export const Logo = styled.img`
  height: auto;
  padding-right: 1.506rem;
`;
