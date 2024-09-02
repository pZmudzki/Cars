import React from "react";

function Link({ href, children, outline }) {
  return (
    <a
      href={href}
      className={`py-3 px-7 text-sm ${
        outline
          ? "bg-inherit border border-blue-primary text-blue-primary"
          : "bg-blue-primary text-white"
      } rounded-lg`}
    >
      {children}
    </a>
  );
}

export default Link;
