import React from "react";
import SubHeader from "./sub-header";
import PitchBar from "./pitch-bar/index.js";
import MainHeader from "./main-header/index.js";

function Header() {
  return (
    <>
      <SubHeader />
      <MainHeader />
      <PitchBar />
    </>
  );
}

export default Header;
