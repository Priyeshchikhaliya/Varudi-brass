/* eslint-disable react/prop-types */
import { useState } from "react";
import Headerbar from "./HeaderBar";

function Layout(props) {
  return (
    <div className="relative flex flex-col no-scrollbar max-w-[1920px] overflow-y-hidden max-h-fit">
      <div className={`h-fit flex flex-col w-full overflow-hidden`}>
        <Headerbar />
      </div>
    </div>
  );
}

export default Layout;
