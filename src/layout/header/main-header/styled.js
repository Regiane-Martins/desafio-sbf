import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #fff;
`;

export const NavContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;

  ul {
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    gap: 24px;
    justify-content: center;
    list-style: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  div {
    align-items: center;
    display: flex;
    gap: 12px;
  }

  input {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjMzMzMzIDBDMi4zODc4MSAwIDAgMi4zODc4MSAwIDUuMzMzMzNDMCA4LjI3ODg1IDIuMzg3ODEgMTAuNjY2NyA1LjMzMzMzIDEwLjY2NjdDNi41NjU4MSAxMC42NjY3IDcuNzAwNjQgMTAuMjQ4NiA4LjYwMzc2IDkuNTQ2NTdMMTAuMTk1MyAxMS4xMzgxQzEwLjQ1NTYgMTEuMzk4NCAxMC44Nzc3IDExLjM5ODQgMTEuMTM4MSAxMS4xMzgxQzExLjM5ODQgMTAuODc3NyAxMS4zOTg0IDEwLjQ1NTYgMTEuMTM4MSAxMC4xOTUzTDkuNTQ2NTcgOC42MDM3NkMxMC4yNDg2IDcuNzAwNjQgMTAuNjY2NyA2LjU2NTgxIDEwLjY2NjcgNS4zMzMzM0MxMC42NjY3IDIuMzg3ODEgOC4yNzg4NSAwIDUuMzMzMzMgMFpNMS4zMzMzMyA1LjMzMzMzQzEuMzMzMzMgMy4xMjQxOSAzLjEyNDE5IDEuMzMzMzMgNS4zMzMzMyAxLjMzMzMzQzcuNTQyNDcgMS4zMzMzMyA5LjMzMzMzIDMuMTI0MTkgOS4zMzMzMyA1LjMzMzMzQzkuMzMzMzMgNy41NDI0NyA3LjU0MjQ3IDkuMzMzMzMgNS4zMzMzMyA5LjMzMzMzQzMuMTI0MTkgOS4zMzMzMyAxLjMzMzMzIDcuNTQyNDcgMS4zMzMzMyA1LjMzMzMzWiIgZmlsbD0iIzFBMUExQSIvPgo8L3N2Zz4K")
      no-repeat 8% center #f7f7f7;
    border-radius: 50px;
    border: 1px solid #f7f7f7;
    height: 40px;
    padding-left: 44px;
    width: 100%;
  }

  input::placeholder {
    color: #737373;
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 61.33px;
`;

export const Basket = styled.img`
  height: auto;
  color: #1a1a1a;
`;
