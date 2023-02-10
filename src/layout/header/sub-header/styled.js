import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #f7f7f7;
`;

export const NavContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;

  ul {
    display: flex;
    font-size: 0.75rem;
    gap: 12px;
    list-style-type: none;
  }

  a {
    color: #737373;
    text-decoration: none;
  }
`;

export const PrimaryJordan = styled.img`
  height: auto;
  margin-right: 19px;
  width: 19.2px;
`;

export const PrimaryLogo = styled.img`
  height: auto;
  width: 46px;
`;
