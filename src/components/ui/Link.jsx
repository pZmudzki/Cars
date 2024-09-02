import React from "react";

function Link({ href, children, outline }) {
  return (
    <a
      href={href}
      className={`sm:py-3 sm:px-7 py-2 px-4 text-sm ${
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
