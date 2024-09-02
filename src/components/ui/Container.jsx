import React from "react";

function Container({ className = "", children }) {
  return (
    <div className={"container mx-auto max-w-[1200px] " + className}>
      {children}
    </div>
  );
}

export default Container;
