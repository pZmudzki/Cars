import React from "react";

function Container({ className = "", children }) {
  return (
    <div
      className={"container mx-auto max-w-[1200px] px-4 xl:px-0 " + className}
    >
      {children}
    </div>
  );
}

export default Container;
