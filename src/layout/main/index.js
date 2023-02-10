import React from "react";
import News from "./news";
import Search from "./search";
import { MainContent } from "./styled";

function Main() {
  return (
    <MainContent>
      <Search />
      <News/>
    </MainContent>
  );
}

export default Main;
